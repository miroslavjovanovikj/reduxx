const initialState={
  username:"Miroslav"
}

const UserReducer = (state=initialState, action)=>{
  switch(action.type){
    case "USER_REDUCER":
    return{
      ...state
    }
    default:return state;
  }
}
export default UserReducer;
