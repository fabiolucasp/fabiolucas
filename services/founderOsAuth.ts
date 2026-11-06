export type UserRole = 'admin' | 'client';

export interface FounderUser {
  role: UserRole;
  name: string;
  title: string;
  email: string;
  company?: string;
  projectId?: string;
}

export const ADMIN_PROFILE: FounderUser = {
  role: 'admin',
  name: 'Fábio Lucas',
  title: 'Desenvolvedor Master & Gestor de Projetos',
  email: 'fabio@fabiolucas.com',
  company: 'Fábio Lucas Dev Studio',
};

export const CLIENT_PROFILES: FounderUser[] = [
  {
    role: 'client',
    name: 'Distribuidora Centro-Oeste',
    title: 'Diretoria de Operações',
    email: 'gestao@autopartsguide.com.br',
    company: 'AutoParts Guide B2B',
    projectId: 'autoparts',
  },
  {
    role: 'client',
    name: 'Pineapple Soluções & Maquininhas',
    title: 'CTO & Head de Meios de Pagamento',
    email: 'operacoes@pineapplepay.com.br',
    company: 'Pineapple Pay Fintech',
    projectId: 'pineapplepay',
  },
  {
    role: 'client',
    name: 'Cooperativa Metropolitana de Mobilidade',
    title: 'Gestor de Mobilidade Urbana',
    email: 'mobilidade@gynmove.com.br',
    company: 'GynMove Passageiro & Motorista',
    projectId: 'gynmove-passenger',
  },
];

const STORAGE_KEY = 'founderos_user_session';

export function getStoredUser(): FounderUser | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed && (parsed.role === 'admin' || parsed.role === 'client')) {
      return parsed;
    }
    return null;
  } catch {
    return null;
  }
}

export function saveUser(user: FounderUser): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  } catch {
    // ignore
  }
}

export function clearUser(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
}

export function hasFullCrud(user: FounderUser | null): boolean {
  return user?.role === 'admin';
}
