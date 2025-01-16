import { Toaster } from "@/components/ui/sonner";
import { AuthProvider } from "@/contexts/auth-context";
import { AppRouter } from "@/router/app-router";
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
      <Toaster />
    </AuthProvider>
  )
}

export default App
