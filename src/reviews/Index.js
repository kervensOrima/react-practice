
import Review from './Review';
import reviews from './data';
import './style.css'


const Index = () => {
    return (
        <main>
            <section className='container'>
                <div className='title'>
                    <h2>our reviews</h2>
                    <div className='underline'></div>
                </div>
                <Review reviews={reviews} />
            </section>
        </main>

    )
}


export default Index;