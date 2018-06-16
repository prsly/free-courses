/* Task 2 */

/* Put your code here */
a = process.argv[2];
b = process.argv[3];

function shiftToRight(str){
    return str.slice(1).concat(str.slice(0, 1))
}
function shiftToLeft(str){
    return str.slice(-1).concat(str.slice(0, -1))
}

shiftRight = -1;
aTemp = a;
for (i = 0; i < a.length; i++){
    if (aTemp == b){ 
        shiftRight = i;
        break;
    }
    aTemp = shiftToRight(aTemp);
}

shiftLeft = -1;
aTemp = a;
for (i = 0; i < a.length; i++){
    if (aTemp == b){
        shiftLeft = i;
        break;
    }
    aTemp = shiftToLeft(aTemp);
}

if (shiftLeft <= shiftRight){
    process.stdout.write(shiftLeft + "\n");
}else{
    process.stdout.write(shiftRight + "\n");
}