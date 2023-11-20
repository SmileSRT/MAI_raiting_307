import React, {useState} from 'react';
import Main from '../components/main/main';
import FieldQuiz from '../components/UI/fieldQuiz/fieldQuiz';
import {useLocation} from 'react-router-dom';

const Quiz = () => {
    const location = useLocation()
    const disciplines = location.state
    
    const [title, setTitle] = useState(`Опрос по дисциплине "${disciplines.discipline}"`)

    return(
        <Main title={title} displayField={<FieldQuiz disciplineInfo={disciplines} setTitle={setTitle}/>}/>
    );
}
export default Quiz;