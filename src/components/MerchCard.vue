<template>
    <div class="card_bg merches">
        <img class="cover" src="../assets/img/merch_cover_1.svg"/>
        <div class="info">
            <h1>{{name}}SELF-INFECTED</h1>
            <div class="where">{{where}}Концерт 21 апреля, 2021 г</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MerchCard",
        props:{
            name: String,
            where: String
        }
    }
</script>

<style scoped>

.cover{
    width: 220px;
}

.info{
    width: 220px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    font-family: 'Verdana', serif;
    font-size: 0.8em;
    color: #6A6A6A;
    line-height: 1.8;
    list-style: square inside;
}

h1{
    color: black;
    font-size: 1.8em;
    margin: 16px 0 12px 0;
}

.merches{
    margin: 3% 0 3% 0;
}

</style>