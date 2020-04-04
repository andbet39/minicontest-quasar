<template>
  <q-page padding>
    <my-entry-list :entries="myentries" />
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
import MyEntryList from '../components/MyEntryList'
export default {
  components:{
    'my-entry-list':MyEntryList
  },
created(){
      this.$store.dispatch('miniatures/getMyMiniatures')

},
computed:{
 ...mapGetters({
       myentries: 'miniatures/getMyMiniatures',
    })
  }
}
</script>


