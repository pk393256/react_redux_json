
import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { todosDelete } from '../Redux/action';
import { todosToggle } from '../Redux/action';
export const TodoList=()=>{
    const [data,setData]=React.useState([]);
    const dispatch=useDispatch();
    const getData=()=>{
        fetch('http://localhost:8080/store')
        .then((res)=>res.json())
        .then((res)=>setData(res))
    }
    React.useEffect(()=>getData(),[data])
// console.log(data)
    return(
        <>
            {data.map((e)=>(
                <div key={e.id}>
                     <span >{e.title}--</span>
                     <span>{e.status?"complete":"incomplete"}</span>
                     <span><button onClick={()=>dispatch(todosToggle(e.id))}>Toggle</button></span>
                     <span><button onClick={()=>dispatch(todosDelete(e.id))}>Remove</button></span>
                </div>
            ))}
        </>
    )


}