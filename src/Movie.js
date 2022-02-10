import React from "react";

const Movie = props => {
  const { data, like, dislike } = props;
  return (
    <div className="card">
      <h2 className="card__title">{data.title}</h2>
      <div className="card__content">
        <p className="card__category">{data.category}</p>
        <button type="button" className="like" onClick={() => like(data.id)}>
          Likes: {data.likes}
        </button>
        <button type="button" className="like" onClick={() => dislike(data.id)}>
          Dislike: {data.dislikes}
        </button>
      </div>
    </div>
  );
};

export default Movie;
