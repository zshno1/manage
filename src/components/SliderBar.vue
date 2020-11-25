<template>
    <div class="slidebar">
        <ul><li>11</li></ul>
    </div>
</template>

<script>
    export default{
        name: "SliderBar"
    }
</script>

<style>
    .slidebar{
        position: fixed;
        width: 120px;
        height: 100%;
        top: 0;
        left: 0;
        padding-top: 80px;
        box-sizing: border-box;
        border-right: 1px solid #cccccc;
        z-index: 1;
    }
</style>