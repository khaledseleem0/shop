import {createStore} from 'redux';
import Reduser from './reduser';
const initalState  = {
    cart:[]
}
const store  = createStore(Reduser,initalState); 
export default store;