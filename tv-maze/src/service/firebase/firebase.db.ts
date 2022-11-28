import { database } from "./firebase.init";
import { ref, push, remove, child } from "firebase/database";

export const addToPreferList = (userId: string , tvShowId : number) => {
    push(ref(database, 'users/' + userId), tvShowId);
}

export const removeToPreferlist = (userId: string , keyShow : string) => {
    remove(child(ref(database, "users/" + userId ) ,  keyShow))
}