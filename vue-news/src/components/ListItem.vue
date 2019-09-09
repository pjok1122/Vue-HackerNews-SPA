<template>
<div>
    <ul class="item-list">
        <li class="item" v-for="item in FetchedItem">
        <!-- Points 영역 -->
        <div class="points">
            {{item.points || 0}}
        </div>
        <!-- 기타 영역 -->
        <div>
            <template v-if="item.domain">
            <p class="item-title">
                <a :href="item.url">{{ item.title }}</a>
            </p>
            </template>
            <template v-else>
            <p class="item-title">
                <router-link v-bind:to="`item/${item.id}`">{{ item.title }}</router-link>
            </p>
            </template>            
        <small class="link-text">
        {{item.time_ago}} by
        <router-link v-if="item.user" class="link-text" v-bind:to="`/user/${item.user}`">{{item.user}}</router-link>
        <a v-else
        class="link-text" :href="item.url">{{item.domain}}</a>
        </small>
        </div>
        </li>
    </ul>
</div>
</template>

<script>
export default {
    computed:{
        FetchedItem(){
            name = this.$route.name;
            if(name === 'news')
                return this.$store.state.news;
            else if(name ==='jobs')
                return this.$store.state.jobs;
            else if(name === 'ask')
                return this.$store.state.ask;
            // return this.$store.state.list;
        }
    },
}
</script>

<style scoped>
.item-list{
    margin:0;
    padding:0;
    list-style: none;
}
.points{
    width: 80px;
    display: flex;
    height: 60px;
    align-items: center;
    justify-content: center;
    color:#41b883;
}
.item-title{
    margin:0;
}
.item{
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
}
.link-text{
    color:#828282;
}
</style>