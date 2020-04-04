<template>
    <div class="q-pa-md" style="max-width: 400px">

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="title"
        label="Picture title *"
        hint="Picture title"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        filled
        type="text"
        v-model="description"
        label="Description *"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Please type a description of the picture'
        ]"
      />

      <input hidden @change="fileSelected" type="file" ref="file">
      <q-btn @click.prevent="addFile">Add Photo</q-btn>
      <q-img :src="image"></q-img>
  

 
      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>

  </div>
</template>

<script>
export default {
  data () {
    return {
      description:"",
      title:"",
      file:null,
      image:null
    }
  },
  methods:{
    addFile(e){
      this.$refs.file.click()
    },
    fileSelected(e){
      console.log(e)
      this.file = e.target.files[0]

      var reader = new FileReader();
      reader.onload = (e)=> {
        console.log(e)
        this.image =  e.target.result

      }
      reader.readAsDataURL(this.file); 

    },
    onSubmit(){
        this.$store.dispatch('miniatures/addMiniature',
                {title:this.title , 
                description:this.description,
                file:this.file}).then(res=>{
                  this.$router.push('/myentry')
                })
     
    },
    onReset(){

    }
  }
}
</script>
