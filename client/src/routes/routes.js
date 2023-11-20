import {
    AUTH_ROUTE,
    GROUP_ROUTE,
    HOME_ROUTE,
    QUIZ_ROUTE,
    RATING_ROUTE,
    REGISTRATION_ROUTE,
    SURVEYS_ROUTE,
} from './consts.js'

import Auth from '../pages/authorization.jsx';
import Registration from '../pages/registration.jsx';
import Surveys from '../pages/surveys.jsx';
import Rating from '../pages/rating.jsx';
import Group from '../pages/group.jsx';
import Quiz from '../pages/quiz.jsx';
import Home from '../pages/home.jsx';

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home,
        title: 'МАИ | Опросы',
        isPrivate: false,
    },
    {
        path: AUTH_ROUTE,
        Component: Auth,
        title: 'Авторизация',
        isPrivate: false,
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Registration,
        title: 'Регистрация',
        isPrivate: false,
    },
    {
        path: SURVEYS_ROUTE,
        Component: Surveys,
        title: 'Опросы',
        isPrivate: true,
    },
    {
        path: RATING_ROUTE,
        Component: Rating,
        title: 'Рейтинг',
        isPrivate: true,
    },
    {
        path: GROUP_ROUTE,
        Component: Group,
        title: 'Моя группа',
        isPrivate: true,
    },
    {
        path: QUIZ_ROUTE,
        Component: Quiz,
        title: 'Опрос по дисциплине',
        isPrivate: true,
    }
]