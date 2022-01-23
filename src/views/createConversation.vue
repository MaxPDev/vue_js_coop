<template>
    <section class="hero is-danger is-fullheight">
                <Header />
        <div class="hero-body">
            <div class="container">
                        <div class="columns is-centered">
                            <div class="column is-7-tablet is-6-desktop is-5-widescreen">
                                <form class="box" @submit.prevent="createConversation">
                                    <div class="field">
                                        <label class="label">Titre</label>
                                        <div class="control">
                                            <input class="input" v-model="conversation.label">
                                        </div>
                                    </div>
                                    <div class="field">
                                        <label class="label">Sujet</label>
                                        <div class="control">
                                            <textarea class="textarea" rows="2" v-model="conversation.topic"></textarea>
                                        </div>
                                    </div>
                                    <button class="button is-info is-outlined">Poster</button>
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
                console.log(response.data);
                this.successMessage = "Votre conversation a été crée avec success !"
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