import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectError,
  selectIsLoading,
  selectNews,
} from "../../redux/news/newsSelectors";
import { fetchNews } from "../../redux/news/newsSlice";
import Loader from "../../components/Loader/Loader";
import { NwCard } from "../../components/NwCard/NwCard";
import { NewsList } from "./News.styled";

const News = () => {
  const dispatch = useDispatch();
  const news = useSelector(selectNews);
  console.log("news: ", news);
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
        <div className="container">
          <h2 className="title">News</h2>
          <NewsList>
            {news.map((nw) => (
              <NwCard nw={nw} key={nw._id} />
            ))}
          </NewsList>
        </div>
      )}
    </>
  );
};

export default News;
