/* Task 1 */

/* Put your code here */
word = process.argv[2];
excp = "РКНркн";

for (i = 0; i< word.length; i++){
    for (j = 0; j < excp.length; j++){
        if (word.charAt(i) == excp.charAt(j)){
            word = word.substring(0, i) + word.substring(i+1);
            i--;
        }
    }
}
process.stdout.write(word + "\n");