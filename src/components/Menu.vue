<template>
    <div id="bg_menu">
        <img id="logo" src="../assets/img/logo_nl.svg"/>
        <ul class="menu">
            <li>о нас</li>
            <li>альбомы</li>
            <li>концерты</li>
            <li>мерч</li>
            <li>контакты</li>
        </ul>
    </div>
</template>

<script>

export default {
    name: "Menu",

}
</script>

<style scoped>

#bg_menu{
    grid-column: 1;
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

</style>