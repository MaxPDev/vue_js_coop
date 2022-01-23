<template>
   <div>
      <Header />
      <section class="section">
         <div v-if="conversation">
            <p class="title is-5">{{conversation.topic}}</p>
            <p class="subtitle is-6">{{conversation.label}}</p>
            <router-link class="button button is-dark" :to="{name : 'deleteConversation', params :{id:conversation.id}}"> delete conversation</router-link>
         </div>
      </section>
   </div>
</template>
<script>
import Header from '../components/Header.vue';
export default {
   components : {
      Header,
   },
    data(){
       return {
          conversation : false
       }
    },
    mounted(){
       this.$api.get(`channels/${this.$route.params.id}`).then(response => {
          this.conversation = response.data;
       });
    }
}
</script>

<style>

</style>