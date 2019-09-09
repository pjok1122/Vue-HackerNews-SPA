import{
    fetchUserInfo, fetchAskDetail, fecthList,
} from '../api/index.js'

export default {
    FETCH_USER({commit}, username){
        fetchUserInfo(username)
        .then(({ data }) => commit('SET_USER', data))
        .catch(error => console.log(error));
    },
    FETCH_ASK_DETAIL({commit}, id){
        fetchAskDetail(id)
        .then(({data}) => commit('SET_ASK_DETAIL', data))
        .catch(error => console.log(error));
    },
    FETCH_LIST({commit}, pageName){
        fecthList(pageName)
        .then(({data}) => commit('SET_LIST',data))
        .catch(error => console.log(error));
    },
}