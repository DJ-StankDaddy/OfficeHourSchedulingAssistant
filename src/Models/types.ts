//Initializes Student and Professor user objects

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
