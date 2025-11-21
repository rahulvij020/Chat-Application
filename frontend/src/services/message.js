import axiosInstance from "../lib/axios.js";

export const getContacts = async (search = "") => {
    try {
        const params = search ? { search } : {};
        const response = await axiosInstance.get("/messages/contacts", { params });
        return response.data;
    } catch (error) {
        return { error: error.response?.data?.message || error.message };
    }
}

export const getChats = async (search = "") => {
    try {
        const params = search ? { search } : {};
        const response = await axiosInstance.get("/messages/chats", { params });
        return response.data;
    } catch (error) {
        return { error: error.response?.data?.message || error.message };
    }
}

export const sendMessage = async (data, id) => {
    try {
        const response = await axiosInstance.post(`/messages/send/${id}`, data);
        return response.data;
    } catch (error) {
        return { error: error.response?.data?.message || error.message };
    }
}

export const getMessages = async (id) => {
    try {
        const response = await axiosInstance.get(`/messages/${id}`);
        return response.data;
    } catch (error) {
        return {error: error.response?.data?.message || error.message };
    }
}