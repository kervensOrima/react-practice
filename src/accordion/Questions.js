import { useState } from 'react';
import SingleQuestion from './SingleQuestion';
import datas from './data';

import './question.css'

const Question = () => {

    const [questions, setQuestions] = useState(datas)


    return (
        <main>
            <div className='container'>
                <h3>questions and answers about login</h3>
                <section className='info'>
                    {questions.map((question) => {
                        return (
                            <SingleQuestion key={question.id} {...question} />
                        );
                    })}
                </section>
            </div>
        </main>
    )
}


export default Question;