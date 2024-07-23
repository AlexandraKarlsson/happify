const initialState = {
    list: [],
    isEditing: false,
    itemEditing: null
}

export function inputReducer(state = initialState, action){
    switch (action.type) {
        case 'ADD_ITEM':
            return {...state, list: state.list.concat(action.payload)}
        case 'REMOVE_ITEM':
            return {...state,
                list: state.list.filter(item => item.id !== action.payload),
                isEditing: false,
                itemEditing: null}
        case 'EDIT_ITEM':
            return {...state, isEditing: true, itemEditing: action.payload}
        case 'SET_ITEM':
            return {...state, list: state.list.map((item) => {
                    return item.id === action.payload.id ? action.payload : item
                }), isEditing: false, itemEditing: null}
        default:
            return state
    }
}

export function textListReducer(state = [], action) {

}