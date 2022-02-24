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
                :to="{ name: 'Member', params: { idMember: member.id } }"
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
                      <p class="subtitle is-6">{{ member.email }}</p>
                    </div>
                  </div>
                </div>
              </router-link>
              <button
                @click="deleteMember(member.id)"
                class="button is-danger is-outlined"
              >
                Supprimer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--Flash message (alert) -->
    <FlashMessage></FlashMessage>
  </section>
</template>

<script>
import { mapState } from "vuex";
// import { mapMutations } from "vuex";
import Header from "../components/Header.vue";

export default {
  components: {
    Header,
  },
  data() {
    return {
      // members: [],
    };
  },

  // TODO: Mettre members aux store,en utilisant les mutations
  mounted() {
    // this.$api.get("members").then((response) => {
    //   this.members = response.data;
    // });
  },

  methods: {
    // Supprimer un member
    deleteMember(member_id) {
      this.$api.delete(`members/${member_id}`).then((response) => {
        this.responseMessage = response.data.message;

        // Message de confirmation
        this.flashMessage.show({
          status: "info",
          title: "User deleted",
          time: 1000
        });

        // Mettre à jour la liste
        this.$api.get("members").then((response) => {
          //TODO: à modifier avec les mutations
          this.$store.commit("setMembers", response.data);
          // this.setMembers(response.data); //? mapMutation doesn't refresh well, why ?
          // this.ready();
        });
      });
    },
  },

  computed: {
    ...mapState(["members"]),
    // ...mapMutations(["setMembers"]),
  },
};
</script>

<style scoped>
</style>