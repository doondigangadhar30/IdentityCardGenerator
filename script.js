function generateID() {
    const name = document.getElementById('name').value;
    const branch = document.getElementById('branch').value;
    const roll = document.getElementById('roll').value;
    const email = document.getElementById('email').value;
    const birthday =document.getElementById('birthday').value;
    const blood =document.getElementById('blood').value;
    const address = document.getElementById('address').value;
    const year = parseInt(document.getElementById('year').value);
    const endYear = year + 4;
    const photo = document.getElementById('photo').files[0];

    if (name && branch && roll && email && address && year && photo) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const photoURL = e.target.result;
            const idCardData = {
                name: name,
                branch: branch,
                roll: roll,
                email: email,
                birthday: birthday,
                blood: blood,
                address: address,
                year: `${year}-${endYear}`,
                photo: photoURL
            };

            localStorage.setItem('idCardData', JSON.stringify(idCardData));
            window.open('idgeneration.html');
        };
        reader.readAsDataURL(photo);
    } else {
        alert('Please fill in all the details and upload a photo.');
    }
}

window.onload = function() {
    const idCardData = JSON.parse(localStorage.getItem('idCardData'));

    if (idCardData) {
        document.getElementById('studentName').innerText = idCardData.name;
        document.getElementById('studentBranch').innerText = idCardData.branch;
        document.getElementById('studentRoll').innerText = idCardData.roll;
        document.getElementById('studentEmail').innerText = idCardData.email;
        document.getElementById('studentBirthday').innerText = idCardData.birthday;
        document.getElementById('studentBlood').innerText = idCardData.blood;
        document.getElementById('studentAddress').innerText = idCardData.address;
        document.getElementById('studentPhoto').src = idCardData.photo;
        document.getElementById('studentYear').innerText = idCardData.year;
    }
};
