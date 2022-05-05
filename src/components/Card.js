import React from "react";
import axios from "axios";

const Card = (props) => {
  var myObjData = [];
  let { title, description, imageUrl, newsUrl, author, date } = props;

  const readLaterHandler = () => {
    let myObj = {
      newsUrl: newsUrl,
      description: description,
    };

    console.log(myObj);
    myObjData.push(myObj);
    let json = JSON.stringify(myObjData);
    console.log(json);

    axios
      .post("http://localhost:3001/readlater", myObj, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        if (response.status === 201) {
          console.log(response);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="my-3">
        <div className="card">
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title.slice(0, 42)}...</h5>
            <p className="card-text">{description.slice(0, 60)}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "unKnown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              onClick={readLaterHandler}
              className="btn btn-sm btn-primary"
            >
              Read Later
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
