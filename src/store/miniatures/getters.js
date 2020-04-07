

export function getMiniatures (state) {
        return state.miniatures
}

export function getMyMiniatures (state) {
        return state.miniatures
}


export function getMiniatureCount(state){
        return state.miniatures.length
}

export function getSelected(state){
        return state.selectedEntry
}

export function getVotesForSelected(state){
        return state.selectedVotes
}

export function alreadyVoted(state,xxx,rootState){

        if(Object.keys(state.selectedVotes).indexOf(rootState.user.user.uid)){
                return true
        }
        return false
}

export function getEntries (state){
        return state.entries
}