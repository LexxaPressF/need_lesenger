export default {
    actions: {},
    mutations: {},
    state: {
        albumList: [
            {
                id: 1,
                path: "SIF1",
                name: "Self-infected flower, pt. one",
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
                path: "SIF2",
                name: "Self-infected flower, pt. two",
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
                path: "S&R",
                name: "Slowed and Reverbed",
                cover: 'cover.jpg',
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
                id: 0,
                name: "Disease",
                path: "SIF2",
                link: "Need Lesenger - Disease.mp3",
            },
            {
                id: 1,
                name: "Love Hate Love",
                path: "SIF2",
                link: "Need Lesenger - Love Hate Love.mp3",
            },
            {
                id: 2,
                name: "Helpless Observer ru",
                path: "SIF1",
                link: "Need Lesenger - Helpless Observer.mp3",
                
            }],
        totalTrackList: [
            {
                id: 0,
                name: "Helpless Observer ru",
                path: "SIF1",
                link: "Need Lesenger - Helpless Observer.mp3"
            },
            {
                id: 1,
                name: "Helpless Observer en",
                path: "SIF1",
                link: "Need Lesenger - Helpless Observer (English Version).mp3"
            },
            {
                id: 2,
                path: "SIF1",
                name: "Laxity Blossom ru",
                link: "Need Lesenger - Laxity Blossom.mp3"
            },
            {
                id: 3,
                path: "SIF1",
                name: "Laxity Blossom en",
                link: "Need Lesenger - Laxity Blossom (English Version).mp3"
            },
            {
                id: 4,
                path: "SIF2",
                name: "Love Hate Love",
                link: "Need Lesenger - Love Hate Love.mp3"
            },
            {
                id: 5,
                path: "SIF2",
                name: "Disease",
                link: "Need Lesenger - Disease.mp3"
            },
            {
                id: 6,
                path: "SIF2",
                name: "A Cold Place",
                link: "Need Lesenger - A Cold Place.mp3"
            },
            {
                id: 7,
                path: "S&R",
                name: "Helpless Observer (S&R)",
                link: "Need Lesenger - Helpless Observer (Slowed).mp3"
            },
            {
                id: 8,
                path: "S&R",
                name: "Love Hate Love (S&R)",
                link: "Need Lesenger - Love Hate Love (Slowed).mp3"
            },
            {
                id: 9,
                path: "S&R",
                name: "Disease (S&R)",
                link: "Need Lesenger - Disease (Slowed).mp3"
            },
            {
                id: 10,
                path: "S&R",
                name: "A Cold Place (S&R)",
                link: "Need Lesenger - A Cold Place (Slowed).mp3"
            }],
    },
    getters: {
        albumNames: state => {
          let list =[]
          for (let i = 0; i < state.albumList.length; i++){
              list.push({
                  path: state.albumList[i].path,
                  name: state.albumList[i].name,
              })
          }
          return list
        },
        totalTrackList: state => state.totalTrackList,
        albumList: state => state.albumList,
        popularTrackList: state => state.popularTrackList,
    }
}