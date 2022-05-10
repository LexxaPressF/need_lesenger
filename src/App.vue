<template>
  <div id="bg_app">
    <Menu/>
    <Feed/>
    <Footer/>
  </div>

</template>

<script>
import Menu from "@/components/Menu";
import Feed from "@/pages/Feed";
import Footer from "./pages/Footer";

export default {
  name: 'App',
  components: {
    Footer,
    Feed,
    Menu
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
  height: 100px;
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
  min-width: 950px;
  font-family: "SF Pro Display Regular", serif;
  height: 100vh;
  display: grid;
  grid-template-columns: 180px 4fr;
  grid-template-rows: auto 16%;
  justify-content: space-between;
  gap: 20px;
}

/* С 990 px переход на мобильную версию */
</style>
