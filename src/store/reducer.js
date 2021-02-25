import * as actions from './actions'

const initState = []

export const reducer = (state = initState, action) => {
    switch (action.type) {
        case actions.ADD_RECORD : state.push(action.value);
        default : return state
    }
}