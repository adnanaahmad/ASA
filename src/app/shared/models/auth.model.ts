export interface LoginTypes {
  loginType: string;
  value: string;
}

export interface LoginFormData {
  username: string;
  password: string;
  authtype: string;
  hidden_password?:string;
}

export interface LoginResponse {
  access_token: string;
  refresh_token: string;
  scope: string;
  token_type: string;
  expires_in: number;
}
