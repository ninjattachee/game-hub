
import { Image, Card, CardBody, Heading } from "@chakra-ui/react"
import { Game } from "../hooks/useGames"

interface GameCardProps {
    game: Game
}

const GameCards = ({ game }: GameCardProps) => {
    return (
        <Card borderRadius={10} overflow='hidden'>
            <Image src={game.background_image} />
            <CardBody>
                <Heading fontSize='2xl'>{game.name}</Heading>
            </CardBody>
        </Card>
    )
}

export default GameCards