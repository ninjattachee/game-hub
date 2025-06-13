import { SimpleGrid, Text } from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Fragment } from "react/jsx-runtime";
import { GameQuery } from "../App";
import useGames from "../hooks/useGames";
import GameCards from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

const SkeletonCount = 8;

interface GameGridProps {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: GameGridProps) => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } =
    useGames(gameQuery);

  if (error) return <Text>{error.message}</Text>;

  const skeletons = Array.from({ length: SkeletonCount }).map((_, index) => (
    <GameCardContainer key={index}>
      <GameCardSkeleton />
    </GameCardContainer>
  ));

  return (
    <InfiniteScroll
      dataLength={data?.pages.length || 0}
      hasMore={!!hasNextPage}
      next={fetchNextPage}
      loader={
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
          {skeletons}
        </SimpleGrid>
      }
    >
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
        {isLoading && skeletons}
        {data?.pages.map((page, index) => (
          <Fragment key={index}>
            {page.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCards game={game} />
              </GameCardContainer>
            ))}
          </Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default GameGrid;
