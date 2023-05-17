
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaAngleDoubleRight } from 'react-icons/fa'

import './index.css'

const url = 'https://course-api.com/react-tabs-project'

const Index = () => {

    const [value, setValue] = useState(0)
    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(true)


    const fetchJobs = async () => {
        axios.get(url)
            .then(resp => {

                setLoading(false)
                setJobs(resp.data)
            })
            .catch(error => {
                console.error(error)
                setLoading(false)
            })
            .finally(() => {
                console.log(`done...`)
            })
    }

    useEffect(() => {
        fetchJobs()
    }, [])


    return (
        <>

            {loading && (
                <section className='section loading'>
                    <h3>Loading...</h3>
                </section>
            )}

            {!loading && jobs && (
                <section className='section'>
                    <div className='title'>
                        <h2>Experience</h2>
                        <div className='underline'></div>
                    </div>
                    <div className='jobs-center'>

                        {/* jobs buttons */}
                        <div className='btn-container'>
                            {
                                jobs.map((job, index) => {
                                    return (
                                        <button
                                            onClick={(e) => setValue(index)}
                                            className={`job-btn ${index === value ? 'active-btn' : ''}`}
                                            key={index}

                                        >
                                            {job.company}
                                        </button>
                                    )
                                })
                            }
                        </div>

                        {/* job information */}
                        <article className='job-info'>
                            <h3>{jobs[value].title}</h3>
                            <h4>{jobs[value].company}</h4>
                            <p className='job-dates'>{jobs[value].date}</p>

                            {jobs[value].duties && jobs[value].duties.map((duty, index) => {
                                return (
                                    <div className='job-desc' key={index}>
                                        <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                                        <p >{duty}</p>

                                    </div>
                                )
                            })}
                        </article>
                    </div>
                </section>
            )}

        </>
    )

}


export default Index;