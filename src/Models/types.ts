//Initializes Student and Professor user objects

type UserType = 'student' | 'professor';

interface User{
    id: number;
    email: string; 
    userType: UserType;
    name: string; 
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}
