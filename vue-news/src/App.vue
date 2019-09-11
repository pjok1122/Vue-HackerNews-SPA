<template>
<div id="app">
  <tool-bar></tool-bar>
  <transition name="page">
  <router-view></router-view>
  </transition>
  <spinner :loading="LoadingStatus"></spinner>
</div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';
import Spinner from './components/Spinner.vue';
import bus from './utils/bus.js';
export default {
  components:{
    ToolBar,
    Spinner,
  },
  data(){
    return {
      LoadingStatus : false,
    };
  },
  methods:{
    startSpinner(){
      this.LoadingStatus = true;
    },
    endSpinner(){
      this.LoadingStatus = false;
    }
  },
  created(){
    bus.$on('start:spinner', this.startSpinner);
    bus.$on('end:spinner', this.endSpinner);
  },
  beforeDestroy(){
    bus.$off('start:spinner');
    bus.$off('end:spinner');
  },

}


</script>

<style>
 body{
   padding: 0;
   margin: 0;
 }
 a {
   text-decoration:none;
   color:#34495e;
 }
 a:hover {
   color:#41b883;
   text-decoration: underline;
 }
 a.router-link-exact-active{
   text-decoration: underline;
 }
/* Transition */
 .page-enter-active, .page-leave-active {
  transition: opacity 0.3s;
}

/* 페이지를 떠날 때, 페이지를 들어갈 때? */
.page-enter, .page-leave-to /* .page-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
