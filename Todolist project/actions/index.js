export const addtodo=(data)=>{ 
    return{
        type:'ADD_TO_DO',
        payload:{
            id:new data(),
            data:data
        }
    }
}

export const deletetodo=()=>{ 
    return{
        type:'DELETE_TO_DO'
    }
}
export const removetodo=()=>{ 
    return{
        type:'REMOVE_TO_DO'
    }
}