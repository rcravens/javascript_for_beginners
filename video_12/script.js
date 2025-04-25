// Script instructions go here!!!

let colors = ['red', 'green', 'blue', 'white', 'black', 'orange', 'purple', 'pink'];

// for loop
for(let i=0; i<colors.length; i++)
{
    console.log('for', colors[i]);
}

// for/of loop
for(let color of colors)
{
    console.log('for of', color);
}

// forEach loop
colors.forEach(function(element){
   console.log('forEach', element);
});