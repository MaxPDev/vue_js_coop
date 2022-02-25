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

    <div id="btns">
      <router-link  :to="{name : 'EditerConversation', params :{id: conversation.id}}">
        <button class="button is-primary is-outlined">edit</button>
      </router-link>

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
        this.$bus.$emit("delete-conversation", this.conversation.topic);

        // Message de confirmation
        this.flashMessage.show({
          status: "info",
          title: "Channel " + this.conversation.topic + " deleted",
          time: 2000,
        });

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

