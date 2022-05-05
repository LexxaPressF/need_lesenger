import { createStore } from "vuex";
import music from "@/store/music";

const store = createStore({
    modules: {
        music,
        // concerts,
        // merch,
    }
});

export default store;

// currentAlbum: {},
// trackName: "",
//     isPlaying: false,
//     currentTrack: new Audio(),
//     currentTime: 0,
//     duration: 0