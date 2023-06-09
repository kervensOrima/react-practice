import { useState } from "react";


const Tour = ({ tour, removeTour }) => {

    const [readMore, setReadMore] = useState(false)

    return (
        <>
            <article className="single-tour">
                <img src={tour.image} alt={tour.name} />
                <footer>
                    <div className="tour-info">
                        <h4>{tour.name}</h4>
                        <h4 className="tour-price">{tour.price} $</h4>
                    </div>
                    <p>
                        {!readMore && tour.info.substring(0, 200)}...
                        {readMore && tour.info}

                        <button className="" onClick={(e) => {
                            setReadMore(!readMore)
                        }}> {readMore ? 'show less' : 'read more'} </button>
                    </p>
                    <button onClick={(e) => removeTour(tour.id)} className="delete-btn">Not interested</button>
                </footer>
            </article>
        </>
    )
}


export default Tour;