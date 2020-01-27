import createDataContext from './createDataContext'

const groceryReducer = (state, action)=>{
switch(action.type){
    case 'add_grocery':
        return [...state, {
            id: Math.floor(Math.random()*99999),
            title: action.payload.title,
            quantity: action.payload.quantity,
            price: action.payload.price
        }
        ]; 
    case 'delete_grocery':
        return state.filter((groceryPost)=> groceryPost.id !== action.payload )

    default:
        return state;
}
}

const addGrocery = (dispatch) => {
    return (title, quantity, price, callback) => {
    dispatch({type: 'add_grocery', payload:{title, quantity, price}});
    callback();
};
};

const deleteGrocery = dispatch => {
    return (id) =>{
        dispatch({type: 'delete_grocery', payload: id})
    }
}

export const {Context, Provider} = createDataContext(groceryReducer, {addGrocery, deleteGrocery},
    []);



