import { incCount,decCount } from "./selectors/changeState";
const initialState = new Map();
const countReducer = (state = initialState, action) => {
    switch (action.type)
    {
        case 'INCREMENT':
            return incCount(state,action.Id);
        case 'DECREMENT':
            return decCount(state,action.Id);
        default: return state;
    }
}
export default countReducer