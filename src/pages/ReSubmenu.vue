<template>
    <div>
      <a-submenu v-for="(item) in parent" :key="item.id">
          {{item.title}}
       <re-submenu v-if="item.children" :parent="item.children"></re-submenu> 
      </a-submenu>
    </div>
</template>
<script>
 import ASubmenu from '../components/menu/ASubmenu'
export default {
    name:'ReSubmenu',
    props:{
      parent:Array,
      default:()=>[]
    },
    components:{
        ASubmenu
    }
}
</script>