import { create } from "zustand";

export const useAuthStore = create((set) => ({
    authUser: {name:"Yash",_id:123,age:25},
}))