//Initializes Student, Professor, authentication, OfficeHour, Apointment skeletons

export type UserType = 'student' | 'professor';

export interface User{
    id: number;
    email: string; 
    userType: UserType;
    name: string; 
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

export interface OfficeHour {
  id: number;
  professorId: number;
  professorName: string;
  day: string;
  time: string;
  location: string;
  type: string;
  capacity: string;
  available: number;
}

export interface Appointment {
  id: number;
  officeHourId: number;
  studentId: number;
  professorId: number;
  professorName: string;
  date: string;
  time: string;
  location: string;
  status: 'confirmed' | 'pending' | 'cancelled';
}
