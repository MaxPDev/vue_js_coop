<template>
  <div>
    <Header />
    <div v-if="member" class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <!-- <img :src="avatar(member)" alt="avatar"> -->
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img
                :src="avatar(member)"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">{{ member.fullname}}</p>
            <p class="subtitle is-6">{{ member.email }}</p>
          </div>
        </div>

        <div class="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          iaculis mauris. <a>@bulmaio</a>. <a href="#">#css</a>
          <a href="#">#responsive</a>
          <br />
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// // demander pour mixin fin du cour
</script>


<script>

import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      member: false,
    };
  },

  mounted() {
    //TODO Doesn't work, à corriger
    // this.member = this.$store.getters.getMember(this.$route.params.idMember);
    this.member = this.getMember(this.$route.params.idMember);

  },
  computed: {

    ...mapGetters(['getMember']),

    created_at() {
      if (this.member) {
        let date = new Date(this.member.created_at);
        return (
          date.toLocaleDateString("fr-FR") +
          " à " +
          date.toLocaleDateString("fr-FR")
        );
      }
    },
  },
};
</script>