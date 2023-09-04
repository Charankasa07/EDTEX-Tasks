export interface UserRegister{
    id?:string,
    name : string,
    email : string,
    mobile : string,
    password : string,
    dob : string,
    role:string
}
export interface UserLogin{
    email:string,
    password:string
}
export interface Patron{
    name:string,
    email:string,
    mobile:string,
    dob:string
}