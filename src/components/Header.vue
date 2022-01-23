<template>
<section class="hero has-background-grey-darker">
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <div class="navbar-item"><b>Coop</b></div>
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/">Mes conversations</router-link>
        <router-link class="navbar-item" to="createConversation">Nouvelle conversation</router-link>
        <router-link class="navbar-item" to="Members">Membres</router-link>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="navbar-item"><p>connecté en tant que <b> {{$store.state.member.fullname}}</b></p></div>
          <div class="buttons">
            <router-link class="navbar-item button is-black" to="LogOut">Déconnexion</router-link>
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

</style>