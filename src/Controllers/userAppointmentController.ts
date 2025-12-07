import { useState } from 'react';
import { apiService } from '../Services/ApiService';
import { Appointment, UserType } from '../Models/types';

export const useAppointmentsController = (userId: number | null, userType: UserType) => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadAppointments = async (): Promise<void> => {
    if (!userId) return;
    setIsLoading(true);
    try {
      const apts = await apiService.getAppointments(userId, userType);
      setAppointments(apts);
    } 
    catch (err) {
      console.error('Failed to load appointments', err);
    } 
    finally {
      setIsLoading(false);
    }
  };

  const bookAppointment = async (officeHourId: number): Promise<void> => {
    if (!userId) return;
    try {
      const newApt = await apiService.bookAppointment(officeHourId, userId);
      setAppointments([...appointments, newApt]);
      alert('Appointment booked successfully!');
    } 
    catch (err) {
      alert('Failed to book appointment');
    }
  };

  const cancelAppointment = (appointmentId: number): void => {
    setAppointments(
      appointments.map(apt =>
        apt.id === appointmentId ? { ...apt, status: 'cancelled' as const } : apt
      )
    );
  };

  return { appointments, isLoading, loadAppointments, bookAppointment, cancelAppointment };
};