<template>
  <q-page padding>
    <miniature-form></miniature-form>
   </q-page>
</template>

<script>
import miniatureForm from '../components/miniatureForm.vue'
export default {
   name: 'addEntryPage',
   components:{
     'miniature-form':miniatureForm
   },
   data:()=>{
     return{
    
     }
   }
}
</script>
