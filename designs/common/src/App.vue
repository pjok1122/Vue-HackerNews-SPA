<template>
  <div id="app">
    <app-header v-bind:title="title"></app-header>
    <app-content :items="items" @renew="renewItems"></app-content>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppContent from './components/AppContent.vue';


export default {
  name: 'app',
  components: {
    AppHeader,
    AppContent,
  },
  data(){
    return {
      title: 'Common Approach',
      items: [10,20,30],
    }
  },
  methods:{
    renewItems(){
      this.items = [20,30,40];
    }
  }
}
</script>
