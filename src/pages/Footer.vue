<template>
  <div class="pages_bg footer">
    <div class="trademark">
      <img id="reversed" src="../assets/img/logo_nl.svg"/>
      <div class="text">
        <span>Разработка © 2022</span>
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
      <a href="https://vk.com/needlesenger"><img class="vk" src="../assets/img/mediaLogos/vk.svg"/></a>
      <a href=""><img class="inst" src="../assets/img/mediaLogos/inst.svg"/></a>
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

  font-size: 0.55em;
  font-weight: lighter !important;
  letter-spacing: 0.2em;
}

.footer > div{
  margin-top: 30px;
}

#reversed{
  filter: invert(100%);
  width:36%;
}

.media{
  display: flex;
  justify-content: center;
  margin-top: 70px;
  place-items: start;
  gap:35px;
}

.media > img{
  width:100px;
  cursor: pointer;
}

.text{
  letter-spacing: 0.1em;
}

.text > span{
  line-height: 26px;
}

.cooperation > h2{
  color: white;
  margin-top: 0;
  margin-bottom: 16px;

}

.email{
  font-size: 1.2em;
}

.info{
  line-height: 26px;
  font-size: 1.4em;
}
</style>