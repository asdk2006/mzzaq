export default (states=0,action)=>{
    switch (action.type){
        case 'SET':
        return action.payload;
        default:
        return states;
    }
   
}