import useDate from "./useDate"


export interface Platform {
    id: number
    name: string
    slug: string
}

const usePlatforms = () => useDate<Platform>('/platforms/lists/parents')

export default usePlatforms
