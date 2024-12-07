import { create } from "zustand";
import { produce } from "immer";

// Create coustom hook
export const useAppStore = create((set) => {
  return {
    count: 0,
    username: "",
    isActive: true,
    products: ["iPhone 13", "iPhone 13 Pro", "iPhone 13 Pro Max"],
    colors: [
      { id: 1, title: "rose", vote: 1 },
      { id: 2, title: "lotus", vote: 2 },
      { id: 3, title: "jasmin", vote: 4 },
    ],
    data: [],
    loading: false,
    error: null,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
    setName: (value) => set((state) => ({ username: state.username + value })),
    addProduct: (product) => {set(produce((state) => {state.products.push(product)}))},

    voteHandler: (id) => {
      set(produce((state)=>{
        let clickedVote = state.colors.find((color)=> id === color.id)
        clickedVote.vote += 1

      }))
    },
    fetchData: async () => {
        set(()=>({loading: true}))
        try {
            let response = await fetch("https://fakestoreapi.com/products");
            let fetchData = await response.json()
            set(()=>({data: fetchData, loading: false}))
        } catch (error) {
            set(()=>({error: error.message, loading: false}))
        }
    }
  };
});
