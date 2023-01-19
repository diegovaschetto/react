import { database } from "./firebase.init";
import { ref, push, remove, child, get, set } from "firebase/database";

export const addToPreferList = (userId: string, tvShowId: number) => {
    get(ref(database, "users/" + userId)).then((snapshot) => {
        if (snapshot.exists()) {
            if (!snapshot.val().default) {
                remove(child(ref(database, "users/" + userId), "default"));
            }
        }
    });
    push(ref(database, "users/" + userId), tvShowId);
};

export const removeToPreferlist = (userId: string, keyShow: string) => {
    remove(child(ref(database, "users/" + userId), keyShow)).then(() => {
        get(ref(database, "users/" + userId)).then((snapshot) => {
            if (!snapshot.exists()) {
                set(ref(database, "users/" + userId), {
                    default: 0,
                });
            }
        });
    });
};

export const addNowWatching = (userId: string, tvShowId: number) => {
    get(ref(database, "watching/" + userId)).then((snapshot) => {
        if (snapshot.exists()) {
            if (!snapshot.val().default) {
                remove(child(ref(database, "watching/" + userId), "default"));
            }
        }
    });
    push(ref(database, "watching/" + userId), tvShowId);
};

export const removeNowWatching = (userId: string, keyShow: string) => {
    remove(child(ref(database, "watching/" + userId), keyShow)).then(() => {
        get(ref(database, "watching/" + userId)).then((snapshot) => {
            if (!snapshot.exists()) {
                set(ref(database, "watching/" + userId), {
                    default: 0,
                });
            }
        });
    });
};

export const getDBWatchigData = async () => {
    let data: any = {};

    const user = localStorage.getItem("uid");

    await get(ref(database, "watching/" + user)).then((snapshot) => {
        if (snapshot.exists()) {
            data = snapshot.val();
        }
    });

    return data;
};
