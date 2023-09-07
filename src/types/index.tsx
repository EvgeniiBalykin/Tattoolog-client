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

export interface IProfileData {
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

export interface IPortfolioPost {
  id: number;
  post: number;
  photo: string;
}

export interface IProfilePortfolio {
  id: number;
  profile: number;
  photo_post: IPortfolioPost[];
  description: string;
  work_type: number;
  created_at: string;
}
