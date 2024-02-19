<template>
    <div class="container">
       <div class="product_wrapper">
        <div class="product" v-for="product in products" :key="product.id">
            <div class="wishlist_icon" @click="wishlistToggle(product.id)" :class="{ 'filled': product.wishlist }">
                <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path 
                    d="M10.001 1.52898C12.35 -0.58002 15.98 -0.51002 18.243 1.75698C20.505 4.02498 20.583 7.63698 18.479 9.99298L9.99901 18.485L1.52101 9.99298C-0.582994 7.63698 -0.503994 4.01898 1.75701 1.75698C4.02201 -0.50702 7.64501 -0.58302 10.001 1.52898ZM16.827 3.16998C15.327 1.66798 12.907 1.60698 11.337 3.01698L10.002 4.21498L8.66601 3.01798C7.09101 1.60598 4.67601 1.66798 3.17201 3.17198C1.68201 4.66198 1.60701 7.04698 2.98001 8.62298L10 15.654L17.02 8.62398C18.394 7.04698 18.319 4.66498 16.827 3.16998Z" 
                    fill="#1C1C27"/>
                </svg>
            </div>
            <div class="product_image">
                <img :src="product.image">
            </div>
            <div class="name">{{ product.name }}</div>
        </div>
       </div>
    </div>
</template>

<script>
export default {
    name: 'product',
    data(){
        return {
            products: [
            {   
                id:1,
                image: "src/assets/products/1.png",
                name: "Apple"
            },
            {
                id:2,
                image: "src/assets/products/2.png",
                name: "Apple"
            },
            {
                id:3,
                image: "src/assets/products/3.png",
                name: "Apple"
            },
            {
                id:4,
                image: "src/assets/products/4.png",
                name: "Apple"
            },
            {
                id:5,
                image: "src/assets/products/5.png",
                name: "Apple"
            },
            {
                id:6,
                image: "src/assets/products/6.png",
                name: "Apple"
            },
            {
                id:7,
                image: "src/assets/products/7.png",
                name: "Apple"
            },
            {
                id:8,
                image: "src/assets/products/8.png",
                name: "Apple"
            },
            {
                id:9,
                image: "src/assets/products/9.png",
                name: "Apple"
            },
            {
                id:10,
                image: "src/assets/products/10.png",
                name: "Apple"
            }, 
            {
                id:11,
                image: "src/assets/products/11.png",
                name: "Apple"
            },
            {
                id:12,
                image: "src/assets/products/12.png",
                name: "Apple"
            }
        ]
        }
    },
    methods: {
        wishlistToggle(id) {
            const product = this.products.find(p => p.id === id);
            if (product) {
                product.wishlist = !product.wishlist; 
                
                localStorage.setItem('wishlist', JSON.stringify(this.products.filter(p => p.wishlist).map(p => p.id)));
            }
        }
    },
    mounted() {
        const wishlistItems = JSON.parse(localStorage.getItem('wishlist'));
        if (wishlistItems) {
            this.products.forEach(product => {
                if (wishlistItems.includes(product.id)) {
                    product.wishlist = true;
                }
            });
        }
    }
}
</script>

<style scoped>
    .product_wrapper{
        display: grid;
        grid-template-columns: repeat(3,1fr);
        row-gap: 30px;
        column-gap: 30px;
        margin-top: 50px;
    }
    .product{
        width: 400px;
        background-color: white;
        padding: 2% 2%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        border-radius: 30px;
        margin: 0 auto;
    }
    .name{
        font-size: 17px;
        font-weight: 600;
        color: black;
        margin-top: 20px;
    }
    .wishlist_icon{
        width: 30px;
        height: 30px;
        position: relative;
        right: -42%;
        cursor: pointer;
    }
    .wishlist_icon svg{
        width: 100%;
        height: 100%;
    }
    .wishlist_icon svg path {
        fill: #1C1C27;
}

    .wishlist_icon.filled svg path{
        fill: red;
}
</style>