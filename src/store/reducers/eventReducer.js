const initialState = {
    event: "",
    loader: false,
    response: [],
};

const eventReducer = (state = initialState, action) => {
    switch (action.type) {
        case "checkEvent":
            return {
                ...state,
                event: action.payload.message,
                response: action.payload.response,
            };
        case "LOADER":
            return {
                ...state,
                loader: action.payload,
            };
        default:
            return state;
    }
};

export default eventReducer;
