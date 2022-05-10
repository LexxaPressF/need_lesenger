<template>
    <div class="card_bg track">
        <img class="cover" src="../assets/img/SIF2.jpg"/>
        <div class="wrapper trackname">
            <h2>{{trackName}}</h2>
            <p class="pale" v-if="!inAlbum">Need Lesenger</p>
        </div>
        <div class="pale">{{duration}}</div>
    </div>
</template>

<script>
    export default {
        name: "TrackCard",
      // понять как отслеживать соседние треки
        props:{
          trackName: String,
          sign: String,
          link: String,
          inAlbum: Boolean
        },
        data(){
          return{
            duration: '',
            // coverLink: String,
          }
        },
        beforeCreate() {
          let aud = new Audio(require(`../assets/music/${this.$props.link}`))
          aud.preload = "metadata"
          aud.onloadeddata =()=>{
            let minutes = Math.floor(aud.duration / 60)
            let seconds = Math.floor(aud.duration) % 60
            if (seconds < 10) seconds = `0${seconds}`
            this.duration = `${minutes}:${seconds}`
          }
          // if (this.inAlbum){
          //   this.coverLink = require(`../assets/img/lhl.png`)
          // }
          // else this.coverLink = require(`../assets/img/SIF2.jpg`)
        }
    }
</script>

<style scoped>
.cover{
    width: 70px;
}

.track{
    margin: 18px 0 18px 0;
    display: flex;
    flex-direction: row;
    column-gap: 20px;
    place-items: center;
}

.pale{
    font-family: 'Verdana', serif;
    font-size: 0.8em;
    color: #6A6A6A;
}

h2{
    font-size: 0.8em;
    margin: 10px 0 10px 0;
}

.trackname{
    width: 100px;
}
</style>