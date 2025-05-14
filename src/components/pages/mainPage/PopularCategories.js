import React from 'react'

export const PopularCategories = () => {
    return (
        <div className='popular'>
            <h2 className='popular__name'>Популярные категории</h2>
            <div className='popular__categories'>
                <div className='popular__categories_category'>
                    <img className='popular__categories_img' src='./cupcake.jpg'></img>
                    <div className='popular__categories_info'>
                        <h2 className='popular__categories_info_name'>Кексы</h2>
                        <p className='popular__categories_info_description'>Наши кексы — это настоящее наслаждение! Мягкие, ароматные и с нежным вкусом, они выпекаются с любовью и дарят тепло в каждом укусе.</p>
                    </div>
                    <button type='button' className='popular__categories_category_button'><span className='popular__categories_category_button_text'>Перейти к покупкам</span></button>
                </div>
                <div className='popular__categories_category'>
                    <img className='popular__categories_img' src='./donuts.jpg'></img>
                    <div className='popular__categories_info'>
                        <h2 className='popular__categories_info_name'>Пончики</h2>
                        <p className='popular__categories_info_description'>Наши пончики — это сочетание нежной текстуры и безумно вкусного крема или начинки. Легкие, ароматные и такие мягкие, что тают во рту.</p>
                    </div>
                    <button type='button' className='popular__categories_category_button'><span className='popular__categories_category_button_text'>Перейти к покупкам</span></button>
                </div>
                <div className='popular__categories_category'>
                    <img className='popular__categories_img' src='./cookies.jpg'></img>
                    <div className='popular__categories_info'>
                        <h2 className='popular__categories_info_name'>Печенья</h2>
                        <p className='popular__categories_info_description'>Печенья, выпеченные с душой, дарят истинное удовольствие! Хрустящие снаружи и мягкие внутри, они порадуют своим вкусом в каждом кусочке.</p>
                    </div>
                    <button type='button' className='popular__categories_category_button'><span className='popular__categories_category_button_text'>Перейти к покупкам</span></button>
                </div>
                <div className='popular__categories_category'>
                    <img className='popular__categories_img' src='./panckeks.jpg'></img>
                    <div className='popular__categories_info'>
                        <h2 className='popular__categories_info_name'>Панкейки</h2>
                        <p className='popular__categories_info_description'>Панкейки, как из детства! Пышные, воздушные и золотистые, они станут идеальным началом дня или уютным перекусом в любое время.</p>
                    </div>

                    <button type='button' className='popular__categories_category_button'><span className='popular__categories_category_button_text'>Перейти к покупкам</span></button>
                </div>

            </div>
        </div>
    )
}
