import router from './router'
import store from './store'

router.beforeEach( async(to, from, next) => {
    // console.log(11)
    const hasRoles = store.getters.userInfo;
    if(hasRoles){
        next()
    }else{
        const userData = await store.dispatch('getUser'); 
        console.log(userData)
        next()
    }
   
    
    
})