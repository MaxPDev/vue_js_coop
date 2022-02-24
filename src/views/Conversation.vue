<template>
  <div>
    <Header />
    <section class="section">
      <h4 class="title is-4 has-text-centered">Détail de conversation</h4>
      <div class="box" v-if="conversation">
        <p>
          <b>{{ conversation.topic }}</b>
        </p>
        <p>{{ conversation.label }}</p>
        <br />
        <router-link
          div="box"
          class="button is-danger is-outlined"
          :to="{ name: 'deleteConversation', params: { id: conversation.id } }"
        >
          delete conversation</router-link
        >
      </div>
      <posterMessage v-if="!modification" :conversation="conversation" />
      <modifierMessage v-else :conversation="conversation" :message_to_edit="message_to_edit"/>
      <div v-for="message in messages" :key="message.id">
        <Message :message="message" />
      </div>
    </section>
        <!--Flash message (alert) -->
    <FlashMessage></FlashMessage>
  </div>
</template>
<script>
import Header from "../components/Header.vue";
import posterMessage from "../components/posterMessage.vue";
import modifierMessage from "../components/modifierMessage.vue";
import Message from "../components/Message.vue";

export default {
  components: {
    Header,
    posterMessage,
    modifierMessage,
    Message,
  },
  data() {
    return {
      //  id: this.$route.params.id,
      conversation: false,
      messages: [],
      modification: false,
    };
  },
  mounted() {
    let id = this.$route.params.id;
    this.$api.get(`channels/${id}`).then((response) => {
      this.conversation = response.data;
      this.getMessage();
    });

    this.$bus.$on("charger-message", (message) => {
      // le paramètre message n'est pas utile, on trouvera le message
      // allant chercher tous les message dans le current channel
      console.log(message);

      if(!this.modification) {
      // Message de confirmation
        this.flashMessage.show({
          status: "info",
          title: "Posted !",
          time: 1000,
        });
      } else {
                 // Message de confirmation
        this.flashMessage.show({
          status: "info",
          title: "Messaged modified",
          time: 1000,
        });
      }

      this.modification = false;
      this.getMessage();
      console.log(this.messages);
      // this.message.push(message);
      
    });

    this.$bus.$on("delete-message", () => {
      this.getMessage();
    });

   this.$bus.$on("modifier-message", (message_to_edit) => {

      this.modification = true;
      this.message_to_edit = message_to_edit;
    });
  },
  methods: {
    getMessage() {
      this.$api
        .get(`channels/${this.conversation.id}/posts`)
        .then((response) => {
          // .data !!!!!!!!
          this.messages = response.data;
        });
    },
  },
};
</script>

<style>
</style>