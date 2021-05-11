Vue.component('search', {
    props: ['value'],
    template: `<!--<form action="#" class="search-form" @submit.prevent="$root.$refs.products.filter()">-->
               <form action="#" class="search-form" v-on:input = "$root.$refs.products.filter()">
                 <input type="text" class="search-field" v-bind:value = "value" v-on:input = "$emit('input', $event.target.value)">
                   <button class="btn-search" type="submit">
                     <i class="fas fa-search"></i>
                   </button>
                 </form>`,
})