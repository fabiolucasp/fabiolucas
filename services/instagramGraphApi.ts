/**
 * Serviço de Integração com a Instagram Graph API (Meta for Developers)
 * Gerencia tokens locais no navegador, consultas de perfil, mídias e métricas.
 */

export interface InstagramProfile {
  id: string;
  username: string;
  name: string;
  biography: string;
  profile_picture_url: string;
  followers_count: number;
  follows_count: number;
  media_count: number;
  website?: string;
}

export interface InstagramMedia {
  id: string;
  caption: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp: string;
  like_count: number;
  comments_count: number;
  insights?: {
    reach: number;
    impressions: number;
    saved: number;
    engagement: number;
  };
}

export interface GraphApiConfig {
  accessToken: string;
  instagramAccountId: string;
  isLive: boolean;
}

const STORAGE_KEY_TOKEN = 'fabiolucas_ig_token';
const STORAGE_KEY_ACCOUNT = 'fabiolucas_ig_account_id';

export function getStoredGraphConfig(): GraphApiConfig {
  if (typeof window === 'undefined') {
    return { accessToken: '', instagramAccountId: '', isLive: false };
  }
  const accessToken = localStorage.getItem(STORAGE_KEY_TOKEN) || '';
  const instagramAccountId = localStorage.getItem(STORAGE_KEY_ACCOUNT) || '';
  return {
    accessToken,
    instagramAccountId,
    isLive: Boolean(accessToken && instagramAccountId)
  };
}

export function saveGraphConfig(accessToken: string, instagramAccountId: string) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY_TOKEN, accessToken.trim());
  localStorage.setItem(STORAGE_KEY_ACCOUNT, instagramAccountId.trim());
}

export function clearGraphConfig() {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY_TOKEN);
  localStorage.removeItem(STORAGE_KEY_ACCOUNT);
}

// MOCK DATA: Fornece experiência completa e rica caso a API ainda não esteja com token configurado
export const MOCK_PROFILE: InstagramProfile = {
  id: '17841400012345678',
  username: 'fabiolucasdev',
  name: 'Fábio Lucas | Flutter & Cloud',
  biography: '🚀 Desenvolvedor Flutter & Full-Stack\n📲 Criador dos apps GynMove, AutoParts Guide & Bicho Mimado\n📚 Cursos e E-books práticos de programação\n⚡ Compartilhando arquitetura, código e negócios tech',
  profile_picture_url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
  followers_count: 14850,
  follows_count: 412,
  media_count: 94,
  website: 'https://fabiolucas.com'
};

export const MOCK_MEDIA: InstagramMedia[] = [
  {
    id: 'post_1',
    caption: 'Como estruturamos a Prova de Vida Biométrica em 7 Etapas no GynMove 🚀📲\n\nNeste carrossel, explico a arquitetura de visão computacional e estabilização de câmera que desenvolvemos em Flutter para validar identidade em tempo real sem sobrecarregar o hardware do motorista.\n\nSalva esse post para consultar quando implementar biometria no seu app! 💾👇\n\n#Flutter #MobileDeveloper #Biometria #CleanCode #Dart',
    media_type: 'CAROUSEL_ALBUM',
    media_url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    permalink: 'https://www.instagram.com/fabiolucasdev/',
    timestamp: '2026-11-04T18:30:00Z',
    like_count: 542,
    comments_count: 68,
    insights: {
      reach: 6820,
      impressions: 9140,
      saved: 384,
      engagement: 994
    }
  },
  {
    id: 'post_2',
    caption: 'TaxiDog com Navegação Turn-by-Turn nativa no Flutter: Case Bicho Mimado 🐾🚗\n\nIntegrar o Google Navigation SDK em um super app pet care foi um dos desafios técnicos mais empolgantes do ano. Veja como calculamos rotas de ida e volta e telemetria de viagem.\n\nO que você achou dessa solução? Deixe sua dúvida nos comentários!\n\n#FlutterDev #GoogleMaps #MobileArchitecture #Firebase #PetTech',
    media_type: 'IMAGE',
    media_url: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=800&auto=format&fit=crop',
    permalink: 'https://www.instagram.com/fabiolucasdev/',
    timestamp: '2026-11-02T14:15:00Z',
    like_count: 618,
    comments_count: 82,
    insights: {
      reach: 7450,
      impressions: 10200,
      saved: 410,
      engagement: 1110
    }
  },
  {
    id: 'post_3',
    caption: '5 Erros clássicos ao gerenciar estado no Flutter (e como evitar) ⚠️💡\n\n1. Reconstruir a árvore inteira de widgets sem necessidade\n2. Ignorar o dispose de Controllers e Streams\n3. Misturar lógica de negócio diretamente dentro da UI\n4. Não usar imutabilidade nos Models\n5. Falta de testes unitários nos Providers/Blocs\n\nCompartilhe com aquele amigo que está começando no Flutter! 🚀\n\n#FlutterBrasil #DartLang #DesenvolvimentoMobile #Programacao',
    media_type: 'CAROUSEL_ALBUM',
    media_url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop',
    permalink: 'https://www.instagram.com/fabiolucasdev/',
    timestamp: '2026-10-30T19:00:00Z',
    like_count: 890,
    comments_count: 114,
    insights: {
      reach: 11200,
      impressions: 15400,
      saved: 780,
      engagement: 1784
    }
  },
  {
    id: 'post_4',
    caption: 'Do Figma ao Código de Produção: Criando o Design System do AutoParts Guide 🎨⚙️\n\nComo padronizamos tokens, componentes reutilizáveis e fluxos de checkout tanto para o App do Cliente quanto para o Painel do Lojista da Vila Canaã.\n\nDesign consistente acelera o desenvolvimento em 3x.\n\n#DesignSystem #FigmaToCode #UIUX #FlutterMobile #AutoParts',
    media_type: 'IMAGE',
    media_url: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=800&auto=format&fit=crop',
    permalink: 'https://www.instagram.com/fabiolucasdev/',
    timestamp: '2026-10-27T17:40:00Z',
    like_count: 476,
    comments_count: 45,
    insights: {
      reach: 5900,
      impressions: 8100,
      saved: 290,
      engagement: 811
    }
  },
  {
    id: 'post_5',
    caption: 'Vídeo novo no ar: Isolando Finanças Pessoais e Custos Veiculares no VoltFinance 📊⚡\n\nMostrei na prática como aplicar arquitetura MVC reativa para motoristas e prestadores de serviço controlarem o custo por KM e a provisão do DAS MEI sem misturar com gastos de pessoa física.\n\nLink do artigo e código na bio!\n\n#Fintech #FlutterMVC #CleanArchitecture #ContabilidadeTech',
    media_type: 'VIDEO',
    media_url: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop',
    permalink: 'https://www.instagram.com/fabiolucasdev/',
    timestamp: '2026-10-24T12:00:00Z',
    like_count: 724,
    comments_count: 93,
    insights: {
      reach: 9800,
      impressions: 13200,
      saved: 560,
      engagement: 1377
    }
  }
];

