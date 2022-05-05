<template>
    <div class="card_bg track">
        <img class="cover" src="../assets/img/SIF2.jpg"/>
        <div class="wrapper trackname">
            <h2>{{albumName}}DISEASE</h2>
            <p class="pale">{{sign}}Need Lesenger</p>
        </div>
        <div class="pale">{{duration}}2:50</div>
    </div>
</template>

<script>
    export default {
        name: "TrackCard",
        props:{
            albumName: String,
            sign: String,
            duration: Number
        }
    }
</script>

<style scoped>
.cover{
    width: 70px;
}

.track{
    margin: 18px 0 18px 0;
    display: flex;
    flex-direction: row;
    column-gap: 20px;
    place-items: center;
}

.pale{
    font-family: 'Verdana', serif;
    font-size: 0.8em;
    color: #6A6A6A;
}

h2{
    font-size: 0.8em;
    margin: 10px 0 10px 0;
}

.trackname{
    width: 100px;
}
</style>