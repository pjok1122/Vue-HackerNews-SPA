<template>
  <div>
    <user-profile>
      <div slot="username"> {{user.id}}</div>
      <div slot="time"> {{ 'Joined '+ user.created}}</div>
      <div slot="karma">{{user.karma}}</div>

    </user-profile>
    <!-- <p>username : {{user.id}}</p>
    <p>karma : {{user.karma}}</p>
    <p>created : {{user.created}}</p> -->
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';
export default {
  components:{
    UserProfile,
  },
  computed:{
    user(){
      return this.$store.state.user;
    }
  },
  created(){
    const username = this.$route.params.id;
    this.$store.dispatch('FETCH_USER', username)
  }
}
</script>

<style>

</style>