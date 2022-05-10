export default {
    actions: {},
    mutations: {
        clickPlay(state, track) {
            state.playerStatus = !state.playerStatus
            if (state.currentTrack !== track) state.currentTrack = track
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
        albumList: [
            {
                id: 1,
                name: "Self-infected flower, pt. one",
                cover: 'SIF1.jpg',
                time: 2021,
                tracksList: [
                    {
                        id: 1,
                        name: "Helpless Observer ru",
                        link: "Need Lesenger - Helpless Observer.mp3"
                    },
                    {
                        id: 2,
                        name: "Helpless Observer en",
                        link: "Need Lesenger - Helpless Observer (English Version).mp3"
                    },
                    {
                        id: 3,
                        name: "Laxity Blossom ru",
                        link: "Need Lesenger - Laxity Blossom.mp3"
                    },
                    {
                        id: 4,
                        name: "Laxity Blossom en",
                        link: "Need Lesenger - Laxity Blossom (English Version).mp3"
                    }]
            },
            {
                id: 2,
                name: "Self-infected flower, pt. two",
                cover: 'SIF2.jpg',
                time: 2021,
                tracksList: [
                    {
                        id: 1,
                        name: "Love Hate Love",
                        link: "Need Lesenger - Love Hate Love.mp3"
                    },
                    {
                        id: 2,
                        name: "Disease",
                        link: "Need Lesenger - Disease.mp3"
                    },
                    {
                        id: 3,
                        name: "A Cold Place",
                        link: "Need Lesenger - A Cold Place.mp3"
                    }]
            },
            {
                id: 3,
                name: "Slowed and Reverbed",
                cover: 'lhl.png',
                time: 2021,
                tracksList: [
                    {
                        id: 1,
                        name: "Helpless Observer (S&R)",
                        link: "Need Lesenger - Helpless Observer (Slowed).mp3"
                    },
                    {
                        id: 2,
                        name: "Love Hate Love (S&R)",
                        link: "Need Lesenger - Love Hate Love (Slowed).mp3"
                    },
                    {
                        id: 3,
                        name: "Disease (S&R)",
                        link: "Need Lesenger - Disease (Slowed).mp3"
                    },
                    {
                        id: 4,
                        name: "A Cold Place (S&R)",
                        link: "Need Lesenger - A Cold Place (Slowed).mp3"
                    }]
            }],
        popularTrackList: [
            {
                id: 1,
                name: "Disease",
                link: "Need Lesenger - Disease.mp3"
            },
            {
                id: 2,
                name: "Love Hate Love",
                link: "Need Lesenger - Love Hate Love.mp3"
            },
            {
                id: 3,
                name: "Helpless Observer ru",
                link: "Need Lesenger - Helpless Observer.mp3"
            }],
        totalTrackList: [
            {
                name: "Helpless Observer ru",
                link: "Need Lesenger - Helpless Observer.mp3"
            },
            {
                name: "Helpless Observer en",
                link: "Need Lesenger - Helpless Observer (English Version).mp3"
            },
            {
                name: "Laxity Blossom ru",
                link: "Need Lesenger - Laxity Blossom.mp3"
            },
            {
                name: "Laxity Blossom en",
                link: "Need Lesenger - Laxity Blossom (English Version).mp3"
            },
            {
                name: "Love Hate Love",
                link: "Need Lesenger - Love Hate Love.mp3"
            },
            {
                name: "Disease",
                link: "Need Lesenger - Disease.mp3"
            },
            {
                name: "A Cold Place",
                link: "Need Lesenger - A Cold Place.mp3"
            },
            {
                name: "Helpless Observer (S&R)",
                link: "Need Lesenger - Helpless Observer (Slowed).mp3"
            },
            {
                name: "Love Hate Love (S&R)",
                link: "Need Lesenger - Love Hate Love (Slowed).mp3"
            },
            {
                name: "Disease (S&R)",
                link: "Need Lesenger - Disease (Slowed).mp3"
            },
            {
                name: "A Cold Place (S&R)",
                link: "Need Lesenger - A Cold Place (Slowed).mp3"
            }],
        currentTrack: {},
        playerStatus: false,
    },
    getters: {
        isPlaying: state => state.playerStatus,
        currentRun: state => {
            let album = state.totalTrackList
            let track = state.currentTrack
            return {album, track}
        },
        albumList: state => state.albumList,
        popularTrackList: state => state.popularTrackList,
    }
}