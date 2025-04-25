// Script instructions go here!!!

// for loops
// aaa ==> initialize variable
// bbb ==> boolean expression (execute if true)
// ccc ==> update my variable
for(let i=0; i<=5; i++)
{
    if(i===3) {
        continue;
    }
    console.log('for loop:', i);
}

// while loops
// ddd ==> boolean expression (execute if true)
let j = 0;
while(j<=5)
{
    console.log('while loop:', j);

    j++;
}

// do loops
// ddd ==> boolean expression (execute if true)
let k = 0;
do
{
    console.log('do loop:', k);

    k++;
}
while(k <= 5);

// break

// continue