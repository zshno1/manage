<template>
    <div class="header">
        logo
    </div>
</template>

<script>
    export default{
        name: 'Mheader',
        mounted(){
            console.log(this)
        },
    }
</script>

<style>
    .header{
        position: fixed;
        top: 0;
        left: 0;
        height: 80px;
        width: 100%;
        z-index: 2;
        border-bottom: 1px solid #ccc;
        background: #ffffff;;
    }
</style>