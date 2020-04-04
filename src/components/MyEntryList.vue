<template>
  <q-page padding>
    <div class="row q-col-gutter-x-lg q-col-gutter-y-lg">
      <div class="col-md-4 col-sm-12"  v-for="entry in entries" :key="entry.id">
      
        <entry-card :entry="entry" :canSelect="canSelect" @select="select(entry)"/>
        
      </div>  
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
import EntryCardVue from './EntryCard.vue'

export default {
  components:{
    'entry-card':EntryCardVue
  },
  props:{
    canSelect:Boolean,
    entries:Array
  },
created(){
  //this.$store.dispatch('miniatures/getMyMiniatures')
},
methods:{
  viewEntry(entry){
  }
},
computed:{
    /*...mapGetters({
        entries: 'miniatures/getMyMiniatures',
    })*/
  }
}
</script>