import { createStore } from "vuex";
import music from "@/store/music";
import player from "@/store/player";

const store = createStore({
    modules: {
        music,
        player
    }
});

export default store;
