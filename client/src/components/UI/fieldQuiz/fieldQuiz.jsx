import React, {useState} from 'react';
import classes from './styles.module.scss';
import QuestionsList from '../questionsList/questionsList';
import MyButton from '../myButton/myButton';
import { fieldAnswers } from './fieldAnswers';
import CompletedQuiz from '../completedQuiz/completedQuiz';

const FieldQuiz = ({disciplineInfo, setTitle}) => {

    const [answers, setAnswers] = useState(fieldAnswers);
    const [isCompleteQuiz, setIsCompleteQuiz] = useState(false);

    const answerHandler = (newAnswer, numberQuestion, role) => {
        const updatedAnswers = answers.map((answer) => {
            if (answer.id === numberQuestion) {
                return {...answer, [role]: newAnswer};
            }
            return answer;
        });
        
        setAnswers(updatedAnswers);
    }

    const submitQuiz = () => {
        setIsCompleteQuiz(true);
    }

    if (isCompleteQuiz) {
        setTitle('');
        
        return(
            <CompletedQuiz/>
        )
    }

    return( 

        <div>
            <ul className={classes.teacher__list}>
                <li>
                    <h3>Лектор</h3>
                    <p>{disciplineInfo.lecturer}</p>
                </li>
                <li>
                    <h3>Семинарист</h3>
                    <p>{disciplineInfo.seminarian}</p>
                </li>
            </ul>

            <QuestionsList answered={answerHandler}/>
            
            <MyButton onClick={submitQuiz}>Завершить</MyButton>
        </div>
    );
}
export default FieldQuiz;