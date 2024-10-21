import { SimpleGrid, Text } from "@chakra-ui/react"
import useGames from "../hooks/useGames"
import GameCards from "./GameCard"
import GameCardSkeleton from "./GameCardSkeleton"
import GameCardContainer from "./GameCardContainer"
import { GameQuery } from "../App"

const SkeletonCount = 6

interface GameGridProps {
    gameQuery: GameQuery
}

const GameGrid = ({ gameQuery }: GameGridProps) => {
    const { datas, error, isLoading } = useGames(gameQuery)

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding='10px' spacing={3}>
                {isLoading && Array.from({ length: SkeletonCount }).map((_, index) => <GameCardContainer key={index}><GameCardSkeleton /></GameCardContainer>)}
                {datas.map(data => <GameCardContainer key={data.id}><GameCards game={data} /></GameCardContainer>)}
            </SimpleGrid>
        </>
    )
}

export default GameGrid