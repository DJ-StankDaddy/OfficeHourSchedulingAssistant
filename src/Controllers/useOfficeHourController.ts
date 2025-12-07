import { useState } from 'react';
import { apiService } from '../Services/ApiService';
import { OfficeHour } from '../Models/types';

export const useOfficeHoursController = () => {
  const [officeHours, setOfficeHours] = useState<OfficeHour[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadOfficeHours = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const hours = await apiService.getOfficeHours();
      setOfficeHours(hours);
    } 
    catch (err) {
      console.error('Failed to load office hours', err);
    } 
    finally {
      setIsLoading(false);
    }
  };

  const searchOfficeHours = (searchTerm: string): OfficeHour[] => {
    if (!searchTerm) return officeHours;
    return officeHours.filter(hour =>
      hour.professorName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return { officeHours, isLoading, loadOfficeHours, searchOfficeHours };
};