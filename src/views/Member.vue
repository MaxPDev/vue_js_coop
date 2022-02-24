<template>
  <div>
    <Header />
    <div v-if="member" class="card">
      <div class="card-image">
        <figure class="image is-3by1">
          <img class="is-rounded" :src="avatar(member)" alt="avatar" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left"></div>
          <div class="media-content">
            <p class="title is-4">{{ member.fullname }}</p>
            <p class="subtitle is-6">{{ member.email }}</p>
          </div>
        </div>

        <div class="content">
          Description here
          <br />
          <br />
          <time>Member since {{ created_at }} </time>
        </div>
      </div>
      <div class="box">{{ messages.length }} last posts</div>
      <template>
        <div v-for="message in messages" :key="message.id">
          <router-link
            :to="{ name: 'Conversation', params: { id: message.channel_id } }"
          >
            <message :message="message" :key="message.id" />
          </router-link>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
// // demander pour mixin fin du cour
</script>


<script>
import { mapGetters } from "vuex";
import Message from "../components/Message.vue";

export default {
  components: {
    Message,
  },

  data() {
    return {
      member: false,
      user_messages: [],
      conversation: "",
    };
  },

  mounted() {
    //TODO Doesn't work, à corriger
    // this.member = this.$store.getters.getMember(this.$route.params.idMember);
    this.member = this.getMember(this.$route.params.idMember);

    /// Récupérer les dix dernier messages de l'utilisateurs :
    /// Récupérer les channels, pour chaque channel récupérér les messages de l'utilisateur, les trier par date et récupérer les dix premiers
    ///
    //
    this.$api.get("channels").then((response) => {
      response.data.forEach((conversation) => {
        this.conversation = conversation;
        this.$api.get(`channels/${conversation.id}/posts`).then((response) => {
          response.data.forEach((message) => {
            if (message.member_id == this.member.id) {
              this.user_messages.push(message);
            }
          });
        });
      });
    });
  },
  computed: {
    ...mapGetters(["getMember"]),

    messages() {
      //trier les messages selon leurs date de création et prendre les 10 messages les plus récent
      return this.user_messages
        .sort(
          (msg_a, msg_b) =>
            new Date(msg_a.created_at) < new Date(msg_b.created_at)
        )
        .slice(0, 10);
    },

    created_at() {
      if (this.member) {
        let date = new Date(this.member.created_at);
        return (
          date.toLocaleDateString("fr-FR") +
          " à " +
          date.toLocaleDateString("fr-FR")
        );
      }
    },
  },
};
</script>
