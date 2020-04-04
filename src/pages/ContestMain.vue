<template>
  <q-page class="row">
     <div class="row">
      <h3>{{contest.title}}</h3>
      <h4>submitted Entry</h4>

      <ul>
        <li v-for="sub in submission" :key="sub.id">
          {{sub.entry.title}}
        </li>
      </ul>
     </div>
     
     <div class="row" v-if="alreadySubmittedToSelected">
          <h3>You already submitted for this challenge</h3>
      </div>
     <div class="row" v-else>
          <h3>My entry List</h3>
         <my-entry-list :entries="myentries" @select="submitEntry" :canSelect="!alreadySubmittedToSelected"></my-entry-list>
     </div>
  </q-page>
</template>

<script>

import { mapState ,mapGetters } from 'vuex'
import MyEntryList from '../components/MyEntryList'

export default {
  components:{
    'my-entry-list':MyEntryList
  },
  data:()=>{
    return{

    }
  },
  created(){
    this.$store.dispatch('contest/setSelectedId', this.$route.params.id)
    this.$store.dispatch('miniatures/getMyMiniatures')
  },
  methods:{
    submitEntry(entry){
      console.log(entry)
      this.$store.dispatch('contest/addEntry',entry)
    }
  },
  computed:{
    ...mapState({
        contest: state => state.contest.selected,
        contestsId: state => state.contest.selectedId,
        submission: state => state.contest.selectedEntries,
    }),
    ...mapGetters({
      alreadySubmittedToSelected:'contest/alreadySubmittedToSelected',
      myentries: 'miniatures/getMyMiniatures',
    })
  },
  watch:{
    
  }
  
}
</script>
