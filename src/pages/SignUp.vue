<template>
  <q-page class="row justify-center items-center">
     <div class="column">
      <div class="row">
        <h5 class="text-h5 q-my-md">Company & Co</h5>
      </div>
      <div class="row">
        <q-card square bordered class="q-pa-lg shadow-1">
          <q-card-section>
            <q-form class="q-gutter-md">
              <q-input square filled clearable v-model="name" type="text" label="Name" />
              <q-input square filled clearable v-model="email" type="email" label="email" />
              <q-input square filled clearable v-model="password" type="password" label="password" />
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-md">
            <q-btn @click="signUp" unelevated color="light-green-7" size="lg" class="full-width" label="Register" />
          </q-card-actions>
          <q-card-section class="text-center q-pa-none">
            <p class="text-grey-6"><router-link to="signin">Login</router-link></p>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  data:()=>{
    return{
      name:"",
      email:"",
      password:""

    }
  },
  methods:{
    signUp(){
      this.$store.dispatch('user/signUp',{
        email:this.email,
        name:this.name,
        password:this.password
      })
    }
  },
  computed:{
    ...mapGetters({
        user:'user/getUser'
    })
  },
  watch:{
    user(val){
      if(this.user !== null && this.user != undefined){
        this.$router.push('/')
      }
    }
  }
  
}
</script>
