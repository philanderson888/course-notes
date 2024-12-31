export interface User {
  id: string;
  email: string;
}

export interface Contact {
  id: string;
  firstName: string;
  phoneNumber: string;
  userId: string;
  contactFrequencyDays: number;
  lastContactDate: string | null;
}

export interface AuthState {
  token: string | null;
  user: User | null;
}