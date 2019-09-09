<template>
  <div>
      <section>
        <user-profile>
          <router-link slot="username" :to="`/user/${ask_detail.user}`">
          {{ask_detail.user}}</router-link>
          <template slot="time"> {{ 'Posted '+ ask_detail.time_ago}}</template>
        </user-profile>
      </section>
      <h2>{{ask_detail.title}}</h2>
      <section>
        <!-- 댓글 정보 -->
        <div v-html="ask_detail.content"></div>
      </section>
    </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';
export default {
  components:{
    UserProfile,
  },
  computed:{
    ask_detail(){
      return this.$store.state.ask_detail;
    }
  },
  created(){
    const id = this.$route.params.id;
    this.$store.dispatch('FETCH_ASK_DETAIL', id);
  },
}
</script>

<style scoped>
.user-container{
  display: flex;
  align-items: center;
  padding: 0.4rem;
}
.fa-user{
  font-size: 2.0rem;
  
}

.user-description{
  padding: 8px;
}
.time{
  font-size: 0.7rem
}
</style>