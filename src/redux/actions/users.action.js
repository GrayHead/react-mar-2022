// {type: "LOAD_USERS", payload: value}
import {FILTER_USERS, LOAD_USERS} from "../actionTypes/action.types";

const loadUsers = (payload) => {
    return {type: LOAD_USERS, payload: payload};
}


const filterUsers = (payload) => {
    return {type: FILTER_USERS, payload}

}

export {loadUsers, filterUsers}
