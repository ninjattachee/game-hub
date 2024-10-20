import { SimpleGrid, Text } from "@chakra-ui/react"
import useGames from "../hooks/useGames"
import GameCards from "./GameCard"
import GameCardSkeleton from "./GameCardSkeleton"
import GameCardContainer from "./GameCardContainer"

const SkeletonCount = 10

const GameGrid = () => {
    const { games, error, isLoading } = useGames()

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} padding='10px' spacing={10}>
                {isLoading && Array.from({ length: SkeletonCount }).map((_, index) => <GameCardContainer key={index}><GameCardSkeleton /></GameCardContainer>)}
                {games.map(game => <GameCardContainer key={game.id}><GameCards game={game} /></GameCardContainer>)}
            </SimpleGrid>
        </>
    )
}

export default GameGrid