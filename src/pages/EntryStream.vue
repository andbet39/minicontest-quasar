<template>
  <q-page padding>
    <div class="row q-col-gutter-x-lg q-col-gutter-y-lg">
      <div class="col-md-4 col-sm-12"  v-for="key in entryArray" :key="key">
      
        <entry-card 
          :entry="entries[key]" 
          :canSelect="false"
          :canVote="false"
           @select="select(entry)"/>
      </div>  
    </div>
  </q-page>
</template>

<script>
import { mapGetters ,mapState} from 'vuex'
import miniatures from '../store/miniatures'
import EntryCardVue from '../components/EntryCard.vue'

export default {
  components:{
    'entry-card' : EntryCardVue
  },
  created(){
        this.$store.dispatch('miniatures/getMiniatures')
  },
  computed:{
    ...mapGetters({
      entries : 'miniatures/getEntries'
    }),
    entryArray(){
      return Object.keys(this.entries)
    }
  }
}
</script>


