import {DB,STORAGE} from './../../boot/firebase'

export  function addMiniature (context,payload) {
    
    return new Promise((resolve, reject) => {
        var mini = {title:payload.title,
            description:payload.description,
            creatorId:context.rootGetters['user/getUser'].uid
        }

        let imageUrl;
        let key;
        DB.collection('miniatures').add(mini)
        .then((data)=>{
            key  = data.id
            const filename = payload.file.name
            const ext =filename.slice(filename.lastIndexOf('.')+1)
            return STORAGE.ref('miniatures/'+key+'.'+ext).put(payload.file)
        }).then( fileData => {
            console.log(fileData)
            return fileData.ref.getDownloadURL()
        }).then( imageUrl => {
            console.log(imageUrl)
            return DB.collection('miniatures').doc(key).update({imageUrl: imageUrl})
        })
        .then(()=>{
            context.commit('addMiniature', {id:key ,imageUrl:imageUrl, ...mini})
            resolve(key)
        })
    })

}

export  async function getMiniatures ( context ) {
    var docsRef = await DB.collection('miniatures').get();
    var miniatures  = []
    docsRef.forEach((doc) => {
        miniatures.push( {id:doc.id , ...doc.data()})
    });
    context.commit('setMiniatures',miniatures)
}
export  async function getMyMiniatures ( context ) {

    if(context.getters['getMyMiniatures'].length == 0){
        var docsRef = await DB.collection('miniatures').where("creatorId", "==", context.rootGetters['user/getUser'].uid).get()
        var miniatures  = []
        docsRef.forEach((doc) => {
            miniatures.push( {id:doc.id , ...doc.data()})
        });
        context.commit('setMiniatures',miniatures)
    }
}


export function setSelectedId(context,payload) {
    context.commit('setSelectedId',payload)
    DB.collection('miniatures').doc(payload).onSnapshot(entry => {
        console.log(entry)
        let source = entry.metadata.hasPendingWrites ? 'Local' : 'Server'
      console.log(`Source: ${source}`)
        if (entry && entry.data()) {
          context.dispatch('setSelectedEntry',{id:entry.id,...entry.data()})
        }
    })
}

export function setSelectedEntry(context,payload){
    context.commit('setSelectedEntry',payload)
}

export function voteSelected(context,payload){
    const vote =  {'voterId':context.rootGetters['user/getUser'].uid , 'rate':payload,'entryId':context.getters.getSelected.id }
    console.log(vote)
}