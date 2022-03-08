<template>
    <div id="bg_mp">
        <div id="controls">
            <a class="btn" @click="previousTrack"><i class="fas fa-backward"></i></a>
            <a class="btn" v-if="isPlaying" @click="playTrack()"><i class="fas fa-stop"></i></a>
            <a class="btn" v-else @click="playTrack()"><i class="fas fa-play"></i></a>
            <a class="btn" @click="nextTrack"><i class="fas fa-forward"></i></a>
        </div>
        <div id="title">
            {{trackName}}
        </div>
        <div id="timeline">
            <div id="playhead" v-bind:style="{marginLeft: `${100 * this.currentTrack.currentTime / this.duration}%`}"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MusicPlayer",
        props:{
            currentTime: Number
        },
        data() {
            return {
                currentAlbum: {},
                trackName: "",
                isPlaying: false,
                currentTrack: new Audio(),
                duration: 0
            }
        },
        mounted(){
            this.emitter.on("trackChosen",
                    chosenTrack =>{
                this.currentAlbum = chosenTrack[0]
                this.trackName = chosenTrack[1]
                this.currentTrack.pause()
                this.currentTrack = new Audio(require(`../assets/music/${this.currentAlbum.music[this.currentAlbum.tracks.indexOf(this.trackName)]}`))
                this.currentTrack.play()
                this.isPlaying = true
            })
        },
        methods: {
            playTrack(){
                this.isPlaying = !this.isPlaying
                this.duration = this.currentTrack.duration
                if (this.isPlaying === true) {
                    this.currentTrack.play()
                }
                else {
                    this.currentTrack.pause()
                }
            },
            previousTrack(){
                this.isPlaying = true
                this.currentTrack.pause()
                this.currentTrack = new Audio(require(`../assets/music/${this.currentAlbum.music[this.currentAlbum.tracks.indexOf(this.trackName) - 1]}`))
                this.currentTrack.play()
                this.trackName = this.currentAlbum.tracks[this.currentAlbum.tracks.indexOf(this.trackName) - 1]
            },
            nextTrack(){
                this.isPlaying = true
                this.currentTrack.pause()
                this.currentTrack = new Audio(require(`../assets/music/${this.currentAlbum.music[this.currentAlbum.tracks.indexOf(this.trackName) + 1]}`))
                this.currentTrack.play()
                this.trackName = this.currentAlbum.tracks[this.currentAlbum.tracks.indexOf(this.trackName) + 1]
            }
        }
    }
</script>

<style scoped>
#bg_mp{
    grid-row: 1/3;
    grid-column: 1;
    display: grid;
    border-radius: 20px 50px 20px 50px;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 200px auto;
    transform: skewX(-4deg);
    margin: 0 auto;

    /*Для таба как для кнопки*/
    position: relative;
    padding: 1em 1.8em;
    outline: none;
    border: 1px solid #303030;
    color: white;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 15px;
    overflow: hidden;
    transition: 0.2s;
    font-weight: bold;
}

#bg_mp:hover {
    box-shadow: 0 0 10px #ae00ff, 0 0 25px #001eff, 0 0 50px #ae00ff;
    transition-delay: 0.1s;
}

#controls{
    grid-row: 1/3;
    grid-column: 1;
}


#title{
    font-size: 20px;
    margin: 10px 0 2px 8px;
    vertical-align: bottom;
    grid-row: 1;
    grid-column: 2;
}

#timeline{
    cursor: pointer;
    grid-row: 2;
    grid-column: 2;
    border: 1px rgba(111, 111, 111, 0.5) solid;
    height: 11px;
    width: 250px;
    float: left;
    border-radius: 15px;
}

#playhead{
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-top: 1px;
    background: rgba(111, 111, 111, 0.5);
}

#bg_mp:hover #playhead{
    background: rgb(126, 1, 184);
    box-shadow: 0 0 7px #ae00ff, 0 0 5px #001eff, 0 0 20px #ae00ff;
    transition-delay: 0.1s;
}


/*Стиль для кнопок переключения*/

#controls{
    transform: skewX(-2deg);
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 80px;
}

.btn{
    cursor: pointer;
    height: 50px;
    width: 30px;
    border-radius: 10px 20px 10px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    text-align: center;
    color: rgba(102, 102, 102, 0.5);
    text-decoration: none;
}

#bg_mp:hover .btn{
    box-shadow: 0 0 10px #ae00ff, 0 0 25px #001eff, 0 0 50px #ae00ff;
    color: #7a00bb;
    transition-delay: 0.1s;
}
    
</style>