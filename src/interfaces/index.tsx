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
  first_name?: string;
  last_name?: string;
  username?: string;
  password?: string;
  re_password?: string;
  role?: string;
  email?: string;
  id?: number;
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
  birthday?: Date | string;
  user: IUserData;
  social_media_profile?: ISocialMedia[];
  average_rating?: string;
  count_visit?: number;
  moderation_profile_associate?: IAssociate[];
  open_to_work?: boolean;
  mentor?: boolean;
  relocate?: boolean;
}

export interface IAssociate {
  id?: any;
  name?: any;
  profile?: number;
  type?: {
    name: string;
    id: number;
  };
  status?: Statuses;
  comment?: string;
}

export interface IAssociationType {
  id: number;
  name: string;
  link: string;
}

export type Statuses = 'pending' | 'approved' | 'canceled';

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
  username: string;
  password: string;
}
export interface IProfilePortfolio {
  count: number;
  next: number | null;
  previous: number | null;
  results: IProfilePost[];
}

export interface IProfilePost {
  id?: number;
  profile: number | null;
  photo_post: { id: number; post: number; photo: string | string }[];
  description: string;
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
  subtitle?: string;
  extraSubtitle?: string;
  joinTitle?: string;
  joinSubtitle?: string;
  buttons?: { text: string; link: string }[];
  img: string;
}

export interface IBlogBody {
  title: string;
  body: string;
  blog_body_photo: { photo: string; alt_name: string }[];
}

export interface IBlogPost {
  id: number;
  language: string;
  country: string;
  image: string;
  title: string;
  created_at: Date;
  slug: string;
  blog_body: IBlogBody[];
  blog_meta: {
    meta_title_tag: string;
    meta_description: string;
    meta_keywords: string;
    opengraph_title: string;
    opengraph_description: string;
    opengraph_image: string;
  };
  blog_photo_carousel: { photo: string }[];
}

export interface IFestivalPost {
  id: number;
  image: string;
  title: string;
  about: string;
  rules: string;
  slug: string;
  date_end: Date;
  created_at: Date;
  form_url: string;
}

export interface IPostData {
  count: number;
  next: string;
  previous: string;
  results: IBlogPost[];
}

export interface IFestivalData {
  count: number;
  next: string;
  previous: string;
  results: IFestivalPost[];
}

export interface IPartnersData {
  name: string;
  link: string;
  logo: string;
  type?: string;
}

export interface IQueryData {
  isLoading: boolean;
  error: { data: any };
  isError: boolean;
  data: any;
}

export interface IAcceptData {
  uid?: string;
  token?: string;
}

export interface ISetNewPassword extends IAcceptData {
  new_password: string;
}

export interface IUserMark {
  profile: number;
  mark: number;
  comment?: string;
}
