<template>
  <q-page class="flex flex-center">

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
    }
  },
  computed:{
    ...mapGetters({
        miniatures: 'miniatures/getMiniatures',
    })
  }
}
</script>
