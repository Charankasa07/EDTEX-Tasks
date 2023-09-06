export interface UserRegister{
    role:string,
    name:string,
    mobile:string,
    email:string,
    password:string,
    leaves:Leave[]
}
export interface UserLogin{
    email:string,
    password:string,
}
export interface Leave{
    id:string,
    name:string,
    type:string,
    startDate:string,
    endDate:string,
    reason:string,
    status:string
}