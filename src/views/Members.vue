<template>
  <section class="hero is-fullheight">
    <Header />
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-7-tablet is-6-desktop is-5-widescreen">
            <h4 class="title is-4 has-text-centered">Liste des membres</h4>

            <div class="box" v-for="member in members" :key="member.id">
              <router-link
                :to="{ name: 'Membre', params: { idMembre: member.id } }"
                :key="member.id"
                class="box card"
              >

                <div class="card-content">
                  <div class="media">
                    <div class="media-left">
                      <figure class="image is-48x48">
                        <img :src="avatar(member)" alt="avatar" />
                      </figure>
                    </div>
                    
                    <div class="media-content">
                      <p class="title is-4">{{ member.fullname }}</p>
                      <p class="subtitle is-6"> {{ member.email }} </p>
                    </div>
                  </div>
                </div>

              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Header from "../components/Header.vue";
export default {
  components: {
    Header,
  },
  data() {
    return {
      members: [],
    };
  },

  // TODO: Mettre members aux store,en utilisant les mutations
  mounted() {
    this.$api.get("members").then((response) => {
      console.log(response.data);
      this.members = response.data;
    });
  },
};
</script>

<style scoped>
</style>