class ApiService {
    // Simulate API delay
    private delay(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async login(email: string, password: string, userType: UserType): Promise<User>{
        // Simulate authentication
        await this.delay(1000);
        return {
        id: 1,
        email,
        userType,
        name: userType === 'student' ? 'John Doe' : 'Dr. Smith'
        };
    }
}

//instantiates an ApiService object
const apiService = new ApiService; 