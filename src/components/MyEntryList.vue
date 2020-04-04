<template>
  <q-page padding>
    <div class="row q-col-gutter-x-lg q-col-gutter-y-lg">
      <div class="col-md-4 col-sm-12"  v-for="entry in entries" :key="entry.id">
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
      </div>  
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
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