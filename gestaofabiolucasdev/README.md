# Fábio Lucas Dev — ERP & Plataforma Operacional Unificada

> **Ecossistema Completo de Gestão, Acompanhamento de Clientes, Cursos EAD, Provas e Emissão de Comprovantes em Flutter & Firebase.**

---

## 🚀 Sobre o Projeto
O **`gestaofabiolucasdev`** unifica a plataforma corporativa da Fábio Lucas Dev em uma única aplicação Flutter moderna (Material Design 3 Dark), integrando tanto o **ERP Operacional Multi-Perfil (Client Tracker)** quanto a **Landing Page Oficial**, o **Catálogo de Cursos EAD**, a **Central de Provas em Vídeo** e o **Emissor de Comprovantes PineapplePay**.

- **Projeto Firebase**: `fabiolucasdev-a3ab4` / `fabiolucas-c5448`
- **Ambiente**: Flutter 3.8+ / Dart 3.8+
- **Backend**: Firebase Cloud Functions v2 (TypeScript / Node 22)
- **Plataformas Homologadas**: Android, iOS, Web, Windows, macOS e Linux

---

## 🗂️ Arquitetura do Projeto

```
gestaofabiolucasdev/
├── lib/
│   ├── main.dart                      # Ponto de entrada com setPathUrlStrategy() e MaterialApp
│   ├── routes/
│   │   └── route_generator.dart       # Roteamento central com animações suaves de transição
│   ├── controllers/
│   │   ├── splash_screen.dart         # Inicialização do Firebase e branding animado com Lottie
│   │   └── receipt_controller.dart    # Gerador de PDF PineapplePay com cálculo de Cashback
│   ├── screens/
│   │   ├── auth_screens.dart          # Telas de Login Exclusivo e Seletor de Perfil RBAC
│   │   ├── dashboard_screen.dart      # Dashboard dinâmico por perfil com barra de atalhos rápidos
│   │   ├── landing_page_screen.dart   # Landing Page pública em Flutter com Drawer
│   │   ├── drawer_landing_page.dart   # Menu lateral de navegação unificado
│   │   ├── cursos_screen.dart         # Catálogo de Cursos (Iniciante, Intermediário, Avançado) + Checkout
│   │   └── provas_screen.dart         # Player de vídeo para provas.mp4 com controle de velocidade
│   ├── models/
│   │   ├── models.dart                # Activity, ProjectStats e ActivityType
│   │   └── enhanced_models.dart       # UserRole, Task, ToolData e FinanceData
│   ├── data/
│   │   ├── mock_data.dart             # Commits e histórico de timeline
│   │   └── enhanced_mock_data.dart    # Ferramentas técnicas de Dev/Design e financeiro
│   ├── widgets/
│   │   ├── activity_cards.dart        # Cards de Commit (badge F/L), Reunião e Atualizações
│   │   └── advanced_widgets.dart      # Carteira Digital (saques) e Grid de Ferramentas interativo
│   ├── theme/
│   │   └── app_theme.dart             # Material 3 Dark Theme (#141218 / #1C1B1F / #6C63FF)
│   └── utils/
│       └── notifications.dart         # Snackbars flutuantes com glow e desfoque moderno
├── src/                               # Acervo completo de artes e mídias
│   ├── animation/                     # 14 animações Lottie (carregamento, sucesso, erro, etc.)
│   ├── cartoes/                       # 13 bandeiras de cartão em SVG (Visa, Elo, Amex, etc.)
│   ├── icones/                        # Marcadores de mapa e ícones auxiliares
│   ├── imagens/                       # SVGs de modais veiculares, pagamentos e marcas
│   └── videos/                        # Vídeo de provas (provas.mp4)
├── functions/                         # Backend em Cloud Functions (Node 22 / TypeScript)
│   ├── src/index.ts                   # dynamicMetaTagsUpdate (SEO WhatsApp) e onNewToken (FCM)
│   └── package.json                   # Dependências do backend
├── .github/workflows/                 # Pipelines CI/CD do GitHub Actions
├── firebase.json                      # Configuração de Hosting e Functions com rewrites
└── pubspec.yaml                       # Manifesto completo de dependências e assets
```

---

## 👥 Perfis de Acesso (RBAC)

1. **Cliente (`UserRole.client`)**:
   - Totalizador de commits e horas dedicadas.
   - Timeline interativa com commits identificados pelo badge `<F/L>`.
   - Links diretos para reuniões por videoconferência e feed semanal em vídeo.
   - Badges da Google Play e App Store.

2. **Programador (`UserRole.programmer`)**:
   - Saldo disponível e pendente na carteira digital com solicitação de saque.
   - Grid de ferramentas com atalhos para: Terminal Cloud, Pipeline CI/CD, Latência de APIs, Containers K8S e Alertas.

3. **Designer (`UserRole.designer`)**:
   - Sincronização em tempo real do Figma, biblioteca v2.1 de tokens, heatmaps de UX e exportação de handoff.

4. **Administrador (`UserRole.admin`)**:
   - Visão gerencial completa, relatórios de tarefas prioritárias e métricas da equipe.

---

## 🗺️ Mapa de Rotas

| Rota | Tela | Descrição |
| :--- | :--- | :--- |
| `/` ou `/splash` | `SplashScreen` | Abertura com Lottie, verificação de Firebase e redirecionamento. |
| `/login` | `LoginScreen` | Acesso exclusivo com credenciais. |
| `/roles` | `RoleSelectionScreen` | Seletor visual dos 4 perfis operacionais. |
| `/dashboard` | `DashboardScreen` | Painel operacional customizado pelo perfil selecionado. |
| `/landing` | `LandingPageScreen` | Landing page oficial com apresentação de produto e pilares de engenharia. |
| `/cursos` | `CursosScreen` | Catálogo de treinamentos práticos com modal de checkout. |
| `/provas` | `ProvasScreen` | Player de vídeo demonstrando evidências de software e testes de 60/120 FPS. |
| `/comprovante` | `ReceiptScreen` | Emissão e visualização de comprovante PineapplePay em PDF com `printing`. |

---

## ⚡ Backend Cloud Functions (`functions/`)

- **`dynamicMetaTagsUpdate`**: Intercepta acessos de robôs e pré-visualizações de redes sociais (WhatsApp, Facebook, Twitter, Telegram). Injeta tags Open Graph dinâmicas (`og:title`, `og:description`, `og:image`) para exibir cards profissionais ao compartilhar links.
- **`onNewToken`**: Registra novos tokens do Firebase Cloud Messaging (FCM) no tópico global `'todos'`.
- **`healthCheck`**: Endpoint de monitoramento de disponibilidade das APIs.

---

## 🛠️ Comandos de Desenvolvimento

```bash
# Obter dependências do Flutter
flutter pub get

# Executar no navegador Web
flutter run -d chrome

# Executar como App Desktop Windows
flutter run -d windows

# Compilar para Web em produção
flutter build web --release

# Compilar Cloud Functions
cd functions && npm run build
```
