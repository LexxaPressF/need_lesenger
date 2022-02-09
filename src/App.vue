<template>
  <div id="main_bg">
  <SideMusic v-for="tab in tabs" :key="tab.id"
             :tab="tab"/>
  </div>
</template>

<script>
import SideMusic from "@/components/SideMusic";

let SIF1 = {
      id: 1,
      name: "Self-infected flower pt. 1",
      tracks: ["Helpless Observer ru", "Helpless Observer en", "Laxity Blossom ru",
        "Laxity Blossom en"],
      cover: 'SIF1.jpg'
    }
let SIF2 = {
  id: 2,
  name: "Self-infected flower pt. 2",
  tracks: ["Love Hate Love", "Disease",
    "A Cold Place"],
  cover: 'SIF2.jpg'
}
let SR = {
  id: 3,
  name: "Slowed and Reverbed",
  tracks: ["Helpless Observer (S&R)", "Love Hate Love (S&R)",
    "Disease (S&R)", "A Cold Place (S&R)"],
  cover: 'lhl.png'
}
let INFO = {
  id: 4,
  name: "О нас",
  tracks: [],
  cover: 'info.jpg'
}



export default {
  name: 'App',
  components: {
    SideMusic
  },
  data() {
    return {
      tabs: [SIF1, SIF2, SR, INFO]
    }
  }
}
</script>

<style>
body {
  height: 100vh;
  margin: 0;
  background-color: #040715;
}
#main_bg{
  margin:0 50px;
  display:flex;
  justify-content: center;
  gap: 40px;
}
</style>
