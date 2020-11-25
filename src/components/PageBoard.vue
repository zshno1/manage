<template>
    <div class="page">
        <router-view />
    </div>
</template>

<script>
    export default{
        name: "PageBoard"
    }
</script>

<style>
    .page{
        margin-top: 80px;
        margin-left: 120px;
        padding: 20px;
        box-sizing: border-box;
    }
</style>