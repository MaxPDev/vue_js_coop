<template>
<form class="box" @submit.prevent="poster">
      <div class="field">
          <div class="control">
              <input type="text" class="input" v-model="message"/>
          </div>
      </div>
      <div class="buttons">
          <button class="button"> Poster un message </button>
      </div>
    </form>                                                    
</template>
<script>
export default {
props : ["conversation"],
 data(){
        return {
            message : '',
        }
    },
    methods : {
        poster(){
            this.$api.post(`channels/${this.conversation.id}/posts`,{
                channel_id : this.conversation.id,
                message : this.message,
                member_id : this.$store.state.member.id}).then(response =>{
                    // console.log(response.data);
                    this.$bus.$emit('charger-message', response.data)
                })
            }
        }
}
</script>

<style>

</style>
