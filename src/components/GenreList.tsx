import { HStack, Image, List, ListItem, Spinner, Button } from "@chakra-ui/react"
import useGenres, { Genre } from "../hooks/useGenres"
import getImageUrl from "../services/image-url"

interface GenreListProps {
    onSelectGenre: (genre: Genre) => void
}

const GenreList = ({ onSelectGenre }: GenreListProps) => {
    const { datas, isLoading, error } = useGenres()

    if (error) return null
    if (isLoading) return <Spinner />

    return (
        <List>
            {datas.map(genre =>
                <ListItem key={genre.id} paddingY={'5px'}>
                    <HStack>
                        <Image src={getImageUrl(genre.image_background)} boxSize='32px' borderRadius={8} objectFit='cover' />
                        <Button onClick={() => onSelectGenre(genre)} fontSize='lg' variant='link'>{genre.name}</Button>
                    </HStack>
                </ListItem>)}
        </List>
    )
}

export default GenreList