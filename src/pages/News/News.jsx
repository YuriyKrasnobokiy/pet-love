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
          <ul>
            {news.map((nw) => (
              <NwCard nw={nw} key={nw._id} />
              // <li key={nw._id}>
              //   <img src={nw.imgUrl} alt="news" height={190} />
              //   <h3>{nw.title}</h3>
              //   <p>{nw.text}</p>
              //   <p>{formatDate(nw.date)}</p>
              //   <a href={nw.url} target="_blank" rel="noopener noreferrer">
              //     read more
              //   </a>
              // </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default News;
