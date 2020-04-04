<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
      

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>
       
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'AuthLayout',

 

  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: []
    }
  },
  methods:{
    logout(){
      this.$store.dispatch('user/signOut')
    }
  },
  computed:{
    ...mapGetters({
        miniatureCount: 'miniatures/getMiniatureCount',
        user:'user/getUser'
    })
  }
}
</script>
