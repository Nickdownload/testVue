<template>
  <div id="app">
    <router-link to="/"> 主页</router-link>
     <router-link to="/home?eat=bancer"> Home</router-link>
     <router-link to="/food"> Food</router-link>
     <router-link to="/son/cc"> son</router-link>
     <router-link to="/news"> news</router-link>
     <router-link to="/move"> Move</router-link>
     <div>
      <router-link to="/menu"> 递归组件</router-link>
     </div>
     <div>
       <button @click="go"> 跳转到Home</button>
     </div>
     <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  methods:{
    go(){
      this.$router.push({
        name:'son',
        params:{
          name:'qq'
        }
      })
    }
  },
  mounted(){
    console.log(process.env)
  }
  //  watch:{
  //   "$route" (to) {
  //    console.log(to)
  //    }
  //   }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
