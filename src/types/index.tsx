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

export interface IUserData {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  re_password: string;
  role: string;
}

export interface IProfileData {
  about: string;
  avatar: string;
  salons_and_masters: [];
  status: string;
  user: {
    email: string;
    first_name: string;
    last_name: string;
    role: string;
    id: number;
  };
}

export interface ILoginBody {
  email: string;
  password: string;
}
export interface IProfilePortfolio {
  id?: number;
  profile: number | null;
  photo_post: { id: number; post: number; photo: string | string }[];
  description?: string;
  work_type?: {
    id?: number;
    name: string;
    description?: string;
  };
  created_at?: string;
}

export interface IWorkTypes {
  id: number;
  name: string;
  description: string;
}

export interface ISendPost {
  profile?: number | string | null;
  photo_post: { photo: string }[];
  description: string;
  work_type: { name: string; description: string };
}

export interface IUpdateProfile {
  user?: {
    email?: string;
    first_name?: string;
    last_name?: string;
    password?: string;
    role?: string;
  };
  avatar?: any;
  about?: string;
}
