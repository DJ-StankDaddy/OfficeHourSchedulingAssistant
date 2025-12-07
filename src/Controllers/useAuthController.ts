import {useState} from 'react'; 
import { AuthState, User, UserType } from '../Models/types';
import { apiService } from '../Services/ApiService';

export const useAuthController = () => {
    const [authState, setAuthState] = useState<AuthState>({
        user: null,
        isAuthenticated: false
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const login = async (email: string, password: string, userType: UserType): Promise<void> => {
        setIsLoading(true);
        setError(null);
        try {
        const user = await apiService.login(email, password, userType);
        setAuthState({
            user,
            isAuthenticated: true
        });
        } catch (err) {
        setError('Login failed');
        throw err;
        } finally {
        setIsLoading(false);
        }
    };

    const logout = (): void => {
        setAuthState({
        user: null,
        isAuthenticated: false
        });
    };  

    return { authState, isLoading, error, login, logout}; 
};