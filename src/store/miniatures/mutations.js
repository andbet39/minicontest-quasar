import Vue from 'vue'


export function setSelectedId(state,payload){
    state.selectedId = payload
}

export function setSelectedEntry(state,payload){
    state.selectedEntry=payload
}

export function addVoteToSelected(state,payload){
    Vue.set(state.selectedVotes,payload.voterId,payload)
}

export function clearVoteToSelected(state){
    state.selectedVotes = {}
}

export function clearMyEntry(state){
    state.my_entries ={}
}
export function addVoteToEntry(state,payload){
    Vue.set(state.entries[payload.entryId].votes,payload.voterId,payload)
}
export function insertEntry(state,payload){
    Vue.set(state.entries, payload.id, payload)
    Vue.set(state.entries[payload.id], 'votes', {})
}


export function addVoteToMyEntry(state,payload){
    Vue.set(state.my_entries[payload.entryId].votes,payload.voterId,payload)
}
export function insertMyEntry(state,payload){
    Vue.set(state.my_entries, payload.id, payload)
    Vue.set(state.my_entries[payload.id], 'votes', {})
}
