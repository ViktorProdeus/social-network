import axios from "axios";

const baseURL = 'https://social-network.samuraijs.com/api/1.0/';

const instance = axios.create({
    withCredentials: true,
    baseURL,
    headers: {
        "API-KEY": "e12dcb15-1200-4ce1-bb28-bb99ac0ccb98"
    }
});

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 5) {
        return instance.get(baseURL + `users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },

    follow(userId: string) {
        return instance.post(baseURL + `follow/${userId}`)
            .then(response => response.data);
    },

    unfollow(userId: string) {
        return instance.delete(baseURL + `follow/${userId}`)
            .then(response => response.data);
    }
}

export const authAPI = {
    get() {
        return instance.get(baseURL + `auth/me`).then(response => response.data);
    }
}

export const profileAPI = {
    get(userId: string) {
        return instance.get(baseURL + `profile/${userId}`).then(response => response.data);
    }
}

