import useDate from "./useDate"


interface Platform {
    id: number
    name: string
    slug: string
}

const usePlatforms = () => useDate<Platform>('/platforms/lists/parents')

export default usePlatforms
