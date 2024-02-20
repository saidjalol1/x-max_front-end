<script>
import Banner from "../components/BannerComp.vue"
import FilterBar from "../components/FilterComp.vue"
export default {
  name: 'homepage',
  data(){
        return {
            products: [
            {   
                id:1,
                image: "products/1.png",
                name: "Apple"
            },
            {
                id:2,
                image: "products/2.png",
                name: "Apple"
            },
            {
                id:3,
                image: "products/3.png",
                name: "Apple"
            },
            {
                id:4,
                image: "products/4.png",
                name: "Apple"
            },
            {
                id:5,
                image: "products/5.png",
                name: "Apple"
            },
            {
                id:6,
                image: "products/6.png",
                name: "Apple"
            },
            {
                id:7,
                image: "products/7.png",
                name: "Apple"
            },
            {
                id:8,
                image: "products/8.png",
                name: "Apple"
            },
            {
                id:9,
                image: "products/9.png",
                name: "Apple"
            },
            {
                id:10,
                image: "products/10.png",
                name: "Apple"
            }, 
            {
                id:11,
                image: "products/11.png",
                name: "Apple"
            },
            {
                id:12,
                image: "products/12.png",
                name: "Apple"
            }
        ]
        }
    },
    mounted() {
    this.products.forEach(product => {
      if (this.productInWishlist(product.id)) {
        product.wishlist = true;
      }
    });
  },
    methods: {
        toggleWishlist(id) {
            const product = this.products.find(p => p.id === id);
            if (product) {
   
                product.wishlist = !product.wishlist;

                const emitValue = product.wishlist ? 1 : -1;
                
                console.log(this.$emit('wishlist-toggled', emitValue));

                const wishlistItems = JSON.parse(localStorage.getItem('wishlist')) || [];
                if (product.wishlist) {
                    wishlistItems.push(product.id);
                } else {
                    const index = wishlistItems.indexOf(product.id);
                    if (index !== -1) {
                        wishlistItems.splice(index, 1);
                    }
                }
                localStorage.setItem('wishlist', JSON.stringify(wishlistItems));

    
                const icon = document.querySelector(`.wishlist_icon[data-product-id="${id}"] svg path`);
                if (icon) {
                    if (product.wishlist) {
                        icon.style.fill = 'red';
                    }else {
                        icon.style.fill = '#1C1C27';
                    }
                }
            }
},

    productInWishlist(id) {
      const wishlistItems = JSON.parse(localStorage.getItem('wishlist'));
      return wishlistItems && wishlistItems.includes(id);
    }
  },
  components:{
    Banner,
    FilterBar,
  }
}


</script>

<template>
  <Banner />
  <FilterBar />
  <div class="container">
       <div class="product_wrapper">
        <div class="product" v-for="product in products" :key="product.id">
            <div class="wishlist_icon" @click="toggleWishlist(product.id)" :class="{ 'filled': productInWishlist(product.id) }" :data-product-id="product.id">
                <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path 
                    d="M10.001 1.52898C12.35 -0.58002 15.98 -0.51002 18.243 1.75698C20.505 4.02498 20.583 7.63698 18.479 9.99298L9.99901 18.485L1.52101 9.99298C-0.582994 7.63698 -0.503994 4.01898 1.75701 1.75698C4.02201 -0.50702 7.64501 -0.58302 10.001 1.52898ZM16.827 3.16998C15.327 1.66798 12.907 1.60698 11.337 3.01698L10.002 4.21498L8.66601 3.01798C7.09101 1.60598 4.67601 1.66798 3.17201 3.17198C1.68201 4.66198 1.60701 7.04698 2.98001 8.62298L10 15.654L17.02 8.62398C18.394 7.04698 18.319 4.66498 16.827 3.16998Z" 
                    fill="#1C1C27"/>
                </svg>
            </div>
            <router-link :to="{ name: 'ProductDetail', params: { id: product.id }}">
                <div class="product_image">
                    <img :src="product.image">
                </div>
                <div class="name">{{ product.name }}</div>
            </router-link>
        </div>
       </div>
    </div>
</template>

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
        box-shadow: -1px 5px 12px -1px rgba(34, 60, 80, 0.2);
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
        top: 4%;
        right: -40%;
        cursor: pointer;
       
    }
    .wishlist_icon svg{
        width: 100%;
        height: 100%;
    }
    .wishlist_icon svg path {
  fill: #1C1C27; /* Default color */
}

.wishlist_icon.filled svg path {
  fill: red; /* Filled color */
}
@media screen and (max-width:1368px){
    .product{
        width: 360px;
    }
}
@media screen and (max-width:1268px){
    .product{
        width: 320px;
    }
}
@media screen and (max-width:1120px){
    .product{
        width: 300px;
    }
}
@media screen and (max-width:1068px){
    .product_wrapper{
        grid-template-columns: repeat(2,1fr);
    }
    .product{
        width: 400px;
    }
}
@media screen and (max-width:942px){
    .product{
        width: 360px;
    }
}
@media screen and (max-width:846px){
    .product{
        width: 320px;
    }
}
@media screen and (max-width:768px){
    .product_wrapper{
        grid-template-columns: repeat(1,1fr);
    }
    .product{
        width: 400px;
    }
}
@media screen and (max-width:468px){
    .product{
        width: 300px;
    }
}
</style>
