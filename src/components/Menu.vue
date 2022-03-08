<template>
    <div id="bg_main">
    <div id="menu_band">
<!--        <MusicPlayer v-if="musicActive"/>-->
        <div id="menu">
        <router-link to="/About" class="point about">О нас</router-link>
        <router-link to="/Albums" class="point albums">Альбомы</router-link>
        <router-link to="/Cooperation" class="point coop">Сотрудничество</router-link>
        <router-link to="/Contacts" class="point contacts">Контакты</router-link>
        </div>
    </div>
    <div class="band first"></div>
    <div class="band sec"></div>
    <div class="band third"></div>
    <div class="band forth"></div>
    <router-view/>
    </div>
</template>

<script>

export default {
    name: "Menu",
    components:{
    },
    data(){
        return{
            musicActive: true,
        }
    }
}
</script>

<style scoped>
#bg_main{
    display: flex;
    height: 100vh;

}

#menu_band{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 300px;
}

#menu{
    margin-left: 10px;
    border-left: solid 3px #303030;
    display: flex;
    flex-direction: column;
    justify-content: start;
    place-items: start;
}

.point{
    margin: 0 10px;
    padding: 1em 15px;
    transform: skewX(-4deg);
    text-align: left;
    text-decoration: none;
    outline: none;
    color: white;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 15px;
    overflow: hidden;
    transition: 0.2s;
    font-weight: bold;
}

.point:hover{
    transition: 0.3s ease-out;
    transform: skewX(0deg);
    border-left: solid 3px #303030;
    padding: 10px;

}

.point:focus{
    transition: none;
    transform: skewX(0deg);
    border-left: solid 3px #303030;
    padding: 10px;
}

</style>