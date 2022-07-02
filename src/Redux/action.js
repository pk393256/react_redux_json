export const GET_ALL_LATEST_TODOS_SUCCESS='GET_ALL_LATEST_TODOS_SUCCESS';
export const GET_ALL_LATEST_TODOS_FAILURE='GET_ALL_LATEST_TODOS_FAILURE';
export const GET_ALL_LATEST_TODOS_LOADING='GET_ALL_LATEST_TODOS_LOADING';
export const TODOS_DELETE='TODOS_DELETE';
export const TODOS_TOGGLE='TODOS_TOGGLE';

export const getAllLatestTodosSuccess=(payload)=>({
    type:GET_ALL_LATEST_TODOS_SUCCESS,
    payload:payload

});
export const getAllLatestTodosFailure=()=>({
        type:GET_ALL_LATEST_TODOS_FAILURE
});
export const getAllLatestTodosLoading=()=>({
        type:GET_ALL_LATEST_TODOS_LOADING
});
export const todosToggle=(payload)=>({
        type:TODOS_TOGGLE,
        payload:payload
})
export const todosDelete=(payload)=>({
        type:TODOS_DELETE,
        payload:payload
})