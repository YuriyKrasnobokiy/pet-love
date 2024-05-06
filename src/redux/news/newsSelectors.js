export const selectNews = (state) => state.newsStore.news;
export const selectIsLoading = (state) => state.newsStore.isLoading;
export const selectError = (state) => state.newsStore.error;
export const selectFilterTerm = (state) => state.newsStore.filterTerm;
export const selectPage = (state) => state.newsStore.page;
export const selectPerPage = (state) => state.newsStore.perPage;
export const selectTotalPages = (state) => state.newsStore.totalPages;
export const selectResults = (state) => state.newsStore.results;
