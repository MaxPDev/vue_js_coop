<template>
  <section class="hero is-danger is-fullheight">
    <Header />
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-7-tablet is-6-desktop is-5-widescreen">
              <h4 class="title is-4 has-text-centered">Liste des membres</h4>
              <div class="box" v-for="member in members">
                <p><b>Email : </b> {{member.email}}</p>
                <p><b>Pseudo : </b>{{member.fullname}}</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  </section>
</template>

<script>
import Header from '../components/Header.vue';
export default {
   components : {
      Header,
   },
  data() {
    return {
      members: [],
    };
  },
  mounted() {
    this.$api
        .get('members')
        .then((response) => {
          this.members = response.data;
        })
  }
}
</script>

<style scoped>

</style>