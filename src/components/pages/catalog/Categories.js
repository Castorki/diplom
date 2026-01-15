import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



export const Categories = () => {
    const categories = useSelector(state => state.categories);

    return (
        <div className='categories'>
            {categories.map(category => (
                <div key={category.id} className='categories__category'>
                    <h3 className='categories__category_title'>{category.title}</h3>
                    <img className='categories__category_img' src={category.img} alt={category.title}></img>
                    <p className='categories__category_description'>{category.description}</p>
                    <Link to={`/products?type=${category.type}`}>
                        <button type='button' className='categories__category_button'>
                            <span>Перейти к покупкам</span>
                        </button>
                    </Link>
                </div>
            ))}
        </div>
    )
}