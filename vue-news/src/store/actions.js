import{
    fetchNewsList, fetchJobsList, fetchAskList,
    fetchUserInfo, fetchAskDetail, fecthList,
} from '../api/index.js'

export default {
    FETCH_NEWS(context){
        fetchNewsList()
        .then(response=> {
            context.commit('SET_NEWS', response.data);
        }).catch(error => console.log(error));
    },
    FETCH_JOBS({commit}){
        fetchJobsList()
        .then(({ data }) => commit('SET_JOBS', data))
        .catch(error => console.log(error));
    },
    FETCH_ASK({commit}){
        fetchAskList()
        .then(({ data }) => commit('SET_ASK', data))
        .catch(error => console.log(error));
    },
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