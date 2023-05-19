import './index.css'

import { useState } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';

import data from './data'

const Slider = () => {


    const [people, setPeople] = useState(data)
    const [index, setIndex] = useState(0)

    return (
        <section className='section'>
            <div className='title' title='title'>
                <h2>
                    <span>/</span> Reviews
                </h2>
            </div>
            
            <div className='section-center'>
                {people.map((person, personIndex) => {
                    console.log(person)
                    return (
                        <article key={personIndex}>
                            <img src={person.image} alt={person.name} className='person-img' />
                            <p className='title'>{person.title}</p>
                            <p className='text'>{person.quote}</p>
                            <FaQuoteRight className='icon' />
                        </article>
                    )
                })}
            </div>
            <button className='prev'>
                <FiChevronLeft />
            </button>
            <button className='next'>
                <FiChevronRight />
            </button>
        </section>
    )
}

export default Slider;