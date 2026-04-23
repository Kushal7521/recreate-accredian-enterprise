export interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  employees: string;
  interest: string;
}

export interface LeadResponse {
  success: boolean;
  message: string;
  data?: LeadFormData;
}

export interface Program {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  category: string;
}

export interface Stat {
  label: string;
  value: string;
  description?: string;
}

export interface Step {
  number: number;
  title: string;
  description: string;
}
