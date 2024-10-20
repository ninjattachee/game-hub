import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react"
import useGenres from "../hooks/useGenres"
import getImageUrl from "../services/image-url"

const GenreList = () => {
    const { datas, isLoading, error } = useGenres()

    if (error) return null
    if (isLoading) return <Spinner />

    return (
        <List>
            {datas.map(genre =>
                <ListItem key={genre.id} paddingY={'5px'}>
                    <HStack>
                        <Image src={getImageUrl(genre.image_background)} boxSize='32px' borderRadius={8} objectFit='cover' />
                        <Text fontSize='lg'>{genre.name}</Text>
                    </HStack>
                </ListItem>)}
        </List>
    )
}

export default GenreList