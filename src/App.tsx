import React, { useState } from 'react'
import './App.css'
import './index.css'
import {useAuthController} from './Controllers/useAuthController'
import {LoginView} from './Views/LoginView'

const App: React.FC = () => {
 const authController = useAuthController();
  //const officeHoursController = useOfficeHoursController();
  /*const appointmentsController = useAppointmentsController(
    authController.authState.user?.id || null,
    authController.authState.user?.userType || 'student'
  );*/
  if (!authController.authState.isAuthenticated) {
    return (
      <LoginView
        onLogin={authController.login}
        isLoading={authController.isLoading}
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
