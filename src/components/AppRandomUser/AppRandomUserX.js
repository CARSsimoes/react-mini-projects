import { useParams } from "react-router-dom";

export function AppRandomUserX() {
  const { name } = useParams();

  return (
    <>
      <p>yoooooo {name}</p>
    </>
  );
}
