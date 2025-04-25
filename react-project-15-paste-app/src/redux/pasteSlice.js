import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const initialState = {
    pastes : []
}

try {
    const pastesFromStorage = localStorage.getItem("pastes");
    if (pastesFromStorage) {
        initialState.pastes = JSON.parse(pastesFromStorage);
    }
} catch (error) {
    console.error("Failed to parse pastes from localStorage:", error);
    localStorage.removeItem("pastes");
}

export const pasteSlice = createSlice({
    name: 'paste',
    initialState,
    reducers: {
    addToPastes: (state, action) => {
        const paste = action.payload;
        state.pastes.push(paste);
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        JSON.stringify(state.pastes);
        toast ("Paste created successfully!");
        
    },
    updateToPastes: (state, action) => {
        const paste= action.payload;
        const index = action.pastes.findIndex((item)=>{
            item._id === paste._id;
        })
        if(index>=0){
            state.pastes[index]=paste;

            localStorage.setItem("pastes", JSON.stringify(state.pastes));
            toast.success("Paste updated");
        }
    },
    resetAllPastes: (state, action) => {
        state.pastes=[];
        localStorage.removeItem("pastes");
    },
    removeFromPastes : (state, action) => {
        const pasteId = action.payload;

        console.log(pasteId);
        const index = state.pastes.findIndex((item)=> item._id === pasteId)

        if(index>=0){
            state.pastes.splice(index, 1);
            localStorage.setItem("pastes", JSON.stringify(state.pastes));
            toast.success("Paste deleted");
        }
    },
},
})


export const { addToPastes, updateToPastes, resetAllPastes, removeFromPastes } = pasteSlice.actions

export default pasteSlice.reducer