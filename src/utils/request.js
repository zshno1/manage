import axios from 'axios'

const service = axios.create({
    baseURL:'http://127.0.0.1:3000/',
    timeout: 1000,
    // headers:['']
})

// service.interceptors.request.use(
//     config => {
//         if(store.getters.token){
//             config.header['X-Token'] = getToken()
//         }
//         return config
//     },
//     error => {
//         console.log(error)
//         return Promise.reject(error)
//     }
// )

service.interceptors.response.use(
    response => {
        const res = response.data
        console.log(res)
        // if(response.code !== 20000) {
        //     // if(res.code === 50008 || res.code === 50012 || res.code === 50014){

        //     // }
        //     return Promise.reject(new Error("请求出错了"))
        // }else{
            return res
        // }
    },
    error => {
        return Promise.reject(error)
    }
)

export default service