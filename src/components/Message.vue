<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img :src="avatar(member)" />
          </figure>
        </div>
        <router-link :to="{ name: 'Member', params: { idMember: member.id } }">
          <div class="media-content">
            <p class="title is-4">{{ member.fullname }}</p>
            <p class="subtitle is-6">{{ member.email }}</p>
          </div>
        </router-link>
      </div>

      <div class="content">
        {{ message.message }}
        <!--//todo: mettre des tags ? -->
        <!-- <a>@bulmaio</a>. -->
        <!-- <a href="#">#css</a> <a href="#">#responsive</a> -->
        <br />
        <time>{{ message.created_at }}</time>
      </div>
    </div>
    <div
      @click="deleteMessage(message.id, member.id)"
      id="btn"
      v-if="current_member.id === member.id"
    >
      <button class="button is-danger is-outlined">x</button>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";

export default {
  // name: 'Message',
  props: ["message"],

  data() {
    return {
      member: false,
    };
  },

  computed: {
    // Current member
    ...mapState({
      current_member: "member",
    }),

    // All members
    ...mapGetters(["getMember"]),

    dateMessage() {
      let date = new Date(this.message.created_at);
      return (
        "le " +
        date.toLocaleDateString("fr-FR") +
        " à " +
        date.toLocaleTimeString("fr-FR")
      );
    },
    // member() {
    //     //TODO user mutation
    //     // console.log(this.message);

    //     return this.$store.getters.getMembre(this.message.member_id);
    // }
  },

  mounted() {
    // this.member = this.getMember(this.$route.params.idMember);
    this.member = this.getMember(this.message.member_id);
    console.war("member");
    console.log(this.member);
  },

  methods: {
    deleteMessage(message_id, member_id) {
      // check (again) if it's current user who's about to delete the message
      if (member_id == this.current_member.id) {
        this.$api
          .delete(
            `channels/${this.message.channel_id}/posts/${this.message.id}`
          )
          .then((response) => {
            this.responseMessage = response.data.message;

            // emit to the Conversation view
            this.$bus.$emit("delete-message");

            // Message de confirmation
            this.fm = this.flashMessage.show({
              status: "info",
              title: "Message deleted",
              time: 1000
            });

              // this.flashMessage.deleteMessage(this.fm);
            // setTimeout(function() {
            // }, 10);


            //   // Mettre à jour la liste
            //   this.$api.get("members").then((response) => {
            //     //TODO: à modifier avec les mutations
            //     this.$store.commit("setMembers", response.data);
            //     // this.setMembers(response.data); //? mapMutation doesn't refresh well, why ?
            //     // this.ready();
            //   });
          });
      }
    },
  },
};
</script>

<style scoped>
.card {
  display: flex;
  justify-content: space-between;
}
</style>
