<template>
  <div id="box">
    <div>
      <router-link
        :to="{ name: 'Conversation', params: { id: conversation.id } }"
      >
        <p>
          <b>{{ conversation.topic }}</b>
        </p>
        <p>{{ conversation.label }}</p>
      </router-link>
    </div>

    <div id="btn">
      <button
        @click="deleteConversation()"
        class="button is-danger is-outlined"
      >
        x
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: ["conversation"],

  /**
supprimer conv
flash message
emot
refresh in lvl up */
  methods: {
    deleteConversation() {
      this.$api.delete(`channels/${this.conversation.id}`).then((response) => {
        this.responseMessage = response.data.message;
      //   console.log(this.message);

        // emit to the Conversations view
        this.$bus.$emit('delete-conversation', this.conversation.topic)

        // Message de confirmation
        this.flashMessage.show({
          status: "info",
          title: "Channel " + this.conversation.topic + " deleted",
        });

      //   // Mettre à jour la liste
      //   this.$api.get("members").then((response) => {
      //     //TODO: à modifier avec les mutations
      //     this.$store.commit("setMembers", response.data);
      //     // this.setMembers(response.data); //? mapMutation doesn't refresh well, why ?
      //     // this.ready();
      //   });
      });
    },
  },
};
</script>


<style>
#box {
  display: flex;
  justify-content: space-between;
}
</style>

