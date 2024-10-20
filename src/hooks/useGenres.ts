import useDates from "./useDate"

export interface Genre {
    id: number
    name: string
}

const useGenres = () => {
    return useDates<Genre>('/genres')
}

export default useGenres