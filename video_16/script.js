// Script instructions go here!!!

const name = 'Bob';
const age = 35;

// Concatenation
const output1 = 'Hello, my name is ' + name + ' and I am ' + age + ' years old.';
console.log(output1);

// String Literal / Template Literal & Variable Interpolation
const output2 = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(output2);

// Multi-line Strings
const multi1 = "Line 1\nLine 2";
console.log(multi1);

const multi2 = `Line 1
Line 2
`;
console.log(multi2);

// Advanced
const price = 40.00;
const tax_rate_percent = 1.0;

const total = price + price * tax_rate_percent / 100;
const result1 = 'Your price is $' + price + ' with ' + tax_rate_percent + '% tax for a total of $' + total.toFixed(2) + '.';
console.log(result1);

const result2 = `Your price is $${price} with ${tax_rate_percent}% tax for a total of $${(price + price * tax_rate_percent / 100).toFixed(2)}.`
console.log(result2);

function calculate_total(price, tax_rate_percent) {
    return price + price * tax_rate_percent / 100;
}

const result3 = `Your price is $${price} with ${tax_rate_percent}% tax for a total of $${calculate_total(price, tax_rate_percent).toFixed(2)}.`
console.log(result2);
