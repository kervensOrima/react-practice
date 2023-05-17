import Tour from "./Tour";



const Tours = ({ tours, removeTour }) => {
    return (
        <section className="title">
            <div>
                <h2>Our tours</h2>
                <div className="underline"></div>
            </div>
            <div>
                {tours.map((tour, index) => {
                    return <Tour key={index} tour={tour} removeTour={removeTour} />
                })}
            </div>
        </section>
    )
}


export default Tours;