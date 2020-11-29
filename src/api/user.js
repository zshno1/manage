import request from '@/utils/request'

export function getUserInfo(id){
    return request({
        url: '/user/item',
        method: 'get',
        params: { id }
    })
}

