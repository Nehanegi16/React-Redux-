const initialData={
    list:[]
}
const Todoreducers=(state=initialData,action)=>{
      switch(action.type){
        case"ADD_TO_DO":
        const{id,data}=action.payload
        return{
            ...state,
            list:[
                ...state.list,
                {
                    id:id,
                    data:data
                }
            ]
        }
        default:return state
      }                 
}
export default Todoreducers