<script>
import ProductDetailVue from "../components/ProductDetailVue.vue"

export default {
  name: "ProductDetail",
  data() {
    return {
      id: null
    };
  },
  mounted() {
    this.id = parseInt(this.$route.params.id);
  },
  components:{
    ProductDetailVue,
  }
};
</script>

<template>
  <ProductDetailVue :id="id" />
</template>
