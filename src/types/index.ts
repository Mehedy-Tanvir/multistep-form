export interface FormData {
  name: string;
  email: string;
  address: string;
  phone: string;
  categories: string[];
}

export type FormErrors = {
  [K in keyof FormData]?: string;
};
