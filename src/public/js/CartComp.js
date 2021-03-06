const cartBlockRight = {
    props: ['cartItem', 'totalPrice'],
    template: `            
            <div class="cart-block__right">
            <form action="#" class="form cart-block__form">
                <h3 class="form__heading">SHIPPING ADRESS</h3>
                <input class="form__input" type="text" placeholder="Bangladesh">
                <input class="form__input" type="text" placeholder="State">
                <input class="form__input cart-block__input" type="text" placeholder="Postcode / Zip">
                <button class="form__butt cart-block__butt">GET A QUOTE</button>
            </form>
            <div class="checkout">
                <ul class="checkout__content">
                    <li class="checkout__cost">SUB TOTAL <span class="checkout__cost_money"></span>\${{totalPrice}}</li>
                    <li class="checkout__cost select_text">GRAND TOTAL
                        <hr class="checkout__cost_rule">
                        <span class="checkout__cost_money select">\${{totalPrice}}</span>
                    </li>
                </ul>
                <hr class="checkout__rule">
                <button class="checkout__butt">PROCEED TO CHECKOUT</button>
            </div>
        </div>
    `
};

const cartItem = {
    props: ['cartItem', 'img'],
    template: `        
            <div class="order">
                <div class="order__box-img"><img class="order__img" :src="cartItem.img_src" alt="man"></div>
                <div class="order__descrip">
                    <a href="#" class="order__name">{{cartItem.product_name}}</a>
                    <ul class="order__param">
                        <li>Price: <span class="select_text">\${{cartItem.price}}</span></li>
                        <li>Color: <span>Red</span></li>
                        <li>Size: <span>Xl</span></li>
                        <li>Quantity: <input class="order__param_quantity" type="number" :value="cartItem.quantity" min="0" max="100">
                        </li>
                    </ul>
                </div>
                <button class="butt-clouse"><img class="butt-clouse__img" src="img/butt_clouse.svg"
                                                 alt="clouse" @click="$emit('remove', cartItem)"></button>
            </div>
    `
};


const cart = {
    components: { cartItem, cartBlockRight },
    data() {
        return {
            imgCart: 'https://placehold.it/50x100',
            cartUrl: '/getBasket.json',
            cartItems: [],
            showCart: false,
        }
    },
    methods: {
        addProduct(product) {
            let find = this.cartItems.find(el => el.id_product === product.id_product);
            if (find) {
                this.$parent.putJson(`/api/cart/${find.id_product}`, {quantity: 1});
                find.quantity++;
            } else {
                let prod = Object.assign({quantity: 1}, product);
                this.$parent.postJson('/api/cart', prod)
                    .then(data => {
                        if (data.result === 1) {
                            this.cartItems.push(prod);
                        }
                    });
            }
        },
        remove(item) {
            this.$parent.deleteJson(`/api/cart/${item.id_product}`, item)
                .then(data => {
                    if(data.result === 1) {
                        this.cartItems.splice(this.cartItems.indexOf(item), 1)
                    }
                })
        },
        removeAll() {
            this.$parent.deleteJson(`/api/allCart`)
                .then(data => {
                    if (data.result === 1) {
                            this.cartItems = []
                    }
                })
        },
    },
    computed: {
        getTotalPriceOfProduct() {
            return this.cartItems.reduce((total, elem) =>
                    total += elem.price * elem.quantity
                , 0)
        }
    },
    mounted() {
        this.$parent.getJson('/api/cart')
            .then(data => {
                for (let el of data.contents) {
                    this.cartItems.push(el);
                }
            });
    },
    template: `
        <section class="cart-block">
            <div class="item-cart cart-block__left">
                <p v-if="!cartItems.length" class="cart__text_empty">Cart empty</p>
                <cart-item class="cart-item" 
                v-for="item of cartItems" 
                :key="item.id_product"
                :cart-item="item" 
                :img="imgCart"
                @remove="remove">
                </cart-item>
                <div v-show="cartItems.length" class="item-cart__box-butt">
                    <button class="item-cart__butt" @click = "removeAll">CLEAR SHOPPING CART</button>
                    <button class="item-cart__butt">CONTINUE SHOPPING</button>
                </div>
            
            </div>
            
            <cart-block-right :totalPrice="getTotalPriceOfProduct" :cart-item="cartItems"></cart-block-right>
        </section>
`
};



export default cart;