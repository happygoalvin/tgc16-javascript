// why the backtick string is special
// 1. backtick can have line and spacings
let letter = `Dear Sir,
Your bill of $500 is overdue on 31/01/2022.
Please make sure to pay your bills in time or late fees.

Regards,
Customer Service

Our motto "Customer is always paying us money"
`;

// console.log(letter);

let firstName = "Jane";
let lastName = "Smith";
let bill = 200;
let n = [1,2,3]
//2. you can easily sub variables into it
let formLetter = `
Dear ${firstName} ${lastName},

Your bill of $${bill} is due. If you do not pay,
there will be a 10% late charge, which will be $${bill * 0.1}.
${n}
`;

console.log(formLetter)
