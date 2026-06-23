for(let i = 1; i <= 5; i++){
    let spasi = "";
    let star = "";

    for(let s = 5; s > i; s--){
        spasi += " ";
    }

    for(let j = 1; j <= i; j++){
        star += "* ";
    }
    console.log(spasi + star);
}

for(let i = 4; i >= 1; i--){
    let spasi = "";
    let star = "";

    for(let s = 5; s > i; s--){
        spasi += " ";
    }

    for(let j = 1; j <= i; j++){
        star += "* ";
    }
    console.log(spasi + star);
}