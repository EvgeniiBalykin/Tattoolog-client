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

export interface ISocialMedia {
  social_media_type: {
    name: string;
  };
  link: string;
}

export interface IProfileData {
  about?: string;
  avatar?: string;
  salons_and_masters?: [];
  status?: string;
  country?: any;
  phone_number?: string;
  city?: any;
  birthday?: Date;
  user: {
    email?: string;
    first_name?: string;
    last_name?: string;
    role?: string;
    id?: number;
  };
  social_media_profile?: ISocialMedia[];
}

export interface ICatalogData {
  count: number;
  next: string;
  previous: string;
  results: IProfileData[];
}

export interface ICountriesData {
  id: number;
  name: string;
  country: {
    id: number;
    name: string;
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

export interface IDescriptionIcons {
  title?: string;
  subtitle: string;
  icon: string;
  md?: number;
  sm?: number;
  xs?: number;
}

export interface IMainImageBox {
  title: string;
  subtitle: string;
  buttons: { text: string; link: string }[];
  img: string;
}

export interface IBlogPost {
  body: string;
  created_at: Date;
  id: number;
  image: string;
  meta_description: string;
  meta_keywords: string;
  meta_title_tag: string;
  opengraph_description: string;
  opengraph_title: string;
  slug: string;
  title: string;
}

export interface IPostData {
  count: number;
  next: string;
  previous: string;
  results: IBlogPost[];
}

export interface IPartnersData {
  name: string;
  link: string;
  logo: string;
}
