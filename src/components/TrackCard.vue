<template>
    <div class="card_bg track">
        <img class="cover" :src="require(`../assets/albums/${this.$props.path}/cover.jpg`)"
             @click="playTrack"/>
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
        props:{
          trackName: String,
          sign: String,
          link: String,
          inAlbum: Boolean,
          path: String
        },
        data(){
          return{
            duration: '',
          }
        },
        beforeCreate() {
          let aud = new Audio(require(`../assets/albums/${this.$props.path}/${this.$props.link}`))
          aud.preload = "metadata"
          aud.onloadeddata =()=>{
            let minutes = Math.floor(aud.duration / 60)
            let seconds = Math.floor(aud.duration) % 60
            if (seconds < 10) seconds = `0${seconds}`
            this.duration = `${minutes}:${seconds}`
          }
        },
        methods:{
            playTrack(){
                let where = ''
                if (this.inAlbum === false) where = 'popular'
                else where = 'album'
                this.$store.dispatch('play', [where, this.trackName])
                    .then(this.$store.dispatch('mpShown'))

            }
        }
    }
</script>

<style scoped>
.cover{
    width: 70px;
    cursor: pointer;
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