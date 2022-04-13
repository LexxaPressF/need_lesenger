<template>
    <div class="page_bg merch">
        <h1>МЕРЧ</h1>
        <div class="wrapper">
            <MerchCard/>
            <MerchCard/>
            <MerchCard/>
            <MerchCard/>
        </div>
    </div>
</template>

<script>
    import MerchCard from "@/components/MerchCard";
    export default {
        name: "Merch",
        components: {MerchCard}
    }
</script>

<style scoped>

</style>