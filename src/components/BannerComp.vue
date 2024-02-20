<template>
   <div class="container">
        <div class="banner">
            <div class="title">
               Аксессуары для
               Iphone 13 Pro Max
            </div>
            <div class="image">
                <img src="../assets/iPhone-13-Pro-Max-silver-1000x1000 1.png" alt="">
            </div>
        </div>
   </div>
</template>

<script>
    export default {
        name : "banner",
    }
</script>

<style scoped>
.banner{
    width:100%;
    height:200px;
    background-color: #101010;
    border-radius:30px;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 50px;
    padding: 0 5%;
}
.banner .title{
    font-size: 35px;
    font-weight: 600;
    color: #FFFFFF;
    padding:0% 5%;
}
.banner .image img{
    width: 100%;
    height: 100%;
}
.banner .image{
    width: 351px;
    height: 226px;
    position: relative;
    flex-shrink: 0.5;
    bottom: 0;
}
@media screen and (max-width:878px){
.banner .title{
    font-size: 27px;
}
.banner .image{
    width: 300px;
    height: 220px;
}
}
@media screen and (max-width:768px){
.banner{
    column-gap: 20px;
}
.banner .title{
    font-size: 30px;
}
.banner .image{
    width: 340px;
    height: 230px;
    position:relative;
    bottom: 0;
}
}
@media screen and (max-width:568px){
.banner{
    column-gap: 20px;
}
.banner .title{
    font-size: 18px;
}
.banner .image{
    width: 276px;
    height: 176px;
    position:relative;
    bottom: -20px;
}
}
</style>
