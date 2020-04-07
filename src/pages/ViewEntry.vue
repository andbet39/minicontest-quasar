<template>
  <q-page padding>
    <div v-if="entry">
        <h4>{{entry.title}}</h4>
        <div v-if="!alreadyVoted" class="row justify-center">
            <q-rating
                  v-model="rate"
                  @input="voted"
                  size="2em"
                  :max="10"
                  color="primary"
                />
        </div>
        <div class="row justify-center">
          <div class="col">
            <img width="500px" :src="entry.imageUrl"><img>

          </div>
        </div>
    </div>
    
    
   </q-page>
</template>

<script>

import {mapGetters} from 'vuex'
export default {
   name: 'viewEntryPage',
   components:{
   },
   created(){
     this.$store.dispatch('miniatures/setSelectedId',this.$route.params.id)
   },
   data:()=>{
     return{
       rate:0
     }
   },
   methods:{
     voted(e){
       console.log(e)
       this.$store.dispatch('miniatures/voteSelected',e)
     }
   },
   computed:{
     ...mapGetters({
       entry:'miniatures/getSelected',
       votes: 'miniatures/getVotesForSelected',
       user:'user/getUser'
     }),
     alreadyVoted(){
        if(Object.keys(this.votes).indexOf(this.user.uid)>-1){
                return true
        }else{
            return false
        }
     }
   }
}
</script>
