

const List = ({ people, remove }) => {

    return (
        <>
            {people.map((person, index) => {
                return (
                    <article key={index} className="person">
                        <img src={person.image} alt={person.name} />
                        <div>
                            <h4>{person.name}</h4>
                            <p>{person.age} years</p>
                            <span style={{
                                fontSize: '12px',
                                color: 'blue',
                                fontWeight: 'bold',
                                cursor: 'pointer'
                            }} onClick={(e) => remove(person.id)}>remove</span>
                        </div>
                    </article>
                )
            })}
        </>

    )
}

export default List;