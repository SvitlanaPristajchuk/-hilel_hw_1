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

/*3*/


userEmail = prompt('Enter your email, pls')

if (userEmail !== null) {
    userEmail = userEmail.replaceAll(' ', '').toLowerCase()
};
if (userEmail === null || userEmail === '') {
    userEmail = 'email not defined'
};


if (userEmail.includes('@') === false) {
    userEmail = `not valid email <b>${userEmail}</b> (symbol @ not exist)`;
} else
    if (userEmail.startsWith('@') && userEmail.endsWith('@')) {
        userEmail = ` not valid email ${userEmail} (symbol @ find in first place, symbol @ find in last place).`
    } else
        if (userEmail.startsWith('@')) {
            userEmail = `not valid email <b>${userEmail}</b> (symbol @ find in first place)`
        } else
            if (userEmail.endsWith('@')) {
                userEmail = `not valid email <b>${userEmail}</b> (symbol @ find in last place)`
            }


console.log(userEmail)


document.write(`
<ul>
<li>User name: ${userName}</li>
<li>User full name: ${userFullName}</li>
<li>User email: ${userEmail}</li>

</ul >
    `)