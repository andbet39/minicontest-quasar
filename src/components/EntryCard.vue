<template>
      <q-card  @click="viewEntry" >
        <q-img :src="entry.imageUrl" height="250px" >
        <div class="absolute-bottom text-h6">
          {{entry.title}}
        </div>
        </q-img>
        <q-card-section>
          {{ entry.description }}
          <div class="right" v-if="numVotes>0">
           Score : {{averageVote}}
            Votes : {{numVotes}}
          </div>
          <div v-else>
            Not Votes yet...
          </div>
          <q-card-section v-if="canVote">
            <q-rating v-model="rate"
                  @input="voted"
                  :max="10"
                  color="primary"
                />
          </q-card-section>
        </q-card-section>
          <q-card-section v-if="canSelect">
          <q-btn @click="select(entry)">Select</q-btn>
         
        </q-card-section>
      </q-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props:{
    canSelect:Boolean,
    canVote:Boolean,
    entry:Object,

  },
created(){
},
data:()=>{
  return {
    rate:0
  }
}
,
methods:{
  viewEntry(entry){
    this.$router.push('entry/'+ this.entry.id)
  },
  
},computed:{
  averageVote(){
    let ln = Object.values(this.entry.votes).length
    let tot = 0 
    Object.values(this.entry.votes).forEach(i=>tot+=i.rate)
     return tot/ln
  },
  numVotes(){
    return Object.values(this.entry.votes).length
  }
}
}
</script>