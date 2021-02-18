export default function Reduser(state,action) {
    switch(action.type){
        case 'ADD_TO_CART': {
            return {
                cart: [
                    ...state.cart,
                    {
                        product: action.productsInfo,
                        amount: action.amount
                    }
                
                ]
            }
        } case 'REMOVE_FROM_CART': {    
            let index = action.index;
            let clone = { ...state };
            delete clone.cart[index];
            let clone_Without_Erorrs = clone.cart.filter((result)=>{ return result !== undefined })
            let final_clone = { cart: clone_Without_Erorrs };
            return final_clone;
        }
        case 'RESET': {
            let new_state = {...state};
            new_state.cart = [];
            return new_state;
        }
        default:
            return state;
    }
}
