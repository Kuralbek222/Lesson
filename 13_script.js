let num = prompt("get number","");

console.log(num)

switch (num) {
    case '49':
        console.log("not matches")
        break;
    case '100':
        console.log("its bigger")    
        break;
    case '50':
        console.log("you lucky, its right")
    break;
    default : console.log("not this times")
}