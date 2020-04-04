<template>
  <q-page class="row justify-center items-center">



    <q-table
      title="Available contest"
      :data="contestsArray"
      :columns="columns"
      row-key="id"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="title" :props="props">
            {{ props.row.title }}
          </q-td>
          <q-td class="text-center">
            <q-btn size="sm" round outline color="error" icon="detail" :to="'/contest/' + props.row.id" />
          </q-td>
        </q-tr>
      </template>

    </q-table>

  </q-page>
</template>

<script>

import { mapState  } from 'vuex'

export default {
data:()=>{
  return {
    columns: [
        {
          name: 'title',
          required: true,
          label: 'title',
          align: 'left',
          field: 'title'
        },
        { name: 'action', align: 'center', label: 'Action', field: 'action' },
        
      ],
  }
},
created(){
  this.$store.dispatch('contest/clear')
  this.$store.dispatch('contest/getContests')
},
computed:{
    ...mapState({
        contests: state => state.contest.all,
        contestsIds: state => state.contest.allIds,
    }),
    contestsArray(){
      return  this.contestsIds.map(e=>{ return { id:e,...this.contests[e]}})
    }

  }
}
</script>

