import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectError,
  selectFilterTerm,
  selectIsLoading,
  selectNews,
} from "../../redux/news/newsSelectors";
import { fetchNews } from "../../redux/news/newsSlice";
import Loader from "../../components/Loader/Loader";
import { NwCard } from "../../components/NwCard/NwCard";
import { NewsList, NewsTitle, NewsWrap } from "./News.styled";
import { SearchField } from "../../components/SearchField/SearchField";

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

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

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
        </NewsWrap>
      )}
    </>
  );
};

export default News;
