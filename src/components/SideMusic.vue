<template>
<div id="bg">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <div id="presentation">
    <div id="cover" v-bind:style="{ background: 'url(https://drive.google.com/file/d/1NywwVOGWmcvS8xIeQS2u34qbbIRvxqXk/view?usp=sharing)'}"></div>
  <div id="title">{{ tab.name }}</div>
  </div>
  <div id="controls">

    <div id="timeline"></div>
  </div>
  <div id="lyric"></div>
</div>
</template>

<script>
export default {
  name: "SideMusic",
  props: {
    tab: Object
  },
  computed: {
    needCover: function () {
        return this.tab.cover
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
  grid-template-rows: 1fr 2fr 1fr 2fr;
  grid-template-columns: 1fr;
  transform: skewX(-4deg);
}

#presentation, #controls, #lyric{
  margin: 10px;
}

#presentation{
  grid-row: 2;
  grid-column: 1;
  display: grid;
}

#cover{
  /*background: url('../assets/img/info.jpg');*/
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom;
  height: 250px;
}

#title{
  margin: auto;
  color:white;
  text-align: center;
  margin-top: 15px;
  font-size: 1.5em;
}

#controls{
  grid-row: 3;
  grid-column: 1;
  display:flex;
}

#lyric{
  grid-row: 4;
  grid-column: 1;
  /*background-color: red;*/
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

#bg:active {
  background: #ae00af;
  background: linear-gradient(to top right, #ae00af, #001eff);
  color: #bfbfbf;
  box-shadow: 0 0 8px #ae00ff, 0 0 8px #001eff, 0 0 8px #ae00ff;
  transition: 0.1s;
}

#bg:active span:nth-child(1)
span:nth-child(2)
span:nth-child(2)
span:nth-child(2) {
  transition: none;
  transition-delay: none;
}

</style>