import { useEffect, useState } from "react";

export function Movie(props: any) {
  const { title, year, genre, plot, poster } = props.movie;

  const [test, setTest] = useState("");
  const [marked, setMarked] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

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
        </div>
      )}
    </div>
  );
}
