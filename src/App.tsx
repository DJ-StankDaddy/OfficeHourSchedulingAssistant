import React, { useEffect } from 'react'
import './App.css'
import './index.css'
//Controllers
import {useAuthController} from './Controllers/useAuthController'
import {useAppointmentsController} from './Controllers/userAppointmentController'
import {useOfficeHoursController} from './Controllers/useOfficeHourController'
import {useNotificationController} from './Controllers/useNotificationController'
//Views
import {LoginView} from './Views/LoginView'
import {StudentDashboardView} from './Views/StudentDashboardView'
import {} from './Views/ProfessorDashboardView'

const App: React.FC = () => {
  //initializing controllers
  const authController = useAuthController();
    const officeHoursController = useOfficeHoursController();
    const appointmentsController = useAppointmentsController(
      authController.authState.user?.id || null,
      authController.authState.user?.userType || 'student'
    );

  useEffect(() => {
    if (authController.authState.isAuthenticated) {
      officeHoursController.loadOfficeHours();
      appointmentsController.loadAppointments();
    }
  }, [authController.authState.isAuthenticated]);

  //Login Page if user is not authenticated
  if (!authController.authState.isAuthenticated) {
    return (
      <LoginView
        onLogin={authController.login}
        isLoading={authController.isLoading}
      />
    );
  }
  const { user } = authController.authState;

  //Student Dashboard
  if (user?.userType === 'student') {
    return (
      <StudentDashboardView
        user={user}
        officeHours={officeHoursController.officeHours}
        appointments={appointmentsController.appointments}
        onBookAppointment={appointmentsController.bookAppointment}
        onCancelAppointment={appointmentsController.cancelAppointment}
        onLogout={authController.logout}
      />
    );
  }
};





/*function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}
*/

export default App
