
export function setContest (state,payload) {
    const data = payload.data()
    state.all = {
      ...state.all, 
      [payload.id]: { ...data }
    } 
    state.allIds.push(payload.id)
}

export function setSelectedContest(state,payload) {
    state.selected = payload
    state.selectedEntries = []
}

export function setSelectedId(state,payload){
    state.selectedId = payload
}

export function clear (state) {
    state.all = { } 
    state.allIds =[]
}

export function addEntryToSelected(state,payload) {
    const data = payload
    state.selectedEntries = {
      ...state.selectedEntries, 
      [payload.id]: { ...data }
    } 
 }