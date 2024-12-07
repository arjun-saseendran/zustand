import { create } from "zustand";

// Create coustom hook
export const useAppStore = create(()=>{
    return {
        count: 0,
        username: '',
        isActive: true,



    }
})