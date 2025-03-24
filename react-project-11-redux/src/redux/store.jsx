import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice.jsx'

export const store = configureStore({
    reducer: {
        counter : counterReducer
    },
})


// STEPS
// 1) Create store.jsx
// 2) Wrap app component under a provider
// 3) Create slice
// 4) Register reducer in store
// 5) 