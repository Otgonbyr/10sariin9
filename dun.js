let dun = 80;
let result; 

switch (true){
    case dun >= 90 && dun <= 100:
        result = "A";
        break;
    case dun >= 80 && dun < 90:
        result = "B";
        break;
    case dun >= 70 && dun < 80:
        result = "C";
        break;
    case dun >= 60 && dun < 70:
        result = "D";
        break;
    case dun < 60:
        result = "F";
        break;
}
console.log(result);