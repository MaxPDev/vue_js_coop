<template>
    <h1>membre</h1>
</template>

<script>
// // demander pour mixin fin du cour
</script>


<script>

export default {
    data() {
        return {
            member: false,
        };
    },

    mounted() {
        this.member = this.$store.getters.getMembre(this.$route.params.idMembre);
        console.warn("Member.vue :" + this.member);
    },
    computed: {
        created_at() {
            if (this.member) {
                let date = new Date(this.member.created_at);
                return (
                    date.toLocaleDateString("fr-FR") + " à " + date .
                    toLocaleDateString("fr-FR")
                );
            }
        }
    }
}

</script>