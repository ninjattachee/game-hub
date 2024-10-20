import { Badge } from "@chakra-ui/react"

interface CriticScoreProps {
    score: number
}

const CriticScore = ({ score }: CriticScoreProps) => {
    return <Badge colorScheme={score > 75 ? 'green' : score > 60 ? 'yellow' : ''} fontSize='14px' paddingX={2} borderRadius='4px'>{score}</Badge>
}

export default CriticScore