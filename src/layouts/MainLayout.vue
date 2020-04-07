<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div v-if="user">{{user.displayName}}  <q-btn @click="logout">Logout</q-btn></div>
       
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >

      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
        </q-item-label>

        <q-item to="/addentry" exact>
            <q-item-section avatar>
              <q-icon name="add" />
            </q-item-section>
            <q-item-section>
              Add Entry
            </q-item-section>
        </q-item>
        <q-item to="/myEntry" exact>
            <q-item-section avatar>
              <q-icon name="add" />
            </q-item-section>
            <q-item-section>
              My Entries
            </q-item-section>
          <q-item-section side top>
            <q-badge color="teal" :label="miniatureCount" />
          </q-item-section>
        </q-item>

        <q-item to="/contests" exact>
            <q-item-section avatar>
              <q-icon name="prize" />
            </q-item-section>
            <q-item-section>
              Contests
            </q-item-section>
        </q-item>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
      
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink'
import { mapGetters } from 'vuex'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink
  },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: []
    }
  },
  created(){
    this.$store.dispatch('miniatures/loadMyMiniatures')
  },
  methods:{
    logout(){
      this.$store.dispatch('user/signOut')
    }
  },
  computed:{
    ...mapGetters({
        miniatureCount: 'miniatures/getMyEntriesCount',
        user:'user/getUser'
    })
  }
}
</script>
