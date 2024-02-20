<template>
    <header>
      <nav>
          <div class="logo">
              <RouterLink to="/"><img src="../assets/QPICK.svg"/></RouterLink>
          </div>
          <div class="icons-nav">
              <div class="indicator-and-icon">
                  <RouterLink to="/wishlist"><img src="../assets/Heart.svg"/></RouterLink>
                  <div class="indicator">{{ wishlistProductCount }}</div>
              </div>
              <div class="indicator-and-icon">
                  <RouterLink to="/cart"><img src="../assets/Vector.svg"/></RouterLink>
                  <div class="indicator">{{ cartProductCount }}</div>
              </div>
          </div>
      </nav>
      </header>
      <RouterView />
  </template>
  
  <script>
  export default {
    name: "Navbar",
    props: {
        wishlistProductCount: {
            type: Number,
            default: 0
        },
        cartProductCount: {
            type: Number,
            default: 0
        }
    },   
  };
  </script>
  
  
  <style scoped>
      nav{
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1% 5%;
      }
      .logo{
          width: 105px;
          height: 50px;
      }
      .logo a img{
          width: 100%;
          height: 100%;
      }
      .icons-nav{
          display: flex;
          align-items: center;
          column-gap: 20px;
      }
      .icons-nav img{
          width: 100%;
          height: 100%;
      }
      .icons-nav .indicator-and-icon a{
          width: 30px;
          height: 30px;
          display: flex;
      }
      .icons-nav .indicator-and-icon{
          display: flex;
      }
      .icons-nav .indicator-and-icon .indicator{
          width:20px;
          height:20px;
          background-color: #FFA542;
          color: white;
          font-size: 17px;
          font-weight: 800;
          text-align: center;
          border-radius: 50%;
          position: relative;
          top: -5px;
          left: -6px;
      }
  </style>
  