import { useEffect, useState } from "react"
import axios from 'axios'

export type apiData = {
    _id: string;
    content: string;
    author: string;
    tags: [];
    authorSlug: string;
    length: number;
    dateAdded: string;
    dateModified: string;
  }

function useFetch(url: string) {
    const [data, setData] = useState<null | apiData>(null);
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        setLoading(true)
        axios.get(url).then(res => setData(res.data))
        .catch(err => setError(err))
        .finally(() => setLoading(false))

    },[])

    return {data, loading, error};
}

export default useFetch

