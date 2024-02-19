import FormsFirebase from "./page/FormsFirebase";
import { AuthProvider } from "./context/AuthContext";
import './App.css'

function App() {


  return (
    <div>
      <AuthProvider>
        <h1>Coffee&&Code</h1>
        <FormsFirebase />
      </AuthProvider>
    </div>
 
  );
}

export default App
