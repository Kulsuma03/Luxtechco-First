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

export type Activity = {
    activity: string;
    type: string;
    participants: number;
    price: number;
    link: string;
    key: string;
    accessibility: number;
}

function useFetch(url: string) {
    const [data, setData] = useState<null | Activity>(null);
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

