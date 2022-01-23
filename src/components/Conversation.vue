<template>
      <div>
      <router-link :to="{name : 'Conversation', params :{id:conversation.id}}">
            <p class="title is-4">{{conversation.topic}}</p>
            <p class="title is-6">{{conversation.label}}</p>
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