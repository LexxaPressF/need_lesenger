<template>
    <div class="musicPlayer" v-if="this.$store.getters.isPlayerShown">
        <img class="cover" src="../assets/albums/SIF2/cover.jpg"/>
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
        <div class="wrapper close">
            <font-awesome-icon class="icons" :icon="['fas', 'close']"
            @click="this.$store.dispatch('mpClose')"/>
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

.wrapper{
  justify-content: center;
  align-items: center;
}

.cover{
    width: 70px;
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
    cursor: pointer;
}

.icons:hover{
  color: rgba(227, 227, 227, 1);
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
  display: flex;
  align-items: center;
}

/*Сброс input type range*/
input[type=range] {
  -webkit-appearance: none; /* Скрывает слайдер, чтобы можно было создать свой */
  width: 100%; /* Указание параметра ширины требуется для Firefox. */
  background-color: transparent;
}

input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
}

input[type=range]:focus {
  outline: none; /* Убирает голубую границу у элемента. */
}

input[type=range]::-ms-track {
  width: 100%;
  cursor: pointer;
  background: transparent; /* Скрывает слайдер, чтобы можно было добавить собственные стили. */
  border-color: transparent;
  color: transparent;
}

/*Стилизация своего ползунка*/

.bar{
  width: 100%;
  cursor: pointer;
}
/*Обычный*/
.bar::-webkit-slider-runnable-track{
  background: rgba(224, 224, 224, 0.85);
  height: 2px;
  border-radius: 8px;
}

.bar::-webkit-slider-thumb {
  height: 14px;
  width: 14px;
  cursor: pointer;
  -webkit-appearance: none;
  border-radius: 8px ;
  margin-top:-6px;
  background: rgba(227, 227, 227, 0.5);
}


/*Mozila*/
.bar::-moz-range-track{
  background: rgba(224, 224, 224, 0.85);
  height: 2px;
  border-radius: 8px;
}

.bar::-moz-range-thumb {
  height: 14px;
  width: 14px;
  cursor: pointer;
  -webkit-appearance: none;
  border-radius: 8px ;
  margin-top:-6px;
  background: rgba(227, 227, 227, 0.5);
}

/*IE*/
.bar::-ms-track{
  background: rgba(224, 224, 224, 0.85);
  height: 2px;
  border-radius: 8px;
}

.bar::-ms-thumb {
  height: 14px;
  width: 14px;
  cursor: pointer;
  -webkit-appearance: none;
  border-radius: 8px ;
  margin-top:-6px;
  background: rgba(227, 227, 227, 0.5);
}
</style>