<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png">
    <Banner />
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/views/home/banner'
export default {
  name: 'Home',
  components:{Banner}
}
</script>
