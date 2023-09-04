export interface IRoutes {
  name: string;
  path: string;
  element: JSX.Element;
  variant?: string;
}

export interface ILanguages {
  name: string;
  country_code: string;
  code: string;
}

export interface IRegisterUser {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  re_password: string;
  role: string;
}

export interface ILoginBody {
  email: string;
  password: string;
}
