


const Categories = ({ filterItems, categories }) => {

    return (
        <div className="btn-container">

            {categories.map((category, index) => {
                return (
                    <button
                        type="button"
                        className="filter-btn"
                        onClick={(e) => filterItems(category)}
                        key={index}
                    >
                        {category}
                    </button>
                )
            })}


        </div>
    )
}


export default Categories;