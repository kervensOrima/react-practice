import Values from 'values.js';
import './index.css'

import { useState } from "react";
import SingleColor from './SingleColor';


const Index = () => {

    const [color, setColor] = useState('')
    const [error, setError] = useState(false)
    const [list, setList] = useState(new Values('#f15025').all(10))


    const handleSubit = (e) => {
        e.preventDefault()

        try {
            const colors = new Values(color).all(10)
            setList(colors)
        } catch(error) {
            setError(true)
            console.error(error)
        }
        
    }

    return (
        <>
            <section className="container">
                <h3>Color generator </h3>
                <form onSubmit={handleSubit}>
                    <input
                    className={`${error ? 'error': ''}`}
                        value={color}
                        onChange={(e) => {
                            setColor(e.target.value)
                        }}
                        placeholder='#fff'
                        type='text' />
                    <button
                        className='btn'
                        type='submit'>Generate</button>
                </form>
            </section>


            <section className="colors">
                    { list.map((color, index) => {
                        return  (
                            <SingleColor key={index} color={color} index={index}/>
                        )
                    })}
            </section>
        </>
    )
}


export default Index;