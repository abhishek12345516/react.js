import { ADD_ITEM, REMOVE_ITEM } from "../Action";

const initialState = {
    items:[]
}
function cartReducer(state=initialState, action) {
        switch(action.type) {
            case ADD_ITEM:
                return{...state, items: [...state.items, action.payload]}
            case REMOVE_ITEM:
               return{...state, items: state.items.filter(data => data.id != action.payload)}
            // case REMOVE_ITEM:
            //     return{...state, items: state.items.filter(item => item.id !== action.payload)}
            default:
                return state;
        }
}

export default cartReducer;