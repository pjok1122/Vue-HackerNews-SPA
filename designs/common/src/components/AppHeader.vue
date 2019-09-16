<template>
<header>
    <h1>{{title}}</h1>
</header>
</template>

<script>
export default {
    // props: ['title'] 를 validation 하는 방법은 아래와 같음.
    props:{
        title: String
    }
}
</script>

<style>

</style>