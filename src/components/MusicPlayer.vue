<template>
    <div id="bg">
        <div id="cover">

        </div>
        <div id="controls">
            <button>prev</button>
            <button>play</button>
            <button>next</button>
        </div>
        <div id="title">
            A Cold Place
        </div>
        <div id="timeline"></div>
    </div>
</template>

<script>
    export default {
        name: "MusicPlayer"
    }
</script>

<style scoped>
#bg{
    grid-row: 1;
    grid-column: 1;
    display: grid;
    border-radius: 20px 50px 20px 50px;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 100px 150px auto;
    transform: skewX(-4deg);
    width: 50vw;
    margin: 0 auto;

    /*Для таба как для кнопки*/
    position: relative;
    padding: 1em 1.8em;
    outline: none;
    border: 1px solid #303030;
    color: white;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 15px;
    overflow: hidden;
    transition: 0.2s;
    cursor: pointer;
    font-weight: bold;
}

#bg:hover {
    box-shadow: 0 0 10px #ae00ff, 0 0 25px #001eff, 0 0 50px #ae00ff;
    transition-delay: 0.1s;
}

#cover{
    grid-row: 1/3;
    grid-column: 1;
    background: white;
}

#controls{
    grid-row: 1/3;
    grid-column: 2;
    /*background: red;*/
}


#title{
    font-size: 20px;
    margin: 10px 0 2px 8px;
    vertical-align: bottom;
    grid-row: 1;
    grid-column: 3;
}

#timeline{
    grid-row: 2;
    grid-column: 3;
    background: green;
}


/*Стиль для кнопок переключения*/

    
</style>