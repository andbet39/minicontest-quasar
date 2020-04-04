


export function setUser (state,payload) {
    state.user = payload
}

export function signOut (state) {
    state.user = null
}
