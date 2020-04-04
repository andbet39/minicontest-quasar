
import {DB,STORAGE} from './../../boot/firebase'
 import firebase from 'firebase'
export function submitEntry (context,payload) {

}

export async function getContests(context){
    var docsRef = await DB.collection('contests').where("enabled","==",true).get();
    docsRef.forEach(contest => context.commit('setContest',  contest ))

}


export async function getEntryForSelectedContest(context){
    //var docsRef = await DB.collection('contests').doc(context.state.selected.id).collection('entries').get()
   // docsRef.forEach(entry => context.commit('addEntryToSelected', {id:entry.id, ...entry.data()}))
    DB.collection('contests').doc(context.state.selected.id).collection('entries').onSnapshot(function(querySnapshot) {
        querySnapshot.forEach(entry => context.commit('addEntryToSelected', {id:entry.id, ...entry.data()}))
    });


}

export async function setSelectedContest(context,payload){
    context.commit('setSelectedContest',payload)
    context.dispatch('getEntryForSelectedContest')
}

export async function setSelectedId(context,payload){ 
    context.commit('setSelectedId',payload)
    DB.collection('contests').doc(payload).onSnapshot(contest => {
        let source = contest.metadata.hasPendingWrites ? 'Local' : 'Server'
      console.log(`Source: ${source}`)
        if (contest && contest.data()) {
          context.dispatch('setSelectedContest',{id:contest.id,...contest.data()})
        }
    })
}

export async function addEntry(context,payload){
    let found = false
    Object.values(context.state.selectedEntries).forEach(e=>{
        if(e.entry.id == payload.id){
            found=true
        }
    })
    if( !found ){
        let submittion =  { submittedBy:context.rootGetters['user/getUser'].uid,submitData: new Date, entry:{...payload}}
        DB.collection('contests').doc(context.state.selected.id).collection('entries').add(submittion)
         .then((data)=>{
             context.commit('addEntryToSelected',{id:data.id, ...submittion})
         }).catch(error=>{
             console.log(error)
         })
    }
}

export async function clear(context){
    
    context.commit('clear',context)

}