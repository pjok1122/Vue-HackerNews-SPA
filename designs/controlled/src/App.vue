<template>
  <div>
    <h3>CheckBox같은 input을 컴포넌트로 만드는 방법.
    <h3>1. 상위 컴포넌트에서 v-model="checked"로 연결한다.</h3>
    <h3>2. 하위 컴포넌트에서는 value라는 props로 받고, input 이라는 이벤트를 발생시킨다. </h3>
    <h3>3. 이 방법을 사용하면 props 데이터를 변경하지 못하는 문제를, 마치 변경할 수 있는 것처럼(?) 해결 할 수 있음.</h3>
    </h3>
    <check-box v-model="checked"></check-box>
  </div>
</template>

<script>
import CheckBox from './components/CheckBox.vue'

export default {
  components: {
    CheckBox
  },
  data(){
    return {
      checked: false
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
