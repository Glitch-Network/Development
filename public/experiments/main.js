function generateToken(length, type) {
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ2468!@#$%^&*";
    let token = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        token += characters[randomIndex];
    }

    const now = new Date();
    const expirationDate = new Date(now.setMonth(now.getMonth() + 1));
    const day = String(expirationDate.getDate()).padStart(2, '0'); 
    const month = String(expirationDate.getMonth() + 1).padStart(2, '0'); 
    const year = String(expirationDate.getFullYear()).slice(-1); 

    const expirationString = `tkn_exp${day}${month}${year}`;

    if (type === "premium") {
        return `cyn${token}pid_${expirationString}`;
    } else if (type === "beta") {
        return `cyn${token}BETATESTER_${expirationString}`;
    }

    return `cyn${token}_${expirationString}`;
}

function validateToken(token) {
    const currentYear = new Date().getFullYear();
    const decadePrefix = currentYear.toString().substring(0, 3);

    const expirationPart = token.split("tkn_exp")[1];
    const day = expirationPart.substring(0, 2);
    const month = expirationPart.substring(2, 4);
    const year = expirationPart.substring(4, 5);
    const fullYear = decadePrefix + year;

    const date = new Date(`${fullYear}-${month}-${day}`);
    const currentDate = new Date();

    if (currentDate > date) {
        console.log(currentDate + " 2: " + date);
        console.log("false date");
        return false;
    }

    return true;
}

let tokens = [];
for (let i = 0; i < 50; i++) {
    const token = generateToken(18, "premium");
    tokens.push(token);
}

let x = 0;
for (let token of tokens) {
    if (!validateToken(token)) {
        x += 1;
    } else {
        console.log(token);
    }
}

console.log("\nAmount of invalid tokens: " + x);
