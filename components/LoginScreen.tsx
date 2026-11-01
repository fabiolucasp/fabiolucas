import React, { useState } from 'react';
import { LogIn, User, Lock, ArrowLeft } from 'lucide-react';
import { NavLink } from 'react-router-dom';
// import { signInWithEmailAndPassword } from 'firebase/auth'; // Future Firebase Auth import
// import { auth } from '../services/firebaseConfig'; // Future Firebase Auth import

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    // Future Firebase Auth logic here
    try {
      console.log('Attempting login with:', email, password);
      // await signInWithEmailAndPassword(auth, email, password);
      // Redirect or update UI on successful login
      console.log('Login successful (simulated)');
    } catch (err: any) {
      setError(err.message || 'Erro ao fazer login.');
      console.error('Login error (simulated):', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#000000] py-20 px-6 relative">
      <NavLink to="/" className="absolute top-8 left-8 text-[#AAAAAA] hover:text-[#44D62C] transition-colors flex items-center gap-2">
        <ArrowLeft size={20} /> Voltar
      </NavLink>

      <div className="bg-[#0A0A0A] p-8 md:p-12 rounded-2xl border border-[#333] max-w-md w-full shadow-2xl animate-fade-in-up">
        <div className="text-center mb-10">
          <LogIn size={48} className="text-[#44D62C] mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-[#EEEEEE] font-mono">Acesso Restrito</h2>
          <p className="text-[#AAAAAA] mt-2 font-sans">Entre para acessar seu painel de cliente ou materiais exclusivos.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-[#AAAAAA] mb-2 font-mono">Email</label>
            <div className="relative">
              <input
                type="email"
                className="w-full bg-[#000] border border-[#333] rounded-lg pl-12 pr-4 py-3 text-[#EEEEEE] focus:outline-none focus:border-[#44D62C] focus:ring-1 focus:ring-[#44D62C] transition-all font-mono"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <User size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#666]" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-[#AAAAAA] mb-2 font-mono">Senha</label>
            <div className="relative">
              <input
                type="password"
                className="w-full bg-[#000] border border-[#333] rounded-lg pl-12 pr-4 py-3 text-[#EEEEEE] focus:outline-none focus:border-[#44D62C] focus:ring-1 focus:ring-[#44D62C] transition-all font-mono"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Lock size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#666]" />
            </div>
          </div>
          
          {error && (
            <div className="text-red-500 text-sm text-center font-sans">{error}</div>
          )}

          <button 
            type="submit" 
            className="w-full bg-[#44D62C] text-[#000000] font-bold py-4 rounded-lg hover:bg-[#5aff3d] transition-colors uppercase tracking-widest text-sm font-mono disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>

        <p className="text-center text-sm text-[#AAAAAA] mt-8 font-sans">
          Esqueceu sua senha? <a href="#" className="text-[#44D62C] hover:underline">Recuperar acesso</a>
        </p>
      </div>
    </section>
  );
};

export default LoginScreen;
