import { GET_ALL_LATEST_TODOS_SUCCESS, GET_ALL_LATEST_TODOS_FAILURE, GET_ALL_LATEST_TODOS_LOADING,TODOS_DELETE,TODOS_TOGGLE} from "./action"
// import React from 'react';
export const reducer=(store,action)=>{
    // const [currentStatus,setCurrentStatus]=React.useState(false);
    switch(action.type){
        case GET_ALL_LATEST_TODOS_LOADING:
            return {todos:[],isLoading:true,isError:false};
        case GET_ALL_LATEST_TODOS_FAILURE:
            return {todos:[],isLoading:false,isError:true};
        case GET_ALL_LATEST_TODOS_SUCCESS:
            return {todos:[...action.payload],isLoading:false,isError:false};
        case TODOS_DELETE:
            // fetch('sfakfsff')
            fetch(`http://localhost:8080/store/${action.payload}`,{
                method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
            })
            .then((res)=>res.json())
            .then((res)=>{return { todos:[res],isLoading:false,isError:false }})
             
        case TODOS_TOGGLE:
            let adata;
            const abc=async ()=>{
               let res=await fetch(`http://localhost:8080/store/${action.payload}`);
               let data=await res.json();
               adata=data
               console.log('adata',adata)
               console.log('data',data)
               fetch(`http://localhost:8080/store/${action.payload}`,{
                method: 'PATCH',
                 body:JSON.stringify({status:!data.status}),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
            })
            .then((res)=>res.json())
            .then((res)=>{return { todos:[res],isLoading:false,isError:false }})
            //    console.log(!data.status)
            //    return 'zdjfieuhf'
            }
            abc()
            console.log('adata',adata)
            // let rtrn=abc()
            // console.log('rtrn',rtrn)
            
        default:
            return store;
    }
}