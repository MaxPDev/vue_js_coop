<template>

    <div class="card">
    <div class="card-content">
    <div class="media">
        <div class="media-left">
        <figure class="image is-48x48">
            <img :src="avatar(member)">
        </figure>
        </div>
        <div class="media-content">
        <p class="title is-4"> {{ member.fullname }}</p>
        <p class="subtitle is-6"> {{ member.email }}</p>
        </div>
    </div>

    <div class="content">
        {{ message.message }} 
        <!--//todo: mettre des tags ? -->
        <!-- <a>@bulmaio</a>. -->
        <!-- <a href="#">#css</a> <a href="#">#responsive</a> -->
        <br>
        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
    </div>
    </div>

</template>
<script>

export default {
    // name: 'Message',
    props: ['message'],

    computed: {
        dateMessage() {
            let date = new Date(this.message.created_at);
            return (
                "le " + date.toLocaleDateString("fr-FR") +
                " à " +
                date.toLocaleTimeString("fr-FR")
            );
        },
        member() {
            //TODO user mutation
            // console.log(this.message);
            
            return this.$store.getters.getMembre(this.message.member_id);
        }
    }

}

</script>
