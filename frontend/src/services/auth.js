import axiosInstance from "../lib/axios.js"

export const login = async (data) => {
    try {
        const response = await axiosInstance.post("/auth/login", data);
        return response.data;
    } catch (error) {
        return { error: error.response?.data?.message || error.message };
    }
}

export const signup = async (data) => {
    try {
        const response = await axiosInstance.post("/auth/signup", data);
        return response.data;
    } catch (error) {
        return { error: error.response?.data?.message || error.message };
    }
}

export const logout = async () => {
    try {
        const response = await axiosInstance.post("/auth/logout");
        return response.data;
    } catch (error) {
        return { error: error.response?.data?.message || error.message };
    }
}

export const authCheck = async () => {
    try {
        const response = await axiosInstance.get("/auth/profile");
        return response.data;
    } catch (error) {
        return {error: error.response?.data?.message || error.message };
    }
}

export const updateProfile = async (data, id) => {
    try {
        const response = await axiosInstance.put(`/auth/profile/${id}`, data);
        return response.data;
    } catch (error) {
        return {error: error.response?.data?.message || error.message };
    }
}