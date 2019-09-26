import base64encode from './base64encoders'

let input = 'Hello ts'
let output = 'SGVsbG8gV29ybGQ'
console.log("INPUT: ", input);
console.log("OUTPUT: ", base64encode(input));
console.log("EXPECT:", output);