<template>
    <div class="mp-wrapper">
    <div class="musicPlayer" v-if="this.$store.getters.isPlayerShown">
        <img class="cover" :src="track.cover"/>
        <div class="wrapper trackname">
            <h2>{{track.name.toUpperCase()}}</h2>
            <p class="pale">Need Lesenger</p>
        </div>
        <div class="wrapper controls">
            <font-awesome-icon class="icons" :icon="['fas','backward']" @click="previosTrack"/>
            <font-awesome-icon class="icons" v-if="status" :icon="['fas','pause']" @click="this.$store.dispatch('pause')" />
            <font-awesome-icon class="icons" v-else :icon="['fas','play']" @click="this.$store.dispatch('continue')" />
            <font-awesome-icon class="icons" :icon="['fas','forward']" @click="nextTrack"/>
        </div>
        <div class="wrapper time pale">
            <div class="currentTime">{{correctTime(currentTime)}}</div>
            <div class="timeLine">
                <input class="timebar" type="range" min="0" :max="playing.duration"
                       v-model="currentTime" v-on:input="setTime" />
            </div>
            <div class="trackDuration">{{track.duration}}</div>
        </div>
        <div class="wrapper volume" @mouseover="volumeShow = true">
            <font-awesome-icon class="icons volumeIcon" :icon="['fas', 'volume-high']"
                v-if="this.volume != 0" @click="VolumeOff"/>
            <font-awesome-icon class="icons volumeIcon" :icon="['fas', 'volume-xmark']"
                               v-else @click="VolumeOn"/>
            <div class="volumeSwitch" v-if="volumeShow">
                <input type="range" class="volumebar" min="0" max="100"
                       v-model="volume" v-on:input="setVolume"
                       @change="hideDelay"/>
            </div>
        </div>
        <div class="wrapper close">
            <font-awesome-icon class="icons" :icon="['fas', 'close']"
            @click="this.$store.dispatch('mpClose')"/>
        </div>
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
            currentTime: 0,
            volume: 30,
            volumeShow: false
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
              if (this.currentTime === this.playing.duration) {
                  this.$store.commit('next')
                  this.$store.dispatch('setVolume', this.volume / 100)
              }
            },
            volume: function () {
                this.$store.dispatch('setVolume', this.volume / 100)
            }
    },
      methods:{
          correctTime(time){
            let minutes = Math.floor(time / 60)
            let seconds = Math.floor(time) % 60
            if (seconds < 10) seconds = `0${seconds}`
            return `${minutes}:${seconds}`
          },
          previosTrack(){
              this.$store.dispatch('prev')
              this.$store.dispatch('setVolume', parseFloat(this.volume / 100))
          },
          nextTrack(){
              this.$store.dispatch('next')
              this.$store.dispatch('setVolume', parseFloat(this.volume / 100))
          },
          setTime(){
            this.$store.dispatch('setTime', parseInt(event.target.value))
          },
          setVolume(){
              this.$store.dispatch('setVolume', parseFloat(event.target.value / 100))
          },
          VolumeOff(){
            this.volume = 0
            this.hideDelay()
          },
        VolumeOn(){
          this.volume = 30
          this.hideDelay()
        },
          hideDelay(){
              setTimeout(() => { this.volumeShow =  false}, 1000)
          }
      }
        }
</script>

<style scoped>
.mp-wrapper{
    width: 100%;
    position: fixed;
    display: flex;
    justify-content: center;
    bottom: 0;
}

.musicPlayer{
    width: 850px;
    padding: 0 40px 0 40px;
    height: 88px;
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
    justify-content: start;
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
    cursor: pointer;
}

.icons:hover{
  color: rgb(227, 227, 227);
}

.time{
    font-size: 0.7em;
    width: 100%;
    flex-wrap: nowrap;
    gap: 5px;
    justify-content: space-between;
}

.timeLine{
  min-width: 70%;
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
    overflow: hidden;
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

/*Стилизация своих ползунков*/

.timebar{
  height: 40px;
  width: 100%;
  cursor: pointer;
  background-color: #9a905d;
}
/*Обычный*/
.timebar::-webkit-slider-runnable-track{
  background: rgba(224, 224, 224, 0.85);
  height: 2px;
  border-radius: 8px;
}

.timebar::-webkit-slider-thumb {
  height: 14px;
  width: 14px;
  cursor: pointer;
  -webkit-appearance: none;
  border-radius: 8px ;
  margin-top:-6px;
  background: rgba(227, 227, 227, 0.5);
}


/*Mozila*/
.timebar::-moz-range-track{
  background: rgba(224, 224, 224, 0.85);
  height: 2px;
  border-radius: 8px;
}

.timebar::-moz-range-thumb {
  height: 14px;
  width: 14px;
  cursor: pointer;
  -webkit-appearance: none;
  border-radius: 8px ;
  margin-top:-6px;
  background: rgba(227, 227, 227, 0.5);
}

/*IE*/
.timebar::-ms-track{
  background: rgba(224, 224, 224, 0.85);
  height: 2px;
  border-radius: 8px;
}

.timebar::-ms-thumb {
  height: 14px;
  width: 14px;
  cursor: pointer;
  -webkit-appearance: none;
  border-radius: 8px ;
  margin-top:-6px;
  background: rgba(227, 227, 227, 0.5);
}

.volume{
    width:30px;
}

.volumeSwitch{
    height:34px;
    width:200px;
    position:absolute;
    bottom: 178px;
    background: rgba(114, 95, 234, 0.85);
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: rotate(-90deg);
}

.volumebar {
    height: 28px;
    border-radius: 16px;
    cursor: pointer;
    margin: 0 3px 0 3px;
    background-color: transparent;
}

/*Обычный*/
.volumebar::-webkit-slider-runnable-track{
    background: transparent;
    height: 10px;
    border-radius: 16px;
}

.volumebar::-webkit-slider-thumb {
    height: 10px;
    width: 0;
    cursor: pointer;
    -webkit-appearance: none;
    border-radius: 400px;
    margin-top:-2px;
    box-shadow: -100px 0 0 100px rgba(255, 255, 255, 0.9);
}


/*Mozila*/
.volumebar::-moz-range-track{
    background: rgba(224, 224, 224, 0.85);
    height: 2px;
    border-radius: 8px;
}

.volumebar::-moz-range-thumb {
    height: 14px;
    width: 14px;
    cursor: pointer;
    -webkit-appearance: none;
    border-radius: 8px ;
    margin-top:-6px;
    background: rgba(227, 227, 227, 0.5);
}

/*IE*/
.volumebar::-ms-track{
    background: rgba(224, 224, 224, 0.85);
    height: 2px;
    border-radius: 8px;
}

.volumebar::-ms-thumb {
    height: 14px;
    width: 14px;
    cursor: pointer;
    -webkit-appearance: none;
    border-radius: 8px ;
    margin-top:-6px;
    background: rgba(227, 227, 227, 0.5);
}


</style>