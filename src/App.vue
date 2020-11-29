<template>
  <div id="app">
    <Mheader />
    <SliderBar />
    <PageBoard />
  </div>
</template>

<script>
import Mheader from "@/components/Mheader"
import SliderBar from "@/components/SliderBar"
import PageBoard from "@/components/PageBoard"
import { getUserInfo } from '@/api/user'

export default {
  name: 'App',
  components:{ Mheader, SliderBar, PageBoard },
  mounted(){
    console.log(111)
    console.log(this)
    getUserInfo(1).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }
}

</script>>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
