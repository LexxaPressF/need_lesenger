<template>
    <div class="card_bg album">
      <img class="cover" :src="require(`../assets/img/${album.cover}`)" @click="hidden = !hidden"/>
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
                     :link="track.link" />
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
  flex-direction: column;
}

/*Анимация*/
/*Сделать так чтобы треки подгружались после выставления высоты*/
.collaps_lists-enter-active, .collaps_lists-leave-active {
  transition: all 0.2s;
  max-height: 230px;
}
.collaps_lists-enter, .collaps_lists-leave-to
{
  opacity: 0;
  max-height: 0;
}
</style>