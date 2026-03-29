import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from '@/types/auth';
import { authApi } from '@/services/authService';

const DEMO_USER: User = {
  id: '1',
  email: 'admin@edumanager.com',
  name: 'Admin User',
  role: 'admin',
  avatar: undefined,
};

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  clearError: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      login: async (email: string, password: string) => {
        set({ isLoading: true, error: null });
        
        // Demo mode: accept demo credentials without backend
        if (email === 'admin@edumanager.com' && password === 'admin123') {
          await new Promise(resolve => setTimeout(resolve, 800)); // Simulate API delay
          
          const mockToken = 'demo_jwt_token_' + Date.now();
          localStorage.setItem('auth_token', mockToken);
          
          set({
            user: DEMO_USER,
            token: mockToken,
            isAuthenticated: true,
            isLoading: false,
            error: null,
          });
          return;
        }
        
        // Try real API call
        try {
          const response = await authApi.login({ email, password });
          
          localStorage.setItem('auth_token', response.token);
          
          set({
            user: response.user,
            token: response.token,
            isAuthenticated: true,
            isLoading: false,
            error: null,
          });
        } catch (err) {
          set({
            error: err instanceof Error ? err.message : 'Invalid credentials',
            isLoading: false,
          });
          throw err;
        }
      },

      logout: async () => {
        // Skip API call in demo mode
        if (get().token?.startsWith('demo_jwt_token_')) {
          localStorage.removeItem('auth_token');
          
          set({
            user: null,
            token: null,
            isAuthenticated: false,
            error: null,
          });
          return;
        }
        
        try {
          await authApi.logout();
        } catch {
          // Ignore logout errors
        }
        
        localStorage.removeItem('auth_token');
        
        set({
          user: null,
          token: null,
          isAuthenticated: false,
          error: null,
        });
      },

      clearError: () => set({ error: null }),
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({ user: state.user, token: state.token, isAuthenticated: state.isAuthenticated }),
    }
  )
);
