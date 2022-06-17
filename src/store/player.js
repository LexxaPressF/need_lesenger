
export default {
    actions: {
        mpShown(ctx){
            ctx.commit('mpShown')
        },
        mpClose(ctx){
            ctx.commit('mpClose')
        },
        play({commit, rootState}, data) {
            if (data[0] === 'popular') {
                data[0] = rootState.music.popularTrackList
            }
            else data[0] = rootState.music.totalTrackList
            commit('play', data)
        },
        next({commit, rootGetters}){
            let albumNames = rootGetters.albumNames
            commit('next', albumNames)
        },
        prev({commit, rootGetters}){
            let albumNames = rootGetters.albumNames
            commit('prev', albumNames)
        }
    },
    mutations: {
        mpShown(state) {
            state.mpShown = true
        },
        mpClose(state) {
            state.mpShown = false
        },
        play(state, data) {
            state.currentPlaylist = data[0]
            for (let i = 0; i < state.currentPlaylist.length; i++) {
                if (state.currentPlaylist[i].name.toUpperCase() === data[1].toUpperCase()) {
                    state.currentTrack = data[0][i]
                    break
                }
            }
        },
        next(state, albumNames) {
            state.playerStatus = false
            if (state.currentTrack.id + 1 > state.currentPlaylist.length) {
                state.currentTrack = state.currentPlaylist[0]
            } else state.currentTrack = state.currentPlaylist[state.currentTrack.id + 1]
            if (state.currentTrack.path !== state.currentPlaylist[state.currentTrack.id - 1].path) {
                let albumName = ''
                for (let i = 0; i < albumNames.length; i++) {
                    if (state.currentPlaylist[state.currentTrack.id - 1].path === albumNames[i].path) {
                        albumName = albumNames[i].name
                        break
                    }
                }
                this.emitter.emit("closeAllExcepts", albumName)
            }
        },
        prev(state, albumNames) {
            state.playerStatus = false
            if (state.currentTrack.id - 1 < 0) {
                state.currentTrack = state.currentPlaylist[state.currentPlaylist.length - 1]
            } else state.currentTrack = state.currentPlaylist[state.currentTrack.id - 1]
            if (state.currentTrack.path !== state.currentPlaylist[state.currentTrack.id + 1].path) {
                for (let i = 0; i < albumNames.length; i++) {
                    if (state.currentPlaylist[state.currentTrack.id + 1].path === albumNames[i].path) {
                        this.emitter.emit("closeAllExcepts", albumNames[i].name)
                        break
                    }
                }
            }
        }
    },
    state: {
        playerStatus: false,
        mpShown: false,
        currentPlaylist: [],
        currentTrack: {}
    },
    getters: {
        currentTrack: state => state.currentTrack,
        isPlaying: state => state.playerStatus,
        isPlayerShown: state => state.mpShown,
    }
}