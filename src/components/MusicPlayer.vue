<template>
    <div class="musicPlayer" v-if="this.$store.getters.isPlayerShown">
        <img class="cover" :src="track.cover"/>
        <div class="wrapper trackname">
            <h2>{{track.name.toUpperCase()}}</h2>
            <p class="pale">Need Lesenger</p>
        </div>
        <div class="wrapper controls">
            <font-awesome-icon class="icons" :icon="['fas','backward']" @click="this.$store.dispatch('prev')"/>
            <font-awesome-icon class="icons" v-if="status" :icon="['fas','pause']" @click="this.$store.dispatch('pause')" />
            <font-awesome-icon class="icons" v-else :icon="['fas','play']" @click="this.$store.dispatch('continue')" />
            <font-awesome-icon class="icons" :icon="['fas','forward']" @click="this.$store.dispatch('next')"/>
        </div>
        <div class="wrapper time pale">
            <div class="currentTime">{{correctTime(currentTime)}}</div>
            <div class="timeLine">
                <input class="bar" type="range" min="0" :max="playing.duration"
                       v-model="currentTime" v-on:input="setTime" />
            </div>
            <div class="trackDuration">{{track.duration}}</div>
        </div>
        <div class="wrapper close">
            <font-awesome-icon class="icons" :icon="['fas', 'close']"
            @click="this.$store.dispatch('mpClose')"/>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: "MusicPlayer",
        data(){
          return{
            trackPath: '',
            currentTime: 0
          }
        },
        computed: {
            ...mapGetters({
                track: 'currentTrack',
                status: 'playerStatus',
                playing: 'playingTrack'
            }),
        },
        watch:{
            track: function () {
                let aud = new Audio(require(`../assets/albums/${this.track.path}/${this.track.link}`))
                aud.preload = "metadata"
                aud.onloadeddata =()=>{
                    this.track.duration = this.correctTime(aud.duration)
                }
                this.track.cover = require(`../assets/albums/${this.track.path}/cover.jpg`)
                this.trackPath = this.track.path
                this.playing.ontimeupdate = () => {
                  this.currentTime = this.playing.currentTime
                }
            },
            trackPath: function () {
              let albumNames = this.$store.getters.albumNames
              for (let i = 0; i < albumNames.length; i++) {
                if (this.trackPath === albumNames[i].path){
                  this.emitter.emit("closeAllExcepts", albumNames[i].name)
                }
              }
            },
            currentTime: function () {
              if (this.currentTime === this.playing.duration) this.$store.commit('next')
            }
    },
      methods:{
          correctTime(time){
            let minutes = Math.floor(time / 60)
            let seconds = Math.floor(time) % 60
            if (seconds < 10) seconds = `0${seconds}`
            return `${minutes}:${seconds}`
          },
          setTime(){
            this.$store.dispatch('setTime', parseInt(event.target.value))
          }
      }
        }
</script>

<style scoped>
.musicPlayer{
    width: 62%;
    min-width: 700px;
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
    width:200px;
    text-align: start;
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

.close{
  width:10px;
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
  /*border: solid 20px transparent;*/
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