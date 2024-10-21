import useDate from "./useDate"

export interface Genre {
    id: number
    name: string
    image_background: string
}

const useGenres = () => {
    return useDate<Genre>('/genres')
}

export default useGenres