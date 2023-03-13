export const INITIAL_STATE={
    loading:false,
    posts:{},
    error:false
}

export const postReducer=(state, action)=>{
    switch(action.type){
        case ("FETCH_START") :
        return {
            loading:true,
            posts:{},
            error:false
        }
        case ("FETCH_SUCCESS") :
        return {
            loading:false,
            posts:action.payload,
            error:false
        }
        case ("FETCH_ERROR")  :  
        return {
            loading : false,
            posts : {},
            error:true
        }
        default: return INITIAL_STATE;
    }
}

export default postReducer;