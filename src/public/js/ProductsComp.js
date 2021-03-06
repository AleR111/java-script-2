const descriptionCarousel =  {
    props: ['img'],
    template: `
        <div class="description__carousel">

            <div class="description__carousel-box"> <a class="carousel__prev" href="#">
                    <svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12.6998 3.7499L4.9498 11.4999L12.6998 19.2499L11.1498 22.3499L0.299805 11.4999L11.1498 0.649902L12.6998 3.7499Z"
                            fill="black" />
                    </svg>
                </a>

                <div class="description__img-box"><img :src="img" alt="woman" class="description__img">
                </div>

                <a class="carousel__next" href="#">
                    <svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0.299805 19.2499L8.0498 11.4999L0.299805 3.7499L1.8498 0.649902L12.6998 11.4999L1.8498 22.3499L0.299805 19.2499Z"
                            fill="#F16D7F" />
                    </svg>
                </a>
            </div>

        </div>
    `

};

const descriptionBorder = {

    props: ['product'],
    data() {
        return {
            cartAPI: this.$root.$refs.cart,
        };
    },
    template: `
        <div class="description__border">
            <div class="center">
                <div class="description__content">
                    <h4 class="headeng-mini description__heading-mini">{{product.category}}</h4>
                    <hr class="description__underline">
                    <h3 class="description__heading">{{product.product_name}}</h3>
                    <p class="text description__text">{{product.description}}
                    </p>
                    <p class="product__price description__price">\${{product.price}}
                    </p>
                    <hr class="description__rule">
                    <div class="filters-down description__filters">
                        <details class="filters__item">
                            <summary class="description__summ filters__after filters__summary_center">CHOOSE COLOR
                            </summary>
                            <div class="filters__box_position filters__box_first">
                                <label for="black">
                                    <input id="black" name="color" type="radio"> Black
                                </label>
                                <label for="green">
                                    <input id="green" name="color" type="radio"> Green
                                </label>
                                <label for="dark-blue">
                                    <input id="dark-blue" name="color" type="radio"> Dark blue
                                </label>
                                <label for="light-yellow">
                                    <input id="light-yellow" name="color" type="radio"> Light yellow
                                </label>
                                <label for="red">
                                    <input id="red" name="color" type="radio"> Red
                                </label>
                            </div>
                        </details>
                        <details class="filters__item">
                            <summary class="description__summ filters__after filters__summary_center">CHOOSE SIZE
                            </summary>
                            <div class="filters__box_position">
                                <label for="xs">
                                    <input id="xs" name="sixe" type="radio"> XS
                                </label>
                                <label for="s">
                                    <input id="s" name="sixe" type="radio"> S
                                </label>
                                <label for="m">
                                    <input id="m" name="sixe" type="radio"> M
                                </label>
                                <label for="l">
                                    <input id="l" name="sixe" type="radio"> L
                                </label>
                            </div>
                        </details>
                        <details class="filters__item">
                            <summary class="description__summ filters__after filters__summary_center">QUANTITY
                            </summary>
                            <div class="filters__box_position filters__box_quanity">
                                <input class="filter__quanity" type="number" value="1" min="0" max="100">
                            </div>
                        </details>
                    </div>
                    <button class="button-cart description__cart" @click="cartAPI.addProduct(product)">
                        <svg class="description__cart_img" width="32" height="29" viewBox="0 0 32 29" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M26.2009 29C25.5532 28.9738 24.9415 28.6948 24.4972 28.2227C24.0529 27.7506 23.8114 27.1232 23.8245 26.475C23.8376 25.8269 24.1043 25.2097 24.5673 24.7559C25.0303 24.3022 25.6527 24.048 26.301 24.048C26.9493 24.048 27.5717 24.3022 28.0347 24.7559C28.4977 25.2097 28.7644 25.8269 28.7775 26.475C28.7906 27.1232 28.549 27.7506 28.1047 28.2227C27.6604 28.6948 27.0488 28.9738 26.401 29H26.2009ZM6.75293 26.32C6.75293 25.79 6.91011 25.2718 7.20459 24.8311C7.49907 24.3904 7.91764 24.0469 8.40735 23.844C8.89705 23.6412 9.43594 23.5881 9.95581 23.6915C10.4757 23.7949 10.9532 24.0502 11.328 24.425C11.7028 24.7998 11.9581 25.2773 12.0615 25.7972C12.1649 26.317 12.1118 26.8559 11.9089 27.3456C11.7061 27.8353 11.3626 28.2539 10.9219 28.5483C10.4812 28.8428 9.96304 29 9.43298 29C9.08087 29.0003 8.73212 28.9311 8.40674 28.7966C8.08136 28.662 7.78569 28.4646 7.53662 28.2158C7.28755 27.9669 7.09001 27.6713 6.9552 27.3461C6.82039 27.0208 6.75098 26.6721 6.75098 26.32H6.75293ZM10.553 20.686C10.2935 20.6868 10.0409 20.6024 9.83411 20.4457C9.62727 20.2891 9.47758 20.0689 9.40796 19.819L4.57495 2.36401H1.18201C0.868521 2.36401 0.567859 2.23947 0.346191 2.01781C0.124523 1.79614 0 1.49549 0 1.18201C0 0.868519 0.124523 0.567873 0.346191 0.346205C0.567859 0.124537 0.868521 5.81268e-06 1.18201 5.81268e-06H5.46301C5.7225 -0.00080736 5.97504 0.0837201 6.18176 0.240568C6.38848 0.397416 6.53784 0.617884 6.60693 0.868006L11.4399 18.323H24.6179L29.001 8.27501H14.401C14.2428 8.27961 14.0854 8.25242 13.9379 8.19507C13.7904 8.13771 13.6559 8.05134 13.5424 7.94108C13.4288 7.83082 13.3386 7.69891 13.277 7.55315C13.2154 7.40739 13.1836 7.25075 13.1836 7.0925C13.1836 6.93426 13.2154 6.77762 13.277 6.63186C13.3386 6.4861 13.4288 6.35419 13.5424 6.24393C13.6559 6.13367 13.7904 6.0473 13.9379 5.98994C14.0854 5.93259 14.2428 5.90541 14.401 5.91001H30.814C31.0097 5.90996 31.2022 5.95866 31.3744 6.05172C31.5465 6.14478 31.6928 6.27926 31.7999 6.44301C31.9078 6.60729 31.9734 6.79569 31.9908 6.99145C32.0083 7.18721 31.9771 7.38424 31.9 7.565L26.495 19.977C26.4026 20.1876 26.251 20.3668 26.0585 20.4927C25.866 20.6186 25.641 20.6858 25.411 20.686H10.553Z"
                                fill="#E8E8E8" />
                        </svg>Add to Cart</button>
                </div>
            </div>
        </div>
    `

};

const similarProd = {

    props: ['cartItem'],

    data() {
        return {
            cartAPI: this.$root.$refs.cart,
            productsAPI: this.$root.$refs.products,
        };
    },

    template: `
        <div class="product__card">
                <a href="#" @click="$root.btnProductClicked(), productsAPI.showFullProduct(cartItem)"><img class="product__img" :src="cartItem.img_src" alt="item"></a>
                <button class="product__cart" @click="cartAPI.addProduct(cartItem)"><img src="img/product-cart.svg" alt="cart"> Add to Cart</button>
                <div class="product__text">
                    <a class="product__name" href="#" @click="productsAPI.showFullProduct(cartItem)">{{cartItem.product_name}}</a>
                    <p class="text">{{cartItem.description}}</p>
                    <p class="product__price">\${{cartItem.price}}</p>
                </div>
            </div>
    `

};

const productItems = {

    components: { similarProd },
    props: ['similarProducts'],

    template: `
        <section class="product__items center">
        <div class="product__cards">
        <similar-prod ref="refref" v-for="item of similarProducts" 
                :key="item.id_product"
                :cart-item="item">
                </similar-prod>
        </div>
    </section>
    `
};

const products = {

    components: { descriptionCarousel, descriptionBorder, productItems },
    data() {
        return {
            product: {},
            similarProducts: [],
            products: this.$root.$refs.catalog.products,
        }
    },

    methods: {
        showFullProduct(product) {
            this.product = product;
            this.getSimilarProducts(product.category)
        },
        getSimilarProducts(category) {
            this.similarProducts = [];

            let i = 0;
            this.products.forEach(elem => {
                if (i >= 3) return
                if (elem.category === category) this.similarProducts.push(elem);
                i++
            })
            console.log(this.similarProducts)
        }
    },

    template: `
        <div>
            <section class="description">
                <description-carousel :img = 'product.img_src'></description-carousel>
                <description-border :product = 'product'></description-border>
            </section>
            <product-items :similar-products = 'similarProducts'></product-items>
        </div>
    `

};

export default products;