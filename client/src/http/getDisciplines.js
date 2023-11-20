exports.getDisciplines = async (url, groups) => {
    const requestHeaders = {
        method: "POST",
    }

    const response = await fetch(url + '?' + new URLSearchParams(groups), requestHeaders)
    const disciplines = await response.json()

    setFormatDisciplines(disciplines);

    return disciplines;
}

const setFormatDisciplines = (disciplines) => {
    disciplines.forEach((discipline) => {
        if (discipline.lecturer === '') {
            discipline.lecturer = discipline.seminarian;
        } 
        else if (discipline.seminarian === '') {
            discipline.seminarian = discipline.lecturer;
        }
    })
}
