import {User, UserType, OfficeHour, Appointment} from '../Models/types'

class ApiService {
    // Simulate API delay
    private delay(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async login(email: string, password: string, userType: UserType): Promise<User>{
        // Simulate time to authenticate
        await this.delay(1000);
        return {
        id: 1,
        email,
        userType,
        name: userType === 'student' ? 'John Doe' : 'Dr. Smith'
        };
    }

    async getOfficeHours(): Promise<OfficeHour[]> {
    await this.delay(500);
    return [
      {
        id: 1,
        professorId: 1,
        professorName: 'Dr. Smith',
        day: 'Monday',
        time: '2:00 PM - 4:00 PM',
        location: 'Office 225, Potter Hall',
        type: 'Open Hours',
        capacity: 'Up to 3 students',
        available: 2
      },
      {
        id: 2,
        professorId: 2,
        professorName: 'Dr. Johnson',
        day: 'Tuesday',
        time: '10:00 AM - 12:00 PM',
        location: 'Office 301, Potter Hall',
        type: 'By Appointment',
        capacity: 'Individual meetings',
        available: 1
      }
    ];
  }
  
  async getAppointments(userId: number, userType: UserType): Promise<Appointment[]> {
    await this.delay(500);
    if (userType === 'student') {
      return [
        {
          id: 1,
          officeHourId: 1,
          studentId: userId,
          professorId: 1,
          professorName: 'Dr. Smith',
          date: 'Dec 9, 2024',
          time: '2:30 PM',
          location: 'Office 225, Potter Hall',
          status: 'confirmed'
        }
      ];
    } else {
      return [
        {
          id: 1,
          officeHourId: 1,
          studentId: 2,
          professorId: userId,
          professorName: 'John Doe',
          date: 'Dec 9, 2024',
          time: '2:30 PM',
          location: 'Office 225, Potter Hall',
          status: 'confirmed'
        }
      ];
    }
  }

  async bookAppointment(officeHourId: number, studentId: number): Promise<Appointment> {
    await this.delay(500);
    return {
      id: Date.now(),
      officeHourId,
      studentId,
      professorId: 1,
      professorName: 'Dr. Smith',
      date: 'Dec 12, 2024',
      time: '3:00 PM',
      location: 'Office 225, Potter Hall',
      status: 'pending'
    };
  }

  async sendNotification(type: string, recipients: number[]): Promise<boolean> {
    await this.delay(500);
    return true;
  }
}

//instantiates an ApiService object
export const apiService = new ApiService; 