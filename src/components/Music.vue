<template>
<div id="bg_music">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <div id="presentation">
    <div id="cover" v-bind:style="{ backgroundImage: `url(${needCover})`}"></div>
  <div id="title">{{ tab.name }}</div>
  </div>
  <div id="minitabs">
  <button class="minitab" v-for="track in tab.tracks" :key="track.id"
    @click="trackPass(tab, track)">
    {{track}}
  </button>
  </div>
</div>
</template>

<script>
export default {
  name: "SideMusic",
  props: {
    tab: Object
  },
  computed: {
    needCover() {
        return require(`../assets/img/${this.tab.cover}`)
    }
  },
  methods:{
    trackPass(album, trackName){
      return this.emitter.emit("trackChosen", [album, trackName])
    }
  }

}
</script>

<style scoped>

#bg_music{
  margin: 0 20px;
  display: grid;
  width: 225px;
  height: 93vh;
  /*max-height: 98vh;*/
  border-radius: 20px 50px 20px 50px;
  grid-template-rows: 2fr 3fr;
  grid-template-columns: 1fr;
  transform: skewX(-4deg);
}

#presentation{
  margin: 10px;
}

#presentation{
  grid-row: 1;
  grid-column: 1;
  display: grid;
}

#cover{
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  min-height: 250px;
}

#title{
  margin: auto;
  color:white;
  text-align: center;
  font-size: 1.5em;
}

#minitabs{
  overflow: auto;
  grid-row: 2;
  grid-column: 1;
}


/*Для таба как для кнопки*/
#bg_music {
  position: relative;
  padding: 1em 1.8em;
  outline: none;
  border: 1px solid #303030;
  color: #ae00ff;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 15px;
  overflow: hidden;
  transition: 0.2s;
  font-weight: bold;
}

#bg_music:hover {
  box-shadow: 0 0 10px #ae00ff, 0 0 25px #001eff, 0 0 50px #ae00ff;
  transition-delay: 0.6s;
}

#bg_music span {
  position: absolute;
}

#bg_music span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #ae00ff);
}

#bg_music:hover span:nth-child(1) {
  left: 100%;
  transition: 0.7s;
}

#bg_music span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #001eff);
}

#bg_music:hover span:nth-child(3) {
  right: 100%;
  transition: 0.7s;
  transition-delay: 0.35s;
}

#bg_music span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #ae00ff);
}

#bg_music:hover span:nth-child(2) {
  top: 100%;
  transition: 0.7s;
  transition-delay: 0.17s;
}

#bg_music span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #001eff);
}

#bg_music:hover span:nth-child(4) {
  bottom: 100%;
  transition: 0.7s;
  transition-delay: 0.52s;
}

#bg_music:active span:nth-child(1)
span:nth-child(2)
span:nth-child(2)
span:nth-child(2) {
  transition: none;
}

.minitab {
  padding: 5px;
  margin: 20px 10px;
  font-size: 23px;
  cursor: pointer;
  border: none;
  outline: none;
  background: transparent;
  color: white;
  font-weight: 700;
  position: relative;
  transition: all 0.5s;
  z-index: 1;
}

.minitab::before {
  content: "";
  color: rgb(4, 7, 22);
  position: absolute;
  top: 0;
  left: 0;
  width: 5px;
  border-radius: 6px;
  height: 100%;
  background-color: rgb(174, 0, 255);
  z-index: -1;
  transition: all 0.5s;
}

.minitab:hover::before {
  width: 100%;
  content: "Play";
  z-index: 1;
  margin: auto;
  text-align: center;
}

.minitab:hover {
  color: #ae00ff;
}

.minitab:focus{
  content: "";
  border-radius: 6px;
  background-color: rgb(174, 0, 255);
  z-index: -1;
  color: #040716;
}


/*Скроллбар*/
::-webkit-scrollbar{
  width: 6px;
  height: 6px;
}
::-webkit-scrollbar-thumb{
  background:  linear-gradient(13deg, #001EFF 14%,#AE00FF 64%);
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover{
  background:  linear-gradient(13deg, #001EFF 14%,#AE00FF 64%);
}
::-webkit-scrollbar-track{
  background: #0f1c3d;
  border-radius: 10px;
  box-shadow: inset 0px 0px 0px 0px ;
}

</style>