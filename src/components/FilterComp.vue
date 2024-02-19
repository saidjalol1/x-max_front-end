<template>
    <div class="filter-bar">
        <p>Apple</p>
        <p>AppleWatch</p>
        <p>Watch</p>
        <p>Computers</p>
        <p>Notebooks</p>
        <p>Accessories</p>
        <p>Nmadr</p>
        <p>Apple</p>
        <p>AppleWatch</p>
        <p>Watch</p>
        <p>Computers</p>
        <p>Notebooks</p>
        <p>Accessories</p>
        <p>Nmadr</p> <p>Apple</p>
        <p>AppleWatch</p>
        <p>Watch</p>
        <p>Computers</p>
        <p>Notebooks</p>
        <p>Accessories</p>
        <p>Nmadr</p>
    </div>
</template>
<script>
</script>

<style scoped>
.filter-bar{
    width: 100%;
    margin-top: 30px;
    height: 70px;
    background-color: white;
    display: flex;
    column-gap: 10px;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    overflow-x: scroll;
    overflow-y: hidden;
}

.filter-bar p{
    height: 40px;
    display: flex;
    justify-content: center;
    padding: 0 2%;
    align-items: center;
    border-radius: 10px;
    background-color: #EAEAEA;
}

.filter-bar::-webkit-scrollbar{
    width:7px
}
.filter-bar.filter-bar::-webkit-scrollbar-thumb{
    width: 7px;
    border-radius: 20px;
}
.filter-bar::-webkit-scrollbar-track{
    background:#cccccc;border-radius:0px
}
.filter-bar::-webkit-scrollbar-thumb{
    background:#747272;border-radius:0px
}
</style>