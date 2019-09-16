
<script>
import axios from 'axios';

export default {
    props: ['url'],
    data(){
        return{
            response : null,
            loading : true,
        }
    },
    created() {
        axios.get(this.url)
        .then(response => {
            this.response = response.data;
            this.loading = false;
        })
        .catch(error => {
            alert('[ERROR] fetching the data', error);
            console.log(error);
        });
    },
//     render(){
//         //하위 컴포넌트에서 들고 있던 내용 response, loading을 상위 컴포넌트에서 사용할 수 있게 해줌.
//         return this.$scopedSlots.defalut({
//             response: this.response,
//             loading : this.loading,
//         });
//     }
    render() {
        return this.$scopedSlots.default({
            response: this.response,
            loading: this.loading,
        });
    },
}
</script>