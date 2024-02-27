let initialState = {
    contactList: [],
    searchKeyword: ''
}

function reducer(state=initialState, action) {
    const {type, payload} = action
    switch(type) {
        case "ADD_CONTACT":
            return {...state, contactList:[...state.contactList,{name: payload.name, phoneNumber: payload.phoneNumber}]}
        case "SEARCH_NAME":
            return {...state, searchKeyword:payload.keyword}
        default:
            return {...state};
    }
}

export default reducer