import LoginForm from './Components/LoginForm';
import { useMacros } from './hooks/useMacros';
import AppInternals from './ui/AppInternals';

export default function App() {
    const { isLoggedIn } = useMacros();
    return isLoggedIn ? <AppInternals /> : <LoginForm />;
}
