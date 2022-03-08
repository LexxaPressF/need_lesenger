<template>
    <div id="bg_albums">
        <Music v-for="tab in tabs" :key="tab.id"
               :tab="tab"/>
    </div>
</template>

<script>
    import Music from "@/components/Music";

    let SIF1 = {
        id: 1,
        name: "Self-infected flower pt. 1",
        tracks: ["Helpless Observer ru", "Helpless Observer en", "Laxity Blossom ru",
            "Laxity Blossom en"],
        music: ["Need Lesenger - Helpless Observer.mp3", "Need Lesenger - Helpless Observer (English Version).mp3",
            "Need Lesenger - Laxity Blossom.mp3", "Need Lesenger - Laxity Blossom (English Version).mp3"],
        cover: 'SIF1.jpg'
    }
    let SIF2 = {
        id: 2,
        name: "Self-infected flower pt. 2",
        tracks: ["Love Hate Love", "Disease", "A Cold Place"],
        music: ["Need Lesenger - Love Hate Love.mp3", "Need Lesenger - Disease.mp3",
            "Need Lesenger - A Cold Place.mp3"],
        cover: 'SIF2.jpg'
    }
    let SR = {
        id: 3,
        name: "Slowed and Reverbed",
        tracks: ["Helpless Observer (S&R)", "Love Hate Love (S&R)",
            "Disease (S&R)", "A Cold Place (S&R)"],
        music: ["Need Lesenger - Helpless Observer (Slowed).mp3", "Need Lesenger - Love Hate Love (Slowed).mp3", "Need Lesenger - A Cold Place (Slowed).mp3"],
        cover: 'lhl.png'
    }


    export default {
        name: 'Albums',
        components: {
            Music
        },
        data() {
            return {
                tabs: [SIF1, SIF2, SR],
                activateMusic: true
            }
        },
        computed:{

        }
    }
</script>

<style>
    body {
        height: 100vh;
        margin: 0;
        background-color: #040715;
    }
    #bg_albums{
        max-height: 90vh;
        min-height: 70vh;
        display:flex;
        justify-content: center;
    }

</style>
