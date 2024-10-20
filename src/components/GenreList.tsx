import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react"
import useGenres from "../hooks/useGenres"
import getImageUrl from "../services/image-url"

const GenreList = () => {
    const { datas } = useGenres()

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