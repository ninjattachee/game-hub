import { SimpleGrid, Text } from "@chakra-ui/react"
import useGames from "../hooks/useGames"
import GameCards from "./GameCard"
import GameCardSkeleton from "./GameCardSkeleton"

const SkeletonCount = 5

const GameGrid = () => {
    const { games, error, isLoading } = useGames()

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} padding='10px' spacing={10}>
                {isLoading && Array.from({ length: SkeletonCount }).map((_, index) => <GameCardSkeleton key={index} />)}
                {games.map(game => <GameCards key={game.id} game={game} />)}
            </SimpleGrid>
        </>
    )
}

export default GameGrid