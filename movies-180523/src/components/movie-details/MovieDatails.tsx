import { useParams } from "react-router-dom";

export function MovieDetails() {
  const papams = useParams();

  return (
    <>
      <p>Current movie's ID is: {papams.id}</p>
    </>
  );
}
