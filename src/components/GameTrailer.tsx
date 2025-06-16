import useTrailers from "../hooks/useTrailers";

const GameTrailer = ({ gameId }: { gameId: number }) => {
  const { data, isLoading, error } = useTrailers(gameId);
  const first = data?.results[0];

  if (error) throw error;
  if (isLoading) return null;

  return first ? (
    <video src={first.data[480]} poster={first.preview} controls />
  ) : null;
};

export default GameTrailer;
