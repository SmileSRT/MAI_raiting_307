import React, {useEffect, useState} from 'react';
import Main from '../components/main/main';
import FieldGroup from '../components/UI/fieldGroup/fieldGroup';
import {getStudentGroup} from "../http/getStudentGroup";


const Group = () => {
    const [studentGroup, setStudentGroup] = useState({students: [], headStudent: ''});

    useEffect(() => {
        const fetchStudentGroup = async () => {
            const url = `${process.env.REACT_APP_HOSTNAME}/student/students_by_groups`;
            const userGroup = JSON.parse(localStorage['authUser']).group;
            const response = await getStudentGroup(userGroup, url);
            
            setStudentGroup(response);
        }

        fetchStudentGroup()
    }, [])

    return(
        <Main 
        title='Моя группа'  
        displayField={<FieldGroup students={studentGroup.students} headStudent={studentGroup.headStudent}/>}/>

    );
}
export default Group;