import React, { useState, createContext, useContext } from 'react';
import { GraduationCap, BookOpen, Mail, Lock, ArrowRight, Calendar, Clock, MapPin, Users, Bell, CheckCircle, Plus, X, Search } from 'lucide-react';

type UserType = 'student' | 'professor';

interface LoginViewProps {
  onLogin: (email: string, password: string, userType: UserType) => Promise<void>;
  isLoading: boolean;
}

const LoginView: React.FC<LoginViewProps> = ({ onLogin, isLoading }) => {
  const [userType, setUserType] = useState<UserType>('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (): Promise<void> => {
    await onLogin(email, password, userType);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-600 rounded-full mb-4">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Office Hours Portal</h1>
          <p className="text-gray-600">Sign in to manage or book office hours</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="grid grid-cols-2 gap-3 mb-6">
            <button
              onClick={() => setUserType('student')}
              className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all ${
                userType === 'student' ? 'border-indigo-600 bg-indigo-50 text-indigo-600' : 'border-gray-200 text-gray-600'
              }`}
            >
              <BookOpen className="w-8 h-8 mb-2" />
              <span className="font-semibold">Student</span>
            </button>
            
            <button
              onClick={() => setUserType('professor')}
              className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all ${
                userType === 'professor' ? 'border-indigo-600 bg-indigo-50 text-indigo-600' : 'border-gray-200 text-gray-600'
              }`}
            >
              <GraduationCap className="w-8 h-8 mb-2" />
              <span className="font-semibold">Professor</span>
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={`${userType}@university.edu`}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 outline-none"
                />
              </div>
            </div>

            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 disabled:opacity-50"
            >
              {isLoading ? 'Signing in...' : `Sign In as ${userType === 'student' ? 'Student' : 'Professor'}`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};