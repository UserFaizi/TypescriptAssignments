#! /usr/bin/env node

import { add, div, mul, sub } from "./add.js";
import inquirer from "inquirer";
console.log('Please enter the value');

const asnwers = await inquirer.prompt([
    {
        name: "nums",
        message: "Enter numbers (separated by commas)",
        filter: (input) => input.split(',').map(Number)
    },
    {
        name: "operations",
        type: 'rawlist',
        message: "Please Select the Operation",
        choices: ['+', '-','*','/'],

            }
])
let result;

switch (asnwers.operations) {
    case '+':
        result = add(...asnwers.nums);
        break;
        case '-':
            result = sub(...asnwers.nums);
            break;
            case '*':
                result = mul(...asnwers.nums);
                break;
                case '/':
                    result = div(...asnwers.nums);
                    break;
        default:
            console.log("No Operation Selected");
            break;
    }

console.log(result);