/**
 * Consulta perfil oficial via Meta Graph API v21.0
 */
export async function fetchLiveInstagramProfile(accessToken: string, accountId: string): Promise<InstagramProfile> {
  const fields = 'id,username,name,biography,profile_picture_url,followers_count,follows_count,media_count,website';
  const url = `https://graph.facebook.com/v21.0/${accountId}?fields=${fields}&access_token=${accessToken}`;
  
  const res = await fetch(url);
  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.error?.message || `Erro ao consultar Instagram Graph API: HTTP ${res.status}`);
  }
  return await res.json();
}

/**
 * Consulta posts e mídias via Meta Graph API v21.0
 */
export async function fetchLiveInstagramMedia(accessToken: string, accountId: string): Promise<InstagramMedia[]> {
  const fields = 'id,caption,media_type,media_url,thumbnail_url,permalink,timestamp,like_count,comments_count';
  const url = `https://graph.facebook.com/v21.0/${accountId}/media?fields=${fields}&limit=25&access_token=${accessToken}`;
  
  const res = await fetch(url);
  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.error?.message || `Erro ao consultar mídias na Graph API: HTTP ${res.status}`);
  }
  const data = await res.json();
  return data.data || [];
}

/**
 * Consulta insights detalhados de uma mídia específica
 */
export async function fetchLiveMediaInsights(accessToken: string, mediaId: string) {
  const url = `https://graph.facebook.com/v21.0/${mediaId}/insights?metric=reach,impressions,saved,total_interactions&access_token=${accessToken}`;
  const res = await fetch(url);
  if (!res.ok) return null;
  const data = await res.json();
  const metrics = (data.data || []).reduce((acc: any, cur: any) => {
    acc[cur.name] = cur.values?.[0]?.value || 0;
    return acc;
  }, {});
  return {
    reach: metrics.reach || 0,
    impressions: metrics.impressions || 0,
    saved: metrics.saved || 0,
    engagement: metrics.total_interactions || 0
  };
}

/**
 * Publica mídia na conta do Instagram (Container + Publish)
 * Requer permissão instagram_content_publish
 */
export async function publishMediaToInstagram(
  accessToken: string,
  accountId: string,
  imageUrl: string,
  caption: string
): Promise<{ success: boolean; id?: string; error?: string }> {
  try {
    // Passo 1: Criar container de mídia
    const containerUrl = `https://graph.facebook.com/v21.0/${accountId}/media?image_url=${encodeURIComponent(imageUrl)}&caption=${encodeURIComponent(caption)}&access_token=${accessToken}`;
    const createRes = await fetch(containerUrl, { method: 'POST' });
    const createData = await createRes.json();
    if (!createRes.ok || !createData.id) {
      throw new Error(createData.error?.message || 'Falha ao criar container da mídia');
    }

    const creationId = createData.id;

    // Passo 2: Publicar container criado
    const publishUrl = `https://graph.facebook.com/v21.0/${accountId}/media_publish?creation_id=${creationId}&access_token=${accessToken}`;
    const pubRes = await fetch(publishUrl, { method: 'POST' });
    const pubData = await pubRes.json();
    if (!pubRes.ok || !pubData.id) {
      throw new Error(pubData.error?.message || 'Falha ao publicar mídia no Instagram');
    }

    return { success: true, id: pubData.id };
  } catch (err: any) {
    return { success: false, error: err.message || 'Erro inesperado na publicação' };
  }
}
