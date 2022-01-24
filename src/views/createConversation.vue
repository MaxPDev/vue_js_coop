<template>
    <section class="hero is-fullheight">
                <Header />
        <div class="hero-body">
            <div class="container">
                        <div class="columns is-centered">
                            <div class="column is-7-tablet is-6-desktop is-5-widescreen">
                                <h4 class="title is-4 has-text-centered">Nouvelle conversations</h4>
                                <form class="box" @submit.prevent="createConversation">
                                    <div class="field">
                                        <label class="label">Sujet</label>
                                        <div class="control">
                                            <input class="input" v-model="conversation.topic"/>
                                        </div>
                                    </div>
                                     <div class="field">
                                        <label class="label">Label</label>
                                        <div class="control">
                                            <input class="input" v-model="conversation.label">
                                        </div>
                                    </div>
                                    <div class="buttons">
                                        <button class="button is-info is-outlined">Poster</button>
                                        <router-link class="button is-outlined" to="/">Annuler</router-link>
                                    </div>
                                </form>
                                <h5 class="title is-5 ">{{successMessage}}</h5>
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
      conversation:{
      label : "",
      topic : "",
      },
       successMessage : " ",
    };
  },
     methods : {
        createConversation(){
            this.$api
            .post("channels", this.conversation)
            .then((response)=>{
                console.log(response.data.id);
               this.$router.push({name:'Conversation',params:{id:response.data.id}});
            })
            .catch((error)=>{
                alert(error.response.data.message);
            });
        },
    }
};
</script>
<style scoped>

</style>