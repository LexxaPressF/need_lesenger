<template>
<div id="bg">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <div id="presentation">
    <div id="cover" v-bind:style="{ backgroundImage: `url(${needCover})`}"></div>
  <div id="title">{{ tab.name }}</div>
  </div>
  <div id="minitabs">
  <button class="minitab" v-for="track in tab.tracks" :key="track.id">
    {{track}}
  </button>
  </div>
</div>
</template>

<script>
export default {
  name: "SideMusic",
  data() {
    return {
      curentTrack: ""
    }
  },
  props: {
    tab: Object
  },
  computed: {
    needCover() {
        return require(`../assets/img/${this.tab.cover}`)
    }
  }
}
</script>

<style scoped>

#bg{
  margin: 20px 10px 20px 10px;
  display: grid;
  width: 225px;
  max-height: 90vh;
  border: 3px solid white;
  border-radius: 20px 50px 20px 50px;
  grid-template-rows: 1fr 2fr 3fr;
  grid-template-columns: 1fr;
  transform: skewX(-4deg);
}

#presentation{
  margin: 10px;
}

#presentation{
  grid-row: 2;
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
  grid-row: 3;
  grid-column: 1;
}


/*Для таба как для кнопки*/
#bg {
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
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
}

#bg:hover {
  box-shadow: 0 0 10px #ae00ff, 0 0 25px #001eff, 0 0 50px #ae00ff;
  transition-delay: 0.6s;
}

#bg span {
  position: absolute;
}

#bg span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #ae00ff);
}

#bg:hover span:nth-child(1) {
  left: 100%;
  transition: 0.7s;
}

#bg span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #001eff);
}

#bg:hover span:nth-child(3) {
  right: 100%;
  transition: 0.7s;
  transition-delay: 0.35s;
}

#bg span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #ae00ff);
}

#bg:hover span:nth-child(2) {
  top: 100%;
  transition: 0.7s;
  transition-delay: 0.17s;
}

#bg span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #001eff);
}

#bg:hover span:nth-child(4) {
  bottom: 100%;
  transition: 0.7s;
  transition-delay: 0.52s;
}

/*При нажатии на большой таб*/
/*#bg:active {*/
/*  background: #ae00af;*/
/*  background: linear-gradient(to top right, #ae00af, #001eff);*/
/*  color: #bfbfbf;*/
/*  box-shadow: 0 0 8px #ae00ff, 0 0 8px #001eff, 0 0 8px #ae00ff;*/
/*  transition: 0.1s;*/
/*}*/

#bg:active span:nth-child(1)
span:nth-child(2)
span:nth-child(2)
span:nth-child(2) {
  transition: none;
}

.minitab {
  padding: 5px;
  /*width: 140px;*/
  /*height: 45px;*/
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
}

.minitab:hover {
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