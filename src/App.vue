<template>
      <router-view/>  
</template>
<script>
export default{
  name : "app",
  mounted(){
    this.$api.get('ping').then();
    if(!this.$store.state.token){
      this.$router.push('login');
    }
  }
}
</script>
