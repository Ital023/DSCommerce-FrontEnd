import { requestBackend } from "../utils/requests";

export function findByMe() {
    return requestBackend({url: "/users/me"});
}
