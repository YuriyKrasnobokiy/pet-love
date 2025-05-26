import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SimpleLoader from "../../components/Loader/SimpleLoader";
import { NewsList } from "../../components/NewsList/NewsList";
import PaginationControls from "../../components/PaginationControls/PaginationControls";
import { SearchField } from "../../components/SearchField/SearchField";
import {
  selectError,
  selectFilterTerm,
  selectIsLoading,
  selectNews,
  selectPage,
  selectPerPage,
  selectTotalPages,
} from "../../redux/news/newsSelectors";
import { fetchNews, setFilterTerm, setPage } from "../../redux/news/newsSlice";
import { NewsHeaderWrap, NewsTitle, NewsWrap } from "./News.styled";

const News = () => {
  const dispatch = useDispatch();
  const news = useSelector(selectNews);
  const filterWord = useSelector(selectFilterTerm);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const currentPage = useSelector(selectPage);
  const perPage = useSelector(selectPerPage);
  const totalPages = useSelector(selectTotalPages);

  useEffect(() => {
    dispatch(fetchNews({ page: currentPage, limit: perPage, filterWord }));
  }, [dispatch, currentPage, perPage, filterWord]);

  const handlePageChange = (newPage) => {
    dispatch(setPage(newPage));
    dispatch(fetchNews({ page: newPage, limit: perPage, filterWord }));
  };

  return isLoading ? (
    <SimpleLoader />
  ) : error ? (
    <p>Ooops...Please try to reload page</p>
  ) : (
    <NewsWrap className="container">
      <NewsHeaderWrap>
        <NewsTitle className="title">News</NewsTitle>
        <SearchField
          onFilterChange={(term) => dispatch(setFilterTerm(term))}
          onFetch={(params) => dispatch(fetchNews(params))}
          onPageChange={(page) => dispatch(setPage(page))}
          filterWord={filterWord}
          setFilterTerm={setFilterTerm}
          selectFilterTerm={selectFilterTerm}
        />
      </NewsHeaderWrap>
      <NewsList news={news} />
      {totalPages > 1 ? (
        <PaginationControls
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      ) : null}
    </NewsWrap>
  );
};

export default News;
