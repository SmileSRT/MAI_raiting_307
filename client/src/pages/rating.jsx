import React from 'react';
import Main from '../components/main/main';
import FieldRating from '../components/UI/fieldRating/fieldRating';

const Raiting = () => {

    return(
        <div>
            <Main title='Рейтинг' displayField={<FieldRating/>}/> 
        </div>

    );
}
export default Raiting;