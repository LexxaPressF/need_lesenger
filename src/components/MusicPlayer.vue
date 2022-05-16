<template>
    <div class="musicPlayer" v-if="this.$store.getters.isPlayerShown">
        <img class="cover" src="../assets/img/SIF2.jpg"/>
        <div class="wrapper trackname">
            <h2>{{trackName}} LOVE HATE LOVE</h2>
            <p class="pale">Need Lesenger</p>
        </div>
        <div class="wrapper controls">
            <font-awesome-icon class="icons" :icon="['fas','backward']" />
            <font-awesome-icon class="icons" :icon="['fas','pause']" />
            <font-awesome-icon class="icons" :icon="['fas','forward']" />
        </div>
        <div class="wrapper time pale">
            <div class="currentTime">{{this.currentTime}}1:13</div>
            <div class="timeLine">
                <input class="bar" type="range"/>
            </div>
            <div class="trackDuration">{{this.duration}}3:43</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MusicPlayer"
    }
</script>

<style scoped>
.musicPlayer{
    width: 62%;
    padding: 0 40px 0 40px;
    position: fixed;
    height: 88px;
    bottom: 0;
    left: 19%;
    background: rgba(114, 95, 234, 0.85);
    backdrop-filter: blur(4px);
    border-radius: 28px 28px 0 0;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    column-gap: 20px;
    place-items: center;
}

.cover{
    width: 70px;
    cursor:pointer;
}

.pale{
    font-family: 'Verdana', serif;
    font-size: 0.8em;
    color: rgba(227, 227, 227, 1);
}

h2{
    font-size: 0.8em;
    color: white;
    margin: 10px 0 10px 0;
}

.trackname{
    min-width: 100px;
    max-width:120px
}

.controls{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    column-gap:8px;
    cursor: pointer;
}

.icons{
    color: white;
    opacity: 90%;
}

.time{
    font-size: 0.7em;
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
}

.timeLine{
    width: 70%;
}

.bar{
    width: 100%;
    
}
</style>