<template>
    <div class="card_bg concert">
        <img class="cover" src="../assets/img/plugs/concert_cover_1.svg"/>
        <ul class="info">
            <h1>{{name}}THE ROCK FEST</h1>
            <li class="time"><span>{{time}}21 апреля, 18:00</span></li>
            <li class="place"><span>{{place}}Бар “1703”</span></li>
            <li class="price"><span>{{price}}Бесплатный вход</span></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "ConcertCard",
        props:{
            name: String,
            time: String,
            place: String,
            price: String
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
    color: #725FEA;
    line-height: 1.8;
    list-style: square inside;
}

span{
    color: #6A6A6A;
}

h1{
    color: black;
    font-size: 1.8em;
    margin: 16px 0 12px 0;
}

.concert{
    margin: 3% 0 3% 0;
}
</style>