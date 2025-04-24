// Script instructions go here!!!

// code blocks
{
    // BLOCK OF CODE
}

// if
let temp = 75;
console.log('temp = ', temp);
if(temp < 70)
{
    console.log('inside the if statement');
}

// if / else
if(temp < 70)
{
    console.log('less than 70');
}
else
{
    console.log('not less than 70');
}

// if / elseif / else
if(temp < 70)
{
    console.log('less than 70');
}
else if(temp > 70)
{
    console.log('greater than 70');
}
else
{
    console.log('equal to 70');
}

// switch / case / break / default
let color = 'pink';
switch(color)
{
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    case 'green':
        console.log('color is green');
        break;
    default:
        console.log('color is', color);
}

// ternary operator ?
let score = 78;

let color2 = null;
if(score >= 80)
{
    color2 = 'green';
}
else
{
    color2 = 'black';
}

let color3 = score>=80 ? 'green' : 'black';

// null coalescing operator ??
let speed = null;
let default_speed = 30;

let variable = speed ?? default_speed;
console.log('variable=', variable);
