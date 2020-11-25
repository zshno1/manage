<template>
    <div class="banner">{{ title }}</div>
</template>
<script>
    export default {
        name: "Banner",
        data(){
            return {
                title:'banner'
            }
        },
        mounted(){
            console.log(this.obj)

        }
    }
</script>