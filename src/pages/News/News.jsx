import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectError,
  selectFilterTerm,
  selectIsLoading,
  selectNews,
  selectPage,
  selectPerPage,
  selectTotalPages,
} from "../../redux/news/newsSelectors";
import { fetchNews, setPage } from "../../redux/news/newsSlice";
import Loader from "../../components/Loader/Loader";
import { NwCard } from "../../components/NwCard/NwCard";
import { NewsHeaderWrap, NewsList, NewsTitle, NewsWrap } from "./News.styled";
import { SearchField } from "../../components/SearchField/SearchField";
import PaginationControls from "../../components/PaginationControls/PaginationControls";

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

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <NewsWrap className="container">
          <NewsHeaderWrap>
            <NewsTitle className="title">News</NewsTitle>
            <SearchField />
          </NewsHeaderWrap>
          <NewsList>
            {news.map((nw) => (
              <NwCard nw={nw} key={nw._id} />
            ))}
          </NewsList>
          {totalPages > 1 ? (
            <PaginationControls
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          ) : null}
        </NewsWrap>
      )}
    </>
  );
};

export default News;
