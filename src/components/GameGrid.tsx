import { SimpleGrid, Text } from "@chakra-ui/react"
import useGames from "../hooks/useGames"
import GameCards from "./GameCard"
import GameCardSkeleton from "./GameCardSkeleton"
import GameCardContainer from "./GameCardContainer"
import { Genre } from "../hooks/useGenres"

const SkeletonCount = 6

interface GameGridProps {
    selectedGenre: Genre | null
}

const GameGrid = ({ selectedGenre }: GameGridProps) => {
    const { datas, error, isLoading } = useGames(selectedGenre)

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