function generateToken(length, type) {
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ012468!@#$%^&*";
    let token = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        token += characters[randomIndex];
    }

    if (type === "premium") {
        return "cyn" + token + "pid" + "_tkn";
    } else if (type === "beta") {
        return "cyn" + token + "BETATESTER" + "_tkn";
    }

    return "cyn" + token + "_tkn";
}

for (let i=0;i<50;i++){
const token = generateToken(18, "premium");
console.log("Generated token:", token);
}