<template>
    <list-item></list-item>
</template>

<script>
import ListItem from '../components/ListItem.vue';
import bus from '../utils/bus.js';

export default {
    components:{
        ListItem,
    },
    created(){
        bus.$emit('start:spinner');
    
        setTimeout(() => {
        this.$store.dispatch('FETCH_JOBS')
        .then(() => bus.$emit('end:spinner'))
        .catch((err) => console.log(err));
        },1000);
    }
}
</script>