export default {
    actions: {
        mpShown(ctx){
            ctx.commit('mpShown')
        },
        mpClose(ctx){
            ctx.commit('mpClose')
        },
        clickPlay(ctx, track) {
            ctx.commit('clickPlay', track)
        },
        next(ctx){
            ctx.commit('next')
        },
        prev(ctx){
            ctx.commit('prev')
        }
    },
    mutations: {
        mpShown(state){
            state.mpShown = true
        },
        mpClose(state){
            state.mpShown = false
        },
        clickPlay(state, track) {
            state.playerStatus = !state.playerStatus
            if (state.currentTrack !== track) {
                state.currentTrack = track
            }
        },
        next(state) {
            state.playerStatus = false

            let nextTrackIndex = state.currentTrackList.findIndex(track => track.name = state.currentTrack) + 1
            state.currentTrack = state.currentTrackList[nextTrackIndex]
        },
        prev(state) {
            state.playerStatus = false
            let prevTrackIndex = state.currentTrackList.findIndex(track => track.name = state.currentTrack) + 1
            state.currentTrack = state.currentTrackList[prevTrackIndex]
        }
    },
    state: {
        playerStatus: false,
        mpShown: false
    },
    getters: {
        isPlaying: state => state.playerStatus,
        isPlayerShown: state => state.mpShown,
    }
}