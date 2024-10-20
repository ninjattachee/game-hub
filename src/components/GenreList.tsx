import useGenres from "../hooks/useGenres"

const GenreList = () => {
    const { datas } = useGenres()

    return (
        <ul>
            {datas.map(data => <li key={data.id}>{data.name}</li>)}
        </ul>
    )
}

export default GenreList