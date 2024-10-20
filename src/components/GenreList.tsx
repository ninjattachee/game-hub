import { HStack, Image, List, ListItem, Spinner, Button } from "@chakra-ui/react"
import useGenres, { Genre } from "../hooks/useGenres"
import getImageUrl from "../services/image-url"

interface GenreListProps {
    onSelectGenre: (genre: Genre) => void
    selectedGenre: Genre | null
}

const GenreList = ({ onSelectGenre, selectedGenre }: GenreListProps) => {
    const { datas, isLoading, error } = useGenres()

    if (error) return null
    if (isLoading) return <Spinner />

    return (
        <List>
            {datas.map(genre =>
                <ListItem key={genre.id} paddingY={'5px'}>
                    <HStack>
                        <Image src={getImageUrl(genre.image_background)} boxSize='32px' borderRadius={8} objectFit='cover' />
                        <Button fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} onClick={() => onSelectGenre(genre)} fontSize='lg' variant='link' whiteSpace='normal' textAlign='left'>{genre.name}</Button>
                    </HStack>
                </ListItem>)}
        </List>
    )
}

export default GenreList