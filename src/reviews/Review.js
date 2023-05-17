
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = ({ reviews }) => {

    const [index, setIndex] = useState(0)

    const length = reviews.length - 1


    const prevPerson = () => {
        if (index > 0) {
            setIndex(prev => prev - 1)
        }
    }


    const nextPerson = () => {
        if (index < length) {
            setIndex(prev => prev + 1)
        }
    }


    const randomPerson = () => {
        const random = Math.floor(Math.random() * (length - 0 + 1)) + 0
        setIndex(random)
    }



    return (
        <article className='review'>
            <div className='img-container'>
                <img src={reviews[index].image} alt={reviews[index].name} className='person-img' />
                <span className='quote-icon'>
                    <FaQuoteRight />
                </span>
            </div>
            <h4 className='author'>{reviews[index].name}</h4>
            <p className='job'>{reviews[index].job}</p>
            <p className='info'>{reviews[index].text}</p>
            <div className='button-container'>
                <button className='prev-btn' onClick={prevPerson}>
                    <FaChevronLeft />
                </button>
                <button className='next-btn' onClick={nextPerson}>
                    <FaChevronRight />
                </button>
            </div>
            <button className='random-btn' onClick={randomPerson}>
                surprise me
            </button>
        </article>

    )
}


export default Review;