

const defaultFilters = {
  category: "",
  minPrice: 0,
  maxPrice: 0,
  startDate: null,
  endDate: null,
}

export const createCarSlice = (set) => ({
  cars: [],
  selectedCar: null,
  filters: defaultFilters,

  setCars: (cars) => set({ cars }),

  setSelectedCar: (car) => set({ selectedCar: car }),

  setFilters: (filters) =>
    set((state) => ({ filters: { ...state.filters, ...filters } })),

  resetFilters: () => set({ filters: defaultFilters }),
})