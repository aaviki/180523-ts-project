import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Movie(props: any) {
  const { id, title, year, genre, plot, poster } = props.movie;

  const [test, setTest] = useState("");
  const [marked, setMarked] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const navigate = useNavigate();

  // useEffect(() => {
  //   console.log("whenever");
  // });
  useEffect(() => {
    console.log("Mounting");
  }, []);

  useEffect(() => {
    console.log("Updating: " + title);
    // return () => {
    //   console.log("Unmounting");
    // };
  }, [marked]);

  const markMovie = () => {
    setMarked((marked) => !marked);
  };

  const markMovieAsDeleted = () => {
    setIsDeleted(true);
  };

  const goToDetails = () => {
    navigate(`/movies/${id}, title is: ${title}`);
  };

  return (
    <div>
      {!isDeleted && (
        <div
          onClick={markMovie}
          style={
            marked ? { backgroundColor: "red" } : { backgroundColor: "blue" }
          }
        >
          <h2>{title}</h2>
          <p>{year}</p>
          <p>{genre}</p>
          <p>{plot}</p>
          <img src={poster} alt="poster" />
          <button onClick={markMovieAsDeleted}>Mark as Deleted</button>
          <button onClick={goToDetails}>Show details</button>
        </div>
      )}
    </div>
  );
}
