
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
        pause(ctx){
          ctx.commit('pause')
        },
        continue(ctx){
          ctx.commit('continue')
        },
        next(ctx){
            ctx.commit('next')
        },
        prev(ctx){
            ctx.commit('prev')
        },
        updateTrack(ctx){
            ctx.commit('updateTrack')
        },
        setTime(ctx, time){
            ctx.commit('setTime', time)
        },
        setVolume(ctx, volume){
            ctx.commit('setVolume', volume)
        }
    },
    mutations: {
        updateTrack(state){
            state.playingTrack = new Audio(require(`../assets/albums/${state.currentTrack.path}/${state.currentTrack.link}`))
        },
        mpShown(state) {
            state.mpShown = true
        },
        mpClose(state) {
            state.mpShown = false
        },
        play(state, data) {
            if (state.currentPlaylist.length !== 0) this.commit('pause')
            state.currentPlaylist = data[0]
            for (let i = 0; i < state.currentPlaylist.length; i++) {
                if (state.currentPlaylist[i].name.toUpperCase() === data[1].toUpperCase()) {
                    state.currentTrack = data[0][i]
                    break
                }
            }
            this.commit('updateTrack')
            this.commit('continue')
        },
        pause(state) {
            state.playingTrack.pause()
            state.playerStatus = false
        },
        continue(state){
            state.playingTrack.play()
            state.playerStatus = true
        },
        next(state) {
            this.commit('pause')
            if (state.currentTrack.id + 1 > state.currentPlaylist.length - 1) {
                state.currentTrack = state.currentPlaylist[0]
            } else state.currentTrack = state.currentPlaylist[state.currentTrack.id + 1]
            this.commit('updateTrack')
            this.commit('continue')
        },
        prev(state) {
            this.commit('pause')
            if (state.currentTrack.id - 1 < 0) {
                state.currentTrack = state.currentPlaylist[state.currentPlaylist.length - 1]
            } else state.currentTrack = state.currentPlaylist[state.currentTrack.id - 1]
            this.commit('updateTrack')
            this.commit('continue')
        },
        setTime(state, time) {
            state.playingTrack.currentTime = time
        },
        setVolume(state, volume) {
            state.playingTrack.volume = volume
        }
    },
    state: {
        playerStatus: false,
        mpShown: false,
        currentPlaylist: [],
        currentTrack: {},
        playingTrack: {}, //for audio obj

    },
    getters: {
        currentTrack: state => state.currentTrack,
        playingTrack: state => state.playingTrack,
        playerStatus: state => state.playerStatus,
        isPlaying: state => state.playerStatus,
        isPlayerShown: state => state.mpShown,
    }
}