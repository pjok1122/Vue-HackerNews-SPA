<template>
<div>
  <li>
      <ul v-for="item in items"> {{item}}</ul>
  </li>
  <!-- <button v-on:click="renewEmit">renew items</button> -->
  <button @click="$emit('renew')">renew items</button>
</div>
</template>

<script>
export default {
    props:{
        items:{
            type : Array,
            required : true,
        },
    },
    // methods:{
    //     renewEmit(){
    //         return this.$emit('renew');
    //     }
    // }
}
</script>

<style>

</style>