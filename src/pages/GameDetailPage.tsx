import { Heading, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import GameDetailSkeleton from "../components/GameDetailSkeleton";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (error) return <Text>{error.message}</Text>;

  return (
    <>
      {isLoading && <GameDetailSkeleton />}
      <Heading>{game?.name}</Heading>
      <Text>{game?.description_raw}</Text>
    </>
  );
};

export default GameDetailPage;
