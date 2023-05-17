import { useEffect, useState } from "react";
import './index.css';

import axios from "axios";

import Loading from "./Loading";
import Tours from "./Tours";


const url = 'https://course-api.com/react-tours-project'


const Index = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')
    const [tours, setTours] = useState([])


    const fetchTours = async () => {

        axios.get(url)
            .then((response) => {
                setError('')
                console.log(response)
                setIsLoading(false)
                setTours(response.data)
            })
            .catch(error => {
                console.error(error)
                setError(error)
            })
            .finally(() => {
                console.log(`fetch done`)
            })
    }

    useEffect(() => {
        fetchTours()
    }, [])

    const removeTour = (id) => {
        const newTours = tours.filter(tour => tour.id !== id)
        setTours(newTours)
    }

    return (
        <main className="main" role="main">
            {isLoading && <Loading />}

            {error && (
                <h3>Error while fetching data...</h3>
            )}

            {!isLoading && (
                <Tours tours={tours} removeTour={removeTour} />
            )}

            {tours.length === 0 && !isLoading && (
                <>
                    <h2>No tours</h2>
                    <button className="btn" onClick={fetchTours}>
                        refresh
                    </button>
                </>
            )}
        </main>
    )
}


export default Index;