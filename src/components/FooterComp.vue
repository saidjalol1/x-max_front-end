<template>
    <footer>
        <div class="footer">
            <div class="logo">
                <RouterLink to="/"><img src="../assets/QPICK.svg"/></RouterLink>
            </div>
            <div class="routes">
                <RouterLink to="/wishlist">Yoqtirganlarim</RouterLink>
                <RouterLink to="/cart">Savatcha</RouterLink>
                <a href="/">Bog'lanish</a>
            </div>
            <div class="social_media_icons">
                <p><a href=""><img src="../assets/VK.svg" alt=""></a></p>
                <p><a href=""><img src="../assets/Instagram.svg" alt=""></a></p>
                <p><a href=""><img src="../assets/Telegram.svg" alt=""></a></p>
                <p><a href=""><img src="../assets/Whatsapp.svg" alt=""></a></p>
            </div>
        </div>
    </footer>
</template>
<script>

</script>
<style scoped>
footer{
    width: 100%;
    padding: 0% 5%;
    overflow-x: hidden;
    margin-top:100px;
}
footer .footer {
    width: 100%;
    background-color: white;
    padding: 2% 2%;
    border-radius: 30px 30px 0px 0px; 
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 20px;
}
footer .footer .social_media_icons{
    display: flex;
    flex: wrap;
    align-items: center;
    column-gap: 20px;
    padding: 0% 0% 0% 10%;
}
footer .footer .social_media_icons p a img{
   width: 30px;
   height: 30px;
}
footer .footer .routes{
    padding-top:2%;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
}
footer .footer .routes a{
    font-size: 17px;
    font-weight: 400;
    color: black;
}
.logo{
    width: 105px;
    height: 50px;
}
.logo a img{
    width: 100%;
    height: 100%;
}
@media screen and (max-width: 768px) {
footer .footer {
    padding: 5% 5%;
}
}
@media screen and (max-width: 668px) {
footer .footer {
    padding: 5% 5%;
}
footer .footer {
    padding: 5% 5%;
    grid-template-columns: repeat(1,1fr);
}
footer .footer .social_media_icons{
    margin: 2% 0;
    padding: 0;
}
}
</style>