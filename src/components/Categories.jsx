import React from 'react';
import '../assets/styles/components/categories.scss';

const Categories = ({ title, children }) => {
    return ( 
        <div className="categories">
            <h3 class="categories__title">{title}</h3>
            {children}
        </div>
     );
}
 
export default Categories;