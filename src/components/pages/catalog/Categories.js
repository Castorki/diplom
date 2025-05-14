import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



export const Categories = () => {
    const categories = useSelector(state => state.categories);

    return (
        <div className='catalog__categories'>
            {categories.map(category => (
                <div key={category.id} className='catalog__categories_category'>
                    <h3 className='catalog__categories_category_title'>{category.title}</h3>
                    <img className='catalog__categories_category_img' src={category.img} alt={category.title}></img>
                    <p className='catalog__categories_category_description'>{category.description}</p>
                    <Link to={`/products?type=${category.type}`}>
                        <button type='button' className='catalog__categories_category_button'>
                            <span>Перейти к покупкам</span>
                        </button>
                    </Link>
                </div>
            ))}
        </div>
    )
}