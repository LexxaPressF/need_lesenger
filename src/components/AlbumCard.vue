<template>
    <div class="card_bg album">
      <div class="musicPlayer">
        <img class="cover" :src="require(`../assets/albums/${album.path}/cover.jpg`)" @click="albumClick"/>
      </div>
      <div class="info">
        <h2>{{album.name.toUpperCase()}}</h2>
        <div class="time">Need Lesenger {{album.time}}</div>
      </div>
      <transition name="collaps_lists">
      <div class="wrapper albumTracks" v-if="!hidden">
          <TrackCard v-for="track in album.tracksList"
                     :key="track.id"
                     :inAlbum="true"
                     :trackName="track.name.toUpperCase()"
                     :link="track.link"
                     :path="album.path"/>
      </div>
      </transition>
    </div>
</template>

<script>
    import TrackCard from "./TrackCard";
    export default {
      name: "AlbumCard",
      components: {TrackCard},
      props: {
        album: Object
      },
      //повесить ивент на @click, чтобы закрывал все остальные албомы, когда происходил
      data(){
        return{
          hidden: true
        }
      },
      methods:{
          albumClick(){
              this.hidden = !this.hidden
              this.emitter.emit("closeAllExcepts", this.$props.album.name)
              // this.emitter.emit("musicPlayer", this.$props.album.name)
              this.$store.dispatch('clickPlay', {track: this.$props.album.tracksList[0].name})
              this.$store.dispatch('mpShown')
          }
      },
      mounted() {
          this.emitter.on("closeAllExcepts", exception => {
              if (this.$props.album.name !== exception) this.hidden = true
          });
      }
    }
</script>

<style scoped>
.cover{
  height: 250px;
  cursor: pointer;
}

.info{
    width: 210px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    font-family: 'Verdana', serif;
    font-size: 0.8em;
    color: #6A6A6A;
    line-height: 1.8;
}

h1{
    color: black;
    font-family: "SF Pro Display Regular", serif;
    font-size: 1.3em;
    font-weight: lighter;
    margin: 16px 0 12px 0;
}

h2{
  font-size: 1.4em;
}

.album{
  margin: 3% 0 3% 0;
}

.albumTracks{
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  max-width: 250px;
}

/*Анимация*/
.collaps_lists-enter-active,
.collaps_lists-leave-active{
    transition: all 0.3s ease-in-out;
}

.collaps_lists-enter-from,
.collaps_lists-leave-to{
    transform: translateY(-14px);
    opacity: 0;
    max-height: 0;
}

.collaps_lists-enter-to,
.collaps_lists-leave-from{
    max-height: 800px;
}
</style>