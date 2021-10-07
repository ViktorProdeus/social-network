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
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },

    follow(userId: string) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data);
    },

    unfollow(userId: string) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data);
    }
}

export const authAPI = {
    get() {
        return instance.get('auth/me').then(response => response.data);
    },

    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post('auth/login', {email, password, rememberMe,})
            .then(response => response.data);
    },

    logout() {
        return instance.delete('auth/login')
            .then(response => response.data);
    },
}

export const profileAPI = {
    get(userId: string) {
        return instance.get(`profile/${userId}`).then(response => response.data);
    },

    getStatus(userId: string) {
        return instance.get(`profile/status/${userId}`).then(response => response.data);
    },

    updateStatus(status: string) {
        return instance.put('profile/status', {status}).then(response => response.data);
    },
}

