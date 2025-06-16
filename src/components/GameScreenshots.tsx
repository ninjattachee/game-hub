import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

const GameScreenshots = ({ gameId }: { gameId: number }) => {
  const { data, isLoading, error } = useScreenshots(gameId);

  if (error) throw error;
  if (isLoading) return null;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {data?.results.map((screenshot) => (
        <Image key={screenshot.id} src={screenshot.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
