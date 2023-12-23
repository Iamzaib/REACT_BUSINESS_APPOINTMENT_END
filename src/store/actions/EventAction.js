import { RepositoryFactory } from "../../repository/RepositoryFactory";
var event = RepositoryFactory.get("event");
export const checkEvent = (payload, onSuccess) => async (dispatch) => {
    console.log(payload, "payload");
    await dispatch(Loader(true));
    try {
        const { data } = await event.checkEvent(payload);
        if (data != undefined) {
            const finalData = [
                {
                    message: "",
                    chat_history: data[2],
                    final_chat_history: data[1],
                },
            ];
            dispatch({
                type: "checkEvent",
                payload: { message: data[0], response: finalData },
            });
            dispatch(Loader(false));
            onSuccess();
        } else {
            alert("Sorry Response Failed!");
            dispatch(Loader(false));
        }
    } catch (error) {
        console.error("Error logging out:", error);
        dispatch(Loader(false));
    }
};
const Loader = (data) => async (dispatch) => {
    dispatch({
        type: "LOADER",
        payload: data,
    });
};
