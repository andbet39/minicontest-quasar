<template>
      <q-card >
        <q-img :src="entry.imageUrl" height="250px" >
        <div class="absolute-bottom text-h6">
          {{entry.title}}
        </div>
        </q-img>
        <q-card-section>
          {{ entry.description }}
          <div class="right">
            <q-btn @click="viewEntry">
              View
            </q-btn>
          </div>
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
    entry:Object
  },
created(){
}
,
methods:{
  viewEntry(entry){
    this.$router.push('entry/'+ this.entry.id)
  }
},
computed:{
   
  }
}
</script>