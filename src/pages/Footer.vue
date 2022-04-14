<template>
  <div class="pages_bg footer">
    <div class="trademark">
      <img id="reversed" src="../assets/img/logo_nl.svg"/>
      <div class="text">Разработка © 2022
        <br> Правила использования контента
        <br> Политика об обработке персональных данных
      </div>
    </div>
    <div class="cooperation">
      <h2>Сотрудничество</h2>
      <div class="email">needlesenger@mail.ru</div>
    </div>
    <div class="info">
      <h3>О нас</h3>
      <h3>Альбомы</h3>
      <h3>Концерты</h3>
    </div>
    <div class="media">
      <img class="vk" src="../assets/img/logo_vk.svg"/>
      <img class="inst" src="../assets/img/logo_inst.svg"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>

.footer{
  grid-row: 2;
  grid-column: 1/3;

  background-color: #725FEA;
  width: 100%;

  display: flex;
  gap: 8%;
  justify-content: space-evenly;

  color: white;
  font-family: "SF Pro Display Regular", serif;

  font-size: 0.5em;
  font-weight: lighter !important;
  letter-spacing: 0.2em;
}

.footer > div{
  margin-top: 20px;
}

#reversed{
  filter: invert(100%);
  width:44%;
}

.media{
  display: flex;
  justify-content: center;
  place-items: start;
  gap:20px;
}

.media > img{
  width:26%;
}
</style>