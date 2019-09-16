<template>
<div>
  <h3>데이터를 상위 컴포넌트에서 정의함(데이터 교환 X), props 방식과 달리 이미지, 버튼 등 다양하게 확장이 가능함.<br>
  심지어 스타일(CSS)까지 지정할 수 있다는 장점이 있음.
  </h3>
  <ul>
    <item>아이템 1</item>
    <item>아이템 2 <button>CLICK ME</button></item>
    <item><span>아이템 3</span> <img src="./assets/logo.png" hegiht="50px" width="50px"> </item>
    <item style="color:red; font-size:20px;">아이템 4</item>
  </ul>
</div>
</template>

<script>
import Item from './components/Item.vue'

export default {
  name: 'app',
  components: {
    Item,
  }
}
</script>
