<template>
  <q-page class="flex flex-center">
    <input type="text" v-model="name">
    <input type="text" v-model="description">
    <q-btn @click="add">Add</q-btn>

    <ul>
      <li v-for="mini in miniatures" :key="mini.name">
        {{mini.name}}
      </li>
    </ul>
  </q-page>
</template>

<script>

import { mapGetters } from 'vuex'
import miniatures from '../store/miniatures'
 
export default {
  name: 'PageIndex',
  data(){
    return {
      name:"",
      description:""
    }
  },
  created(){
  },
  methods:{
    add(){
      this.$store.dispatch('miniatures/addMiniature',{name:this.name , description:this.description})
    }
  },
  computed:{
    ...mapGetters({
        miniatures: 'miniatures/getMiniatures',
    })
  }
}
</script>
