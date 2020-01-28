import createDataContext from './createDataContext'

const costReducer = (state, action)=>{
switch(action.type){
    case 'add_cost':
        return [...state, {
            id: Math.floor(Math.random()*99999),
            title: action.payload.title,
            cost: action.payload.cost
        }
        ]; 
    case 'delete_cost':
        return state.filter((costPost)=> costPost.id !== action.payload )

    default:
        return state;
}
}

const addCost= (dispatch) => {
    return (title, price, callback) => {
    dispatch({type: 'add_cost', payload:{title, price}});
    callback();
};
};

const deleteCost = dispatch => {
    return (id) =>{
        dispatch({type: 'delete_cost', payload: id})
    }
}

export const {Context, Provider} = createDataContext(costReducer, {addCost, deleteCost},
    []);

