/* Task 3 */

/* Put your code here */
a = process.argv[2];
b = process.argv[3];

while(b != 0){
    temp = a;
    a = b;
    b = temp%b;
}

nod=Math.abs(a);
process.stdout.write(nod);