for(let i = 1; i <= 4; i++){
    let star = "";

    for(let j = 1; j <= i; j++){
        star += "* ";
    }
    console.log(star);
}

console.log("* * * * * * *");

for(let i = 4; i >= 1; i--){
    let star = "";

    for (let j = 1; j <= i; j++){
        star += "* ";
    }
    console.log(star);
}