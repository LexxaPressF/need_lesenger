<template>
    <div class="card_bg album">
        <img class="cover" src="../assets/img/SIF1.jpg"/>
        <div class="info">
            <h2>{{name}}SELF - INFECTED FLOWER, PT. TWO</h2>
            <div class="time">Need Lesenger 2021 {{time}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AlbumCard"
    }
</script>

<style scoped>
.cover{
    width: 210px;
}

.info{
    width: 210px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    font-family: 'Verdana', serif;
    font-size: 0.8em;
    color: #6A6A6A;
    line-height: 1.8;
}

h1{
    color: black;
    font-family: "SF Pro Display Regular", serif;
    font-size: 1.3em;
    font-weight: lighter;
    margin: 16px 0 12px 0;
}



.album{
    margin: 3% 0 3% 0;
}
</style>