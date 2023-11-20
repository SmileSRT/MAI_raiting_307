exports.getStudentGroup = async (userGroup, url) => {
    const groups = {groups: userGroup};

    const requestHeaders = {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",

        },
        redirect: "follow",
        referrerPolicy: "no-referrer",

        body: JSON.stringify(groups)
    }

    const response = await fetch(url, requestHeaders)
    const groupList = await response.json()

    const studentGroup = setFormatGroup(groupList);

    return studentGroup;
}

const setFormatGroup = (groupList) => {
    const [students, headStudent] = fillArray(groupList);
    const groupMembers = {
        'students': students,
        'headStudent': headStudent,
    }

    return groupMembers;
}

const fillArray = (array) => {
    let arr = []
    let headStudent
    for (let i = 0; i < array.length; i ++) {
        if (array[i].is_head_student === '1') { headStudent = array[i].name }

        const formattedName = formatName(array[i].name)
        arr.push(formattedName)
    }
    return [arr, headStudent]
}

const formatName = (fullName) => {
    const names = fullName.split(' ');
    const formattedNames = names.map(name => name.charAt(0) + name.slice(1).toLowerCase());
    return formattedNames.join(' ');
}

