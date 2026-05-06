import useStore from "./index"
import {useShallow} from 'zustand/react/shallow'

export const useAuth = () =>
  useStore(
    useShallow((state) => ({
    user: state.user,
    isAuthenticated: state.isAuthenticated,
    setUser: state.setUser,
    logout: state.logout,
  }))
  )

export const useCars = () =>
  useStore((state) => ({
    cars: state.cars,
    selectedCar: state.selectedCar,
    setCars: state.setCars,
    setSelectedCar: state.setSelectedCar,
  }))

export const useCarFilters = () =>
  useStore((state) => ({
    filters: state.filters,
    setFilters: state.setFilters,
    resetFilters: state.resetFilters,
  }))

export const useBooking = () =>
  useStore((state) => ({
    activeBooking: state.activeBooking,
    bookings: state.bookings,
    setActiveBooking: state.setActiveBooking,
    setBookings: state.setBookings,
    clearActiveBooking: state.clearActiveBooking,
  }))