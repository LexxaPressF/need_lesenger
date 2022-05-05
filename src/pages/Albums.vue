<template>
    <div class="page_bg albums">
        <h1>АЛЬБОМЫ</h1>
        <div class="wrapper popular">
            <h2>ПОПУЛЯРНОЕ</h2>
            <div class="wrapper trackCard">
                <TrackCard/>
                <TrackCard/>
                <TrackCard/>
            </div>
        </div>
        <div class="wrapper albumCard">
                <AlbumCard/>
        </div>

    </div>
</template>

<script>
    import AlbumCard from "@/components/AlbumCard";
    import TrackCard from "@/components/TrackCard";
    export default {
        name: "Albums",
        components: {TrackCard, AlbumCard},
    }
</script>

<style scoped>

h2{
    margin-top: 0;
    font-size: 0.9em;
}

.popular{
    display: flex;
    flex-direction: column;
}

.trackCard{
    display: flex;
    flex-wrap: wrap;
    /*justify-content: space-between;*/
    align-content: start;
}



</style>