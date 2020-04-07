
export function getSelected(state){
        return state.selectedEntry
}

export function getVotesForSelected(state){
        return state.selectedVotes
}


export function getEntries (state){
        return state.entries
}

export function getMyEntriesCount(state){
        return Object.keys(state.my_entries).length
}

export function getMyEntries(state){
        return  state.my_entries
}