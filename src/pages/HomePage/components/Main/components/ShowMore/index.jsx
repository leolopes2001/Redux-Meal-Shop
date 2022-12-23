import { Container } from "./style";

export const ShowMore = ({ showMore, setShowMore }) => {
  return (
    <Container>
      <button onClick={() => setShowMore((oldValue) => !oldValue)}>
        {!showMore ? "Mostrar Mais" : "Mostrar Menos"}
      </button>
    </Container>
  );
};
