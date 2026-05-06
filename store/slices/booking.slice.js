
export const createBookingSlice = (set) => ({
  activeBooking: null,
  bookings: [],

  setActiveBooking: (booking) => set({ activeBooking: booking }),

  setBookings: (bookings) => set({ bookings }),

  clearActiveBooking: () => set({ activeBooking: null }),
})