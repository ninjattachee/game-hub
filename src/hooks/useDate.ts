
import { useEffect, useState } from "react"
import apiClient from "../services/api-client"
import { CanceledError } from "axios"

interface FetchDatesResponse<T> {
    count: number
    results: T[]
}

const useDates = <T>(endpoint: string) => {
    const [datas, setDates] = useState<T[]>([])
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const controller = new AbortController()

        setIsLoading(true)
        apiClient.get<FetchDatesResponse<T>>(endpoint, { signal: controller.signal }).then(res => {
            setDates(res.data.results)
            setIsLoading(false)
        }).catch(err => {
            if (err instanceof CanceledError) return
            setError(err.message)
            setIsLoading(false)
        })

        return () => controller.abort()
    }, [])

    return { datas, error, isLoading }
}

export default useDates