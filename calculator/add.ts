export const add = (...nums: number[]) => nums.reduce((total, num) => total + num);
export const sub = (...nums: number[]) => nums.reduce((total, num) => total - num);
export const mul = (...nums: number[]) => nums.reduce((total, num) => total * num);
export const div = (...nums: number[]) => nums.reduce((total, num) => total / num);