import Repository from "./Repository";
const CHECKEVENT = "/get-response";
export default {
    checkEvent(detail) {
        console.log(detail,'detail')
        return Repository.post(`${CHECKEVENT}`,detail);
    },
};
