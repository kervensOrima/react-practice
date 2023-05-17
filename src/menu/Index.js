import { useState } from 'react';
import './style.css'
import items from './data';
import Categories from './Categories';
import Menu from './Menu';


const allCategories = ['all', ...new Set(items.map(item => item.category))]


const Index = () => {

    const [menuItems, setMenuItems] = useState(items)
    const [categories, setCategories] = useState(allCategories)

    console.log(categories)

    const filterItems = (category) => {
        if (category === 'all') {
            setMenuItems(items)
            return;
        }
        const newItems = items.filter((item) => item.category === category)
        setMenuItems(newItems)
    }

    return (
        <main>
            <section className='menu section'>
                <div className='title'>
                    <h2>Our menu</h2>
                    <div className='underline'></div>
                </div>
            </section>
            <Categories filterItems={filterItems} categories={categories} />
            <Menu items={menuItems} />
        </main>

    )
}


export default Index;