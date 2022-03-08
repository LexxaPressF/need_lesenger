<template>
    <div id="bg_main">
    <div id="bg_menu" :class="{scoped: musicActive}">
        <MusicPlayer v-if="musicActive"/>
        <router-link to="/About" class="point about">О нас</router-link>
        <router-link to="/Albums" class="point albums">Альбомы</router-link>
        <router-link to="/Cooperation" class="point coop">Сотрудничество</router-link>
        <router-link to="/Contacts" class="point contacts">Контакты</router-link>
    </div>
    <router-view/>
    </div>
</template>

<script>
import MusicPlayer from "@/components/MusicPlayer";

export default {
    name: "Menu",
    components:{
        MusicPlayer
    },
    data(){
        return{
            musicActive: true,
        }
    }
}
</script>

<style scoped>
#bg_menu{
    /*display: flex;*/
    justify-content: center;
    place-items: center;
    padding: 1em 1.8em;
}

.point{
    border-radius: 20px 50px 20px 50px;
    transform: skewX(-4deg);
    text-align: center;

    /*Для таба как для кнопки*/
    padding: 1em 1.8em;
    outline: none;
    border: 1px solid #303030;
    color: white;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 15px;
    overflow: hidden;
    transition: 0.2s;
    font-weight: bold;
}

.point:hover {
    box-shadow: 0 0 10px #ae00ff, 0 0 25px #001eff, 0 0 50px #ae00ff;
    transition-delay: 0.1s;
}

.scoped{
    display: grid;
    grid-template-rows: 55px 55px;
    grid-template-columns: auto 1fr 1fr;
}

.about{
    grid-row: 1;
    grid-column: 2;
}

.albums{
    grid-row: 2;
    grid-column: 2;
}

.coop{
    grid-row: 1;
    grid-column: 3;
}

.contacts{
    grid-row: 2;
    grid-column: 3;
}
</style>