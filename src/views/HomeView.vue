<template>
  <div class="custom-home container">
    <div class="custom-layout">
      <div class="layout-profile my-3">
        <div class="custom-profile-image">
          <img src="https://s2-techtudo.glbimg.com/JsE244mucjKWLYtNgeiDyfVYlJQ=/0x129:1024x952/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/7/i/ME2AxRRoygUyFPCDe0jQ/3.png" >
        </div>
        <div class="custom-info-profile">
          <div class="custom-profile">
            <h1>Mauricio Rubiale Ferreira Ramos</h1>
            <div class="d-grid justify-content-center">
              <b>Linkedin: </b><a href="https://linkedin.com/in/mauriciorubiale">mauricio</a>
              <b>Github: </b><a href="https://github.com/mauricio201922">Mauricio</a>
            </div>
          </div>
          <div class="my-3 custom-descricao">
            <span>
              <h3>Objetivo:</h3>
              Programador full-stack Senior
            </span>
            <span>
              <h3>Sobre mim:</h3>
              Eu sou determinado, alegre, ativo, tenho ótimo trabalho em equipe, gosto de ler, estudar, programar, treinar, correr, gosto de ajudar outras pessoas,
              sou consistente e calmo.
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
}
</script>

<style scoped>
.custom-home {
  display: flex;
  height: 100vh;
  flex-wrap: nowrap;
}

.custom-layout {
  margin: 55px 0;
}

.layout-profile {
  position: relative;
}

.custom-profile-image {
  position: absolute;
}

.custom-profile-image img {
  border-radius: 50%;
  width: 200px;
  height: 200px;
}

.custom-info-profile {
  margin: 0 0 0 13em;
}

.custom-profile div {
  grid-template-columns: 100px 100px;
}

.custom-info-profile .custom-profile h1 {
  margin: 0;
}

.custom-info-profile .custom-descricao {
  display: flex;
  flex-direction: column;
  row-gap: 15px;
}
</style>