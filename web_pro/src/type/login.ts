export interface LoginSignIn {
  password: string
  email: string
}
export interface LoginSignUp extends LoginSignIn {
  username: string
}

const LoginType = {
  
}