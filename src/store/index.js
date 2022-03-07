import { createStore } from "vuex";

const store = createStore({
    state: {
        albumList:{
            SIF1: {
                id: 1,
                name: "Self-infected flower pt. 1",
                tracks: ["Helpless Observer ru", "Helpless Observer en", "Laxity Blossom ru",
                    "Laxity Blossom en"],
                music: ["Need Lesenger - Helpless Observer.mp3", "Need Lesenger - Helpless Observer (English Version).mp3",
                    "Need Lesenger - Laxity Blossom.mp3", "Need Lesenger - Laxity Blossom (English Version).mp3"],
                cover: 'SIF1.jpg'
            },
            SIF2: {
                id: 2,
                name: "Self-infected flower pt. 2",
                tracks: ["Love Hate Love", "Disease", "A Cold Place"],
                music: ["Need Lesenger - Love Hate Love.mp3", "Need Lesenger - Disease.mp3",
                    "Need Lesenger - A Cold Place.mp3"],
                cover: 'SIF2.jpg'
            },
            SR: {
                id: 3,
                name: "Slowed and Reverbed",
                tracks: ["Helpless Observer (S&R)", "Love Hate Love (S&R)",
                    "Disease (S&R)", "A Cold Place (S&R)"],
                music: ["Need Lesenger - Helpless Observer (Slowed).mp3", "Need Lesenger - Love Hate Love (Slowed).mp3", "Need Lesenger - A Cold Place (Slowed).mp3"],
                cover: 'lhl.png'
            }
        },
        currentAlbum: {},
        trackName: "",
        isPlaying: false,
        currentTrack: new Audio(),
        currentTime: 0,
        duration: 0
    },
    mutations:{
        CHANGE_TRACK(state, track, album){
            state.trackName = track
            state.currentAlbum = album
            state.currentTrack = new Audio(require(`../assets/music/${album.music[album.tracks.indexOf(track)]}`))
        },
    }
});

export default store;