import bus from '../utils/bus.js';

export default {
    // 컴포넌트가 공유할 로직 & 옵션
    mounted(){
        bus.$emit('end:spinner');
    },
}