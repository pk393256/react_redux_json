import React from 'react';
import { useDispatch } from 'react-redux';
import { getAllLatestTodosSuccess,getAllLatestTodosLoading,getAllLatestTodosFailure } from '../Redux/action';

export const TodoInput=()=>{
    const [inputValue,setInputValue]=React.useState('');
    const dispatch=useDispatch();
    const fetchData=()=>{
        dispatch(getAllLatestTodosLoading())
        fetch('http://localhost:8080/store')
        .then((res)=>res.json())
        .then((res)=>dispatch(getAllLatestTodosSuccess(res)))
        .catch((err)=>dispatch(getAllLatestTodosFailure()))
    }
    const handler=()=>{
        
        let payload={
            "title":inputValue,
            "status":false
        }
        fetch('http://localhost:8080/store',{
            method:'POST',
            body:JSON.stringify(payload),
            headers:{
                "Content-type": "application/json; charset=UTF-8"
            },
        })
        .then((res)=>res.json())
        .then((res)=>fetchData())



    }
    return (
        <div>
            <input type="text" placeholder="addTodo" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
            <button onClick={handler}>ADD TODO</button>
        </div>
    )

}