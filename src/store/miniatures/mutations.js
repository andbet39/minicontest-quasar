
export function addMiniature (state,miniature) {
    state.miniatures.push(miniature)
    
}

export function getMiniatures(state,miniatures) {
    state.miniatures.push = miniatures
}
export function setMiniatures(state,miniatures) {
    state.miniatures = miniatures
}

export function setSelectedId(state,payload){
    state.selectedId = payload
}

export function setSelectedEntry(state,payload){
    state.selectedEntry=payload
}

export function addVoteToSelected(state,payload){
    state.selectedVotes[payload.voterId] = payload
}
export function addVoteToEntry(state,payload){
    state.entries[payload.entryId].votes[payload.voterId] = payload
}
export function insertEntry(state,payload){
    state.entries[payload.id] =payload
    state.entries[payload.id].votes={}
}
