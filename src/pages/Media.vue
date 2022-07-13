<template>
    <div class="page_bg media">
      <h1>НАШИ МЕДИЯ</h1>
      <div class="wrapper">
        <div class="item-wrapper yandex">
          <h2>Я.МУЗЫКА</h2>
          <iframe frameborder="0" style="border:none;
        width:450px;
        height:600px;"
                  width="450"
                  height="600"
                  src="https://music.yandex.ru/iframe/#playlist/yamusic-bestsongs/10939104">
            Слушайте <a href='https://music.yandex.ru/users/yamusic-bestsongs/playlists/10939104'>Лучшее: Need Lesenger</a> — <a href='https://music.yandex.ru/users/yamusic-bestsongs'>Яндекс Музыка</a> на Яндекс Музыке
          </iframe>
        </div>
      <div class="item-wrapper vk">
        <h2>VK ГРУППА</h2>
            <div id="vk_groups" ></div>
      </div>
      </div>
      </div>
</template>

<script>
    export default {
        name: "Media",
    }
</script>

<style scoped>

.media{
  border-bottom: none;
}

.item-wrapper{
  display: flex;
  gap: 10px;
  flex-direction: column;
}

.wrapper{
  column-gap:10%;
  row-gap: 50px;
}

</style>