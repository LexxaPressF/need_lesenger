<template>
    <div class="bg_msc_card">
        <div class="cover"></div>
        <p>{{albumName}}</p>
        <p>{{sign}}</p>
    </div>
</template>

<script>
    export default {
        name: "MusicCard",
        props:{
            albumName: String,
            sign: String
        }
    }
</script>

<style scoped>

</style>