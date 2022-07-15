<template>
    <div id="bg_feed">
        <About/>
        <Albums/>
        <Concerts/>
        <Memories/>
        <Merch/>
        <Media/>
    </div>
</template>

<script>
    import About from "@/pages/About";
    import Albums from "@/pages/Albums";
    import Concerts from "@/pages/Concerts";
    import Memories from "@/pages/Memories";
    import Merch from "@/pages/Merch";
    import Media from "@/pages/Media";
    export default {
        name: "Feed",
        components: {Media, Merch, Memories, Concerts, Albums, About},
    }
</script>

<style>

#bg_feed{
    float:left;
    margin: 74px 8% 0 8%;
    grid-column: 2;
    grid-row: 1;
    min-width: ;
}

h1{
    font-family: 'SF Pro Display Bold', serif;
    margin: 34px 0 46px 0;
}

h2{
    font-family: 'SF Pro Display Regular', serif;
    margin: 14px 0 14px 0;
    font-size: 1.3em;
    color: black;
}

p{
    font-family: 'SF Pro Display Regular', serif;
    font-size: 1.4em;
    line-height: 1.3;
}

.page_bg{
    padding-bottom: 100px;
    border-bottom: 4px #3319D1 solid ;
}

.wrapper{
    display: flex;
    gap: 5%;
    flex-wrap: wrap;
}

</style>