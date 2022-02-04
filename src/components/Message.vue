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
        <time>{{ message.created_at}}</time>
    </div>
    </div>
    </div>

</template>
<script>

import { mapGetters } from "vuex";

export default {
    // name: 'Message',
    props: ['message'],

    data() {
        return {
            member: false
        }
    },

    computed: {
        ...mapGetters(["getMember"]),

        dateMessage() {
            let date = new Date(this.message.created_at);
            return (
                "le " + date.toLocaleDateString("fr-FR") +
                " à " +
                date.toLocaleTimeString("fr-FR")
            );
        },
        // member() {
        //     //TODO user mutation
        //     // console.log(this.message);
            
        //     return this.$store.getters.getMembre(this.message.member_id);
        // }
    },

    mounted() {
        this.member = this.getMember(this.$route.params.idMember);
    }

}

</script>
