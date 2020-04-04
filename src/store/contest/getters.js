
export function getContests (state) {
    return state.all
}

export function alreadySubmittedToSelected(state,xxx,rootState){
   let x  = Object.values( state.selectedEntries).find(item=>item.submittedBy == rootState.user.user.uid);
   console.log(rootState.user)
   return x != null && x != undefined

}