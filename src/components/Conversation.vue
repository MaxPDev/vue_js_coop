<template>
      <div>
      <router-link :to="{name : 'Conversation', params :{id: conversation.id}}">
            <p><b>{{conversation.topic}}</b></p>
            <p>{{conversation.label}}</p>
            </router-link>
      </div>                                                            
</template>
<script>
export default {
props : ["conversation"]
}
</script>

<style>

</style>

