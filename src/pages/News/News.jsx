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
import { fetchNews } from "../../redux/news/newsSlice";
import Loader from "../../components/Loader/Loader";
import { NwCard } from "../../components/NwCard/NwCard";
import { NewsList, NewsTitle, NewsWrap } from "./News.styled";
import { SearchField } from "../../components/SearchField/SearchField";
import PaginationControls from "../../components/PaginationControls/PaginationControls";

const News = () => {
  const dispatch = useDispatch();
  const news = useSelector(selectNews);
  const filterWord = useSelector(selectFilterTerm);
  const filteredNews = news.filter((nw) =>
    nw.title.toLowerCase().includes(filterWord.toLowerCase()),
  );
  // console.log("news: ", news);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const currentPage = useSelector(selectPage);
  const perPage = useSelector(selectPerPage);
  const totalPages = useSelector(selectTotalPages);

  useEffect(() => {
    dispatch(fetchNews({ page: currentPage, limit: perPage }));
  }, [dispatch, currentPage, perPage]);

  const handlePageChange = (newPage) => {
    dispatch(fetchNews({ page: newPage, limit: perPage }));
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <NewsWrap className="container">
          <NewsTitle className="title">News</NewsTitle>
          <SearchField />
          <NewsList>
            {filteredNews.map((nw) => (
              <NwCard nw={nw} key={nw._id} />
            ))}
          </NewsList>
          <PaginationControls
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </NewsWrap>
      )}
    </>
  );
};

export default News;
