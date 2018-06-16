/* Task 2 */

/* Put your code here */
a = process.argv[2];
b = process.argv[3];

function shift(str){
    return str.slice(1).concat(str.slice(0, 1));
}

shiftRight = -1;
for (i = 0; i < a.length; i++){
    if (a == b){ 
        shiftRight = i;
        break;
    }
    a = shift(a);
}

shiftLeft = a.length - shiftRight;
process.stdout.write(Math.min(shiftLeft, shiftRight) + "\n");