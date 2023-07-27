userName = prompt('Enter your name, pls');
if (userName === null || userName === '') {
    alert(userName = `Your name 😌`);
} else (userName !== null && userName !== ''); {
    userName = userName.replaceAll(' ', '')
}
console.log(userName)


userFullName = prompt('Enter your full name, pls')
if (userFullName === null || userFullName === '') {
    alert(userFullName = `Your full name 😌`)
} else (userFullName !== null && userFullName !== ''); {
    userFullName = userFullName.replaceAll(' ', '')
}
console.log(userFullName)




userEmail = prompt('Enter your email, pls')
errorMsg = 'not valid email'

if (userEmail !== null) {
    userEmail = userEmail.replaceAll(' ', '').toLowerCase()
};
if (userEmail === null || userEmail === '') {
    userEmail = 'email not defined'
};


if (!userEmail.includes('@')) {
    userEmail = `not valid email <b>${userEmail}</b> (symbol @ not exist)`;
}
if (userEmail.startsWith('@') && userEmail.endsWith('@')) {
    userEmail = ` ${errorMsg} ${userEmail} (symbol @ find in first place, symbol @ find in last place).`
}

if (userEmail.startsWith('@')) {
    userEmail = `${errorMsg}${userEmail}(symbol @ find in first place)`
}
if (userEmail.endsWith('@')) {
    userEmail = `${errorMsg} <b>${userEmail}</b> (symbol @ find in last place)`
}


userBirthData = prompt('Enter your year of birth')
userAge = 0;

console.log(typeof (userBirthData))

if (userBirthData !== null) {
    userBirthData = userBirthData.replaceAll(' ', '');
    userBirthData = +userBirthData
    console.log(typeof (userBirthData))
}
if (userBirthData === null) {
    userBirthData = ` Your year of birth 😌`
} else if (userBirthData === '') {
    userBirthData = ` Your year of birth 😌`
    console.log(typeof (userBirthData))
} else { userAge = (new Date().getFullYear()) - userBirthData }
console.log(userBirthData)


document.write(`
<ul>
<li>Full name: ${userName} ${userFullName}</li>
<li>Email: ${userEmail}</li>
<li>Age: ${userAge}</li>
</ul >
    `)