<template>
    <div id="bg_main">
    <div id="bg_menu">
<!--        <router-link to="/About">О нас</router-link>-->
        <router-link to="/Albums">Альбомы</router-link>
        <router-link to="/Cooperation">Сотрудничество</router-link>
        <router-link to="/Contacts">Контакты</router-link>
    </div>
    <router-view/>
    </div>
</template>

<script>
    export default {
        name: "Menu"
    }
</script>

<style scoped>

</style>