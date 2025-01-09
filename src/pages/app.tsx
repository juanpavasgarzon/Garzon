import { Toaster } from "@/components/ui/sonner"
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from "@/contexts/auth-context";
import { AppRouter } from "@/router/app-router";

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
