import { useParams } from "react-router-dom";

export const ViewIdeaPage = () => {
  const { ideaNick } = useParams() as { ideaNick: string };
  return (
    <div>
      <h1>{ ideaNick }</h1>
      <p>Description of the idea 1</p>
      <div>
        <p>paragraph 1</p>
        <p>paragraph 2</p>
        <p>paragraph 3</p>
      </div>
    </div>
  );
};
