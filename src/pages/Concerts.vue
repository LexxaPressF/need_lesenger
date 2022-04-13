<template>
    <div class="page_bg concerts">
        <h1>КОНЦЕРТЫ</h1>
        <div class="wrapper">
            <ConcertCard/>
            <ConcertCard/>
            <ConcertCard/>
            <ConcertCard/>
        </div>
    </div>
</template>

<script>
    import ConcertCard from "@/components/ConcertCard";
    export default {
        name: "Concerts",
        components: {ConcertCard}
    }
</script>

<style scoped>

</style>