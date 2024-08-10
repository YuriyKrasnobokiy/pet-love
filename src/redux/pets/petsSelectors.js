export const selectPets = (state) => state.petsStore.pets;
export const selectIsLoading = (state) => state.petsStore.isLoading;
export const selectError = (state) => state.petsStore.error;
export const selectPage = (state) => state.petsStore.page;
export const selectPerPage = (state) => state.petsStore.perPage;
export const selectTotalPages = (state) => state.petsStore.totalPages;
