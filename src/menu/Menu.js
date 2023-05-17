

const Menu = ({ items }) => {

    return (
        <section className="section-center">
            {items.map((item, index) => {
                return (
                    <article key={index} className="menu-item" >
                        <img src={item.img} alt={item.title} className="photo" />
                        <div className="item-info">
                            <header>
                                <h4>{item.title}</h4>
                                <h4 className="price">{item.price} $</h4>
                            </header>
                            <p className="item-text">
                                {item.desc}
                            </p>
                        </div>
                    </article>
                )
            })}
        </section>
    )
}


export default Menu 