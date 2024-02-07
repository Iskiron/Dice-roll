let input = document.getElementById("diceinp");
let result = document.getElementById("result");

let count=0;
document.getElementById("btn").onclick = () => {
    let random = Math.floor(Math.random() * (6)) + 1;
    console.log(random);
    count++;
    input.innerText = count;
    if(random == 1){
        result.innerHTML = `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Dice-1.svg/900px-Dice-1.svg.png"
            alt="no image"></img>` + result.innerHTML;
    }
    else if(random == 2){
        result.innerHTML = `<img src="https://upload.wikimedia.org/wikipedia/commons/1/18/Dice-2.png"
            alt="no image"></img>`+ result.innerHTML;
    }
    else if(random == 3){
        result.innerHTML = `<img src="https://upload.wikimedia.org/wikipedia/commons/7/70/Dice-3.png"
            alt="no image"></img>` + result.innerHTML;
    }
    else if(random == 4){
        result.innerHTML = `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Dice-4.svg/900px-Dice-4.svg.png"
            alt="no image"></img>`+ result.innerHTML;
    }
    else if(random == 5){
        result.innerHTML = `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Dice-5.svg/900px-Dice-5.svg.png"
            alt="no image"></img>` + result.innerHTML;
    }
    else{
        result.innerHTML = `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Dice-6.svg/900px-Dice-6.svg.png"
            alt="no image"></img>` + result.innerHTML;
    }
    
}
