<template>
    <div class="page_bg memories">
        <h1>MEMORIES</h1>
        <div class="video">
            <iframe src="https://drive.google.com/file/d/14XE-Csk2DsGcRwudHheevQLul6V6vhzs/preview" allow="autoplay fullscreen" frameborder="0"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Memories"
    }
</script>

<style scoped>

.video {
    height: 0;
    position: relative;
    padding-bottom: 56.25%;
}
.video iframe {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}

</style>