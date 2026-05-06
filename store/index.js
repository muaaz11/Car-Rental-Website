import {devtools, persist} from 'zustand/middleware'
import {create} from 'zustand'
import { createAuthSlice } from './slices/auth.slice'
import { createBookingSlice } from './slices/booking.slice'
import { createCarSlice } from './slices/car.slice'
const useStore = create()(
    devtools(
        persist(
            (...args) => ({
                ...createAuthSlice(...args),
                ...createCarSlice(...args),
                ...createBookingSlice(...args)
            }),

            {
                name: "car-rental-store",

                partialize: (state) => ({
                    user: state.user,
                    isAuthenticated: state.isAuthenticated
                }),
            },
        ),

        {name: "carRentalStore"}
    )
)

export default useStore
