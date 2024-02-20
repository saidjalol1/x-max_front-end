<script>
import Footer from './components/FooterComp.vue'
import Navbar from './components/NavbarComp.vue'
import { ref, onMounted } from 'vue' // Import ref and onMounted from Vue

export default {
  name: "App",
  components: {
    Navbar,
    Footer
  },
  setup() {
    const wishlistProductCount = ref(0); // Define reactive variable

    const handleWishlistToggle = (value) => {
      wishlistProductCount.value += value; // Update wishlistProductCount
      console.log('wishlist-toggled event triggered with value:', value);
    }

    onMounted(() => {
      // Listen to 'wishlist-toggled' event emitted by Navbar component
      const navbarComponent = document.querySelector('navbar-comp'); // Assuming 'navbar-comp' is the tag name of Navbar component
      navbarComponent.addEventListener('wishlist-toggled', handleWishlistToggle);
    });

    return {
      wishlistProductCount // Expose wishlistProductCount to the template
    };
  }
}
</script>

<template>
   <Navbar :wishlistProductCount="wishlistProductCount" />
  <Footer />
</template>

<style scoped>

</style>
