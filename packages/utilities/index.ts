
type Add = (a:number, b:number) => number
type Divide = (a:number, b:number) => number

type Square = (a:number) => number
export const add: Add = (a, b) =>  a+b

export const square: Square = (a) => a*a


export const hello = () => 'Hello'


export const divide: Divide = (a,b) => a/b