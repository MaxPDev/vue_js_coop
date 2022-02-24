<template>
<form class="box" @submit.prevent="modifier">
      <div class="field">
          <div class="control">
              <input type="text" class="input" v-model="message">
          </div>
      </div>
      <div class="buttons">
          <button class="button"> Modifier le message </button>
      </div>
    </form>                                                    
</template>
<script>
export default {
props : ["conversation", "message_to_edit"],
 data(){
        return {
            message : this.message_to_edit.message,
        }
    },
    methods : {
        modifier(){
            this.$api.put(`channels/${this.conversation.id}/posts/${this.message_to_edit.id}`,{
                channel_id : this.conversation.id,
                message : this.message,}).then(response =>{
                    console.log(response.data);
                    this.$bus.$emit('charger-message', response.data)
                    this.message = '';
                })
            }
        },

        mounted() {
                 
         window.scrollTo(0,0);
        }
}
</script>

<style>

</style>
