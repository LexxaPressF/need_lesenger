<template>
  <div id="bg_app">
    <Menu/>
    <Feed/>
  </div>

</template>

<script>
import Menu from "@/components/Menu";
import Feed from "@/pages/Feed";

let SIF1 = {
  id: 1,
  name: "Self-infected flower pt. 1",
  tracks: ["Helpless Observer ru", "Helpless Observer en", "Laxity Blossom ru",
    "Laxity Blossom en"],
  music: ["Need Lesenger - Helpless Observer.mp3", "Need Lesenger - Helpless Observer (English Version).mp3",
    "Need Lesenger - Laxity Blossom.mp3", "Need Lesenger - Laxity Blossom (English Version).mp3"],
  cover: 'SIF1.jpg'
}
let SIF2 = {
  id: 2,
  name: "Self-infected flower pt. 2",
  tracks: ["Love Hate Love", "Disease", "A Cold Place"],
  music: ["Need Lesenger - Love Hate Love.mp3", "Need Lesenger - Disease.mp3",
    "Need Lesenger - A Cold Place.mp3"],
  cover: 'SIF2.jpg'
}
let SR = {
  id: 3,
  name: "Slowed and Reverbed",
  tracks: ["Helpless Observer (S&R)", "Love Hate Love (S&R)",
    "Disease (S&R)", "A Cold Place (S&R)"],
  music: ["Need Lesenger - Helpless Observer (Slowed).mp3", "Need Lesenger - Love Hate Love (Slowed).mp3", "Need Lesenger - A Cold Place (Slowed).mp3"],
  cover: 'lhl.png'
}


export default {
  name: 'App',
  components: {
    Feed,
    Menu
  },
  data() {
    return {
      tabs: [SIF1, SIF2, SR],
      activateMusic: true
    }
  }
}
</script>

<style>
@font-face {
  font-family: 'SF Pro Display Regular';
  font-style: normal;
  font-weight: normal;
  src: url('assets/fonts/SFPRODISPLAYREGULAR.woff') format('woff');
}

@font-face {
  font-family: 'SF Pro Display Bold';
  font-style: normal;
  font-weight: normal;
  src: url('assets/fonts/SFPRODISPLAYBOLD.woff') format('woff');
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

::-webkit-scrollbar{
  width: 37px;
  background: white;
}
::-webkit-scrollbar-thumb{
  background:  #725FEA;
  width: 8px;
  border-radius: 12px;
  background-clip: content-box;
}
::-webkit-scrollbar-track{
  background: #e3e3e3;
}

::-webkit-scrollbar-track,
::-webkit-scrollbar-thumb {
  border: 16px solid rgb(255, 255, 255);
  background-clip: padding-box;
}

#bg_app{
  font-family: "SF Pro Display Regular", serif;
  height: 100vh;
  display: grid;
  grid-template-columns: 180px 4fr;
  justify-content: space-between;
  gap: 20px;
}

</style>
