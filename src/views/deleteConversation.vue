<template>
   <div>
        <Header/>
       <b>{{responseMessage}}</b>
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
           responseMessage : ""
       }
    },
    mounted(){
       this.$api.delete(`channels/${this.$route.params.id}`).then(response => {
          this.responseMessage = response.data.message;
       });
    }
}
</script>

<style>

</style>