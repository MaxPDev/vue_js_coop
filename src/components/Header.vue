<template>
<section class="hero header">
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <div class="navbar-item header-item"><b>Coop</b></div>
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/"><h4 class="header-item">Mes conversations</h4></router-link>
        <router-link class="navbar-item" to="/createConversation"><h4 class="header-item">Nouvelle conversation</h4></router-link>
        <router-link class="navbar-item" to="/Members"><h4 class="header-item">Membres</h4></router-link>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="navbar-item"><p class="header-item">connecté en tant que <b class="header-item"> {{$store.state.member.fullname}}</b></p></div>
          <div class="buttons">
            <router-link class="navbar-item button" to="/LogOut">Déconnexion</router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</section>
</template>

<script>
export default {

}
</script>

<style>
.header{
  background-color: #34495E;
}
.header-item{
  color : rgb(236, 226, 226);
}

.header-item:hover {
  color: black
}

</style>