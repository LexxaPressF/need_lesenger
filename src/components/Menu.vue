<template>
    <div id="bg_menu">
        <img id="logo" src="../assets/img/logo_nl.svg"/>
        <ul class="menu">
            <li @click="nav('about')">о нас</li>
            <li @click="nav('albums')">альбомы</li>
            <li @click="nav('concerts')">концерты</li>
            <li @click="nav('memories')">видясики</li>
            <li @click="nav('merch')">мерч</li>
            <li @click="nav('media')">медия</li>
        </ul>
    </div>
</template>

<script>

export default {
    name: "Menu",
    methods:{
      nav(to){
        const position = document.querySelector(`.${to}`).offsetTop
        window.scrollTo({top:position, behavior:"smooth"})
      }
    }
}
</script>

<style scoped>

#bg_menu{
  grid-column: 1;
  grid-row: 1;
}

#logo{
    position: fixed;
    top: 73px;
    left: 5%;
}

.menu{
    position: fixed;
    top: 220px;
    left: 5%;

    list-style-type: none;

    border-left: rgb(0,0,0) 6px solid;
    padding-left: 44px;
}

.menu li{
    width: auto;
    height: 24px;
    margin-bottom: 18px;

    font-size: 20px;

    cursor: pointer;
}

.menu li:last-child{
    margin-bottom: 0;
}

/*Анимация меню*/

</style>