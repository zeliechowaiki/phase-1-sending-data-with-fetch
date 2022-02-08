// Add your code here
const formData = {
    dogName: 'Byron',
    dogBreed: 'Poodle'
}

const configurationObject = {
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    },
    body: JSON.stringify(formData)
};

/*
fetch('http://localhost:3000/dogs', configurationObject)
    .then(function (reponse) {
        return reponse.json();
    })
    .then(function (object) {
        console.log(object);
    })
    .catch(function (error) {
        alert('Bad things! Ragnorök!');
        console.log(error.message);
    });
*/

function submitData(userName, userEmail) {
    const userID = document.querySelector('#userID');
    console.log(userID);
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (object) {
        userID.textContent = object.id;
    })
    .catch(function (error) {
        alert('There has been an error');
        userID.textContent = error.message;
        console.log(error.message);
    });
}

submitData('Zelie', 'zelie@zelmail.com');