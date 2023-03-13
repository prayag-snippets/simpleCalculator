import { useReducer } from "react";
import { postReducer, INITIAL_STATE } from "./postReducer";
const Post = () =>{
    const [state, dispatch] = useReducer(postReducer, INITIAL_STATE);
    const handleFetch=()=>{
        console.log("Inside Handle Fetch Function");
        console.log(state);
        dispatch({type:"FETCH_START"});
        fetch("https://jsonplaceholder.typicode.com/posts/1")
            .then(res=>res.json()
            .then(data=>{
                //todo something with data
                dispatch({type:"FETCH_SUCCESS", payload:data});
            }))
            .catch(err=>{
                dispatch({type:"FETCH_ERROR"});
                // todo something with error
            })
    }
    const handleClearClick = () =>{
        console.log("inside clear function");
        dispatch({type:"default"});
    }

    return <>
        <button onClick={handleFetch}>
            {state.loading ? "Loading...." : "Fetch data"}
        </button>
        <p>{state.posts?.title}</p>
        <span>{state.error && "Something went wrong.......!!!!!!!!!!"}</span>
        <button onClick={handleClearClick}>Clear Screen</button>
    </>
}

export default Post;