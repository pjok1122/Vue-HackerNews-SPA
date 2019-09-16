import{
    fetchUserInfo, fetchAskDetail, fecthList,
} from '../api/index.js'

export default {
    // Promise
    // FETCH_LIST({commit}, pageName){
    //     return fecthList(pageName)
    //     .then((response) =>{
    //         commit('SET_LIST',response.data);
    //         return response;
    //     })
    //     .catch(error => console.log(error));
    // },

    // 1. async를 함수 앞에 붙이고, Promise를 리턴하는 함수 앞에 await를 붙이면 된다.
    // 2. async는 무엇을 리턴하던 간에 Promise를 리턴한다.
    // 3. 에러처리는 try-catch를 이용하는데, api 단에서 처리를 하는 것이 보기에 더 깔끔함.
    async FETCH_LIST({commit}, pageName){
        const res = await fecthList(pageName);
        commit('SET_LIST', res.data);
        return res;
    },
    async FETCH_USER({commit}, username){
        const res = await fetchUserInfo(username);
        commit('SET_USER', res.data);
        return res;
    },
    async FETCH_ASK_DETAIL({commit}, id){
        const res = await fetchAskDetail(id);
        commit('SET_ASK_DETAIL', res.data);
        return res;
    },
}