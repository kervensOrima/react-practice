
import './index.css';
import { useState } from "react";
import List from "./List";
import datas from "./data";

const Birthday = () => {

    const [people, setPeople] = useState(datas)


    const remove = (id) => {
        const newPeople = people.filter((p) => p.id !== id)
        setPeople(newPeople)
    }

    return (
        <>
            <h3>{people.length} birthdays today</h3>

            <List people={people} remove={remove} />

            <button onClick={() => { setPeople([]) }}>Clear all</button>
        </>
    );
}


export default Birthday;