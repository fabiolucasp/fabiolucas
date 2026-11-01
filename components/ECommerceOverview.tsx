import React, { useState } from 'react';
import { Book, ShoppingBag, DollarSign, Users, GraduationCap, Code2, Download, ArrowLeft, ChevronRight, Layout, Layers, Smartphone, Terminal, Rocket, CheckCircle2, FileText, Share2, Grid, Lock, Mail, Server, Zap, Database, BarChart3, ShieldCheck, Send, Camera, Heart, Film, Image, Repeat, Scroll, Monitor, Laptop, PlayCircle, Coins, Calculator, MessageSquare, Eye, Cpu, Battery, Sun, Activity, Video, MapPin, Truck, Wrench, Navigation, Link, AlertTriangle, Bot, Gavel, TrendingUp } from 'lucide-react';
import LottieIcon from './ui/LottieIcon';

interface ECommerceOverviewProps {
  type: 'ebooks' | 'courses' | 'products';
}

// ... [MANTER TODO O CONTEÚDO DOS DADOS CONSTANTES (FLUTTER_BOOK_DATA, EMAIL_MARKETING_BOOK_DATA, ETC...) SEM ALTERAÇÕES] ...
// Por brevidade, estou mantendo os dados ocultos no XML de resposta mas eles devem ser preservados no arquivo final.
// O modelo deve garantir que apenas a parte do componente React seja alterada ou o arquivo inteiro retornado com os dados.
// Vou retornar o arquivo inteiro para garantir integridade.

// --- DADOS DO E-BOOK FLUTTER BÁSICO ---
const FLUTTER_BOOK_DATA = {
  id: 'flutter-basico',
  title: "Flutter Básico - Widgets, Dart e Flutter",
  author: "Fábio Lucas",
  coverImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop",
  description: "O guia definitivo para iniciar sua jornada no desenvolvimento mobile multiplataforma. Domine a base antes de avançar.",
  chapters: [
    {
      id: 1,
      title: "Capítulo 1: Introdução",
      icon: <Rocket />,
      sections: [
        {
          title: "1.1. Apresentação",
          content: [
            "Bem-vindo ao E-book Flutter Básico - Widgets, Dart e Flutter!",
            "Este E-book tem como objetivo oferecer uma introdução ao desenvolvimento de aplicativos móveis com Flutter, uma ferramenta da Google que permite a criação de apps de alta qualidade para Android e iOS com uma única base de código.",
            "Se você é um iniciante em programação ou deseja aprimorar seus conhecimentos, este E-book é para você."
          ]
        },
        {
          title: "1.2. O que é Flutter?",
          content: [
            "Antes de começarmos, vamos entender o que é Flutter.",
            "Flutter é um framework da Google para a criação de aplicativos móveis multiplataforma (Android e iOS) com uma única base de código.",
            "Ele utiliza a linguagem de programação Dart e oferece uma ampla variedade de Widgets (componentes de interface gráfica) para construir layouts elegantes e responsivos.",
            "Com Flutter, é possível desenvolver aplicativos rapidamente e com alta performance, tornando-se uma das ferramentas mais populares para desenvolvimento de aplicativos móveis atualmente."
          ]
        },
        {
          title: "1.3. Vantagens de usar Flutter",
          content: [
            "Por que escolher Flutter para desenvolvimento de aplicativos móveis?",
            "Uma das principais vantagens é a possibilidade de desenvolver para múltiplas plataformas com uma única base de código.",
            "Outra vantagem é a rapidez no desenvolvimento, graças à vasta biblioteca de Widgets e ao Hot Reload, uma funcionalidade que permite visualizar as mudanças no aplicativo em tempo real.",
            "Além disso, Flutter oferece uma excelente performance, com apps rápidos e responsivos, e uma grande comunidade de desenvolvedores que compartilham conhecimentos e recursos."
          ]
        },
        {
            title: "1.4. Objetivos do E-book",
            content: [
                "Neste E-book, vamos oferecer uma introdução ao desenvolvimento de aplicativos móveis com Flutter.",
                "Vamos começar com uma explicação sobre Widgets, que são os componentes básicos de interface gráfica no Flutter.",
                "Em seguida, abordaremos o layout, mostrando como combinar os Widgets para criar interfaces atraentes e eficientes.",
                "Depois, vamos explorar a linguagem de programação Dart, que é usada para escrever aplicativos Flutter.",
                "Por fim, vamos unir tudo isso em um tutorial prático de desenvolvimento de aplicativos móveis com Flutter."
            ]
        },
        {
            title: "1.5. Como usar este E-book",
            highlight: true,
            content: [
                "Este E-book é destinado a desenvolvedores iniciantes ou com conhecimentos intermediários em programação.",
                "Ao longo do E-book, vamos utilizar exemplos de código e ilustrações para explicar os conceitos e técnicas de desenvolvimento.",
                "Para seguir o tutorial prático de desenvolvimento de aplicativos móveis com Flutter, é necessário ter um ambiente de desenvolvimento configurado. Vamos fornecer instruções sobre como configurar o ambiente em uma seção dedicada."
            ]
        }
      ]
    },
    {
        id: 2,
        title: "Capítulo 2: Widgets",
        icon: <Grid />,
        sections: [
            {
                title: "2.1. O que são Widgets?",
                content: [
                    "Widgets são componentes de interface gráfica no Flutter.",
                    "Eles são a base para construção de interfaces em aplicativos móveis com Flutter.",
                    "Todo elemento de interface gráfica em Flutter é um Widget, desde um simples botão até um layout complexo."
                ]
            },
            {
                title: "2.2. Tipos de Widgets",
                content: [
                    "Existem vários tipos de Widgets em Flutter, cada um com uma função específica. Neste E-book, vamos explorar os seguintes:",
                    "• Container: define uma área retangular com bordas opcionais, background e margens.",
                    "• Column: organiza Widgets verticalmente.",
                    "• Row: organiza Widgets horizontalmente.",
                    "• Text: exibe um texto na interface.",
                    "• Scaffold: define a estrutura básica de um aplicativo, incluindo o appBar, o drawer e o body.",
                    "• SizedBox: define um espaço em branco com tamanho fixo.",
                    "• Expanded: define um espaço flexível que ocupa todo o espaço disponível no eixo principal.",
                    "• Flexible: define um espaço flexível que pode ser redimensionado de acordo com a necessidade.",
                    "• ListView: exibe uma lista de Widgets que podem ser rolados para cima ou para baixo."
                ]
            },
            {
                title: "2.3. Propriedades dos Widgets",
                content: [
                    "Cada Widget em Flutter possui propriedades que podem ser usadas para personalizar a aparência e o comportamento do elemento de interface gráfica.",
                    "Algumas propriedades comuns incluem:",
                    "• child: define o Widget filho do elemento.",
                    "• padding: define o espaçamento interno do elemento.",
                    "• margin: define o espaçamento externo do elemento.",
                    "• color: define a cor de fundo do elemento.",
                    "• fontSize: define o tamanho da fonte para um elemento Text."
                ]
            },
            {
                title: "2.4. Exemplos de uso",
                content: [
                    "Para entender melhor como utilizar os Widgets, vamos mostrar exemplos de código para cada um dos tipos de Widgets mencionados anteriormente.",
                    "Cada exemplo irá ilustrar como configurar as propriedades do Widget para obter o efeito desejado."
                ]
            },
            {
                title: "2.5. Boas práticas",
                content: [
                    "Ao trabalhar com Widgets em Flutter, existem algumas boas práticas que podem ajudar a manter o código organizado e fácil de entender.",
                    "• Quebrar a interface em Widgets menores para facilitar a manutenção e a reutilização de código.",
                    "• Usar nomes significativos para os Widgets e suas propriedades.",
                    "• Separar o estilo do layout, definindo o estilo em um tema global e o layout em Widgets individuais."
                ]
            },
            {
                title: "2.6. Conclusão",
                content: [
                    "Os Widgets são a base para construção de interfaces em aplicativos móveis com Flutter.",
                    "Ao entender os tipos de Widgets disponíveis e como configurar suas propriedades, é possível criar interfaces elegantes e eficientes.",
                    "No próximo capítulo, vamos mostrar como combinar os Widgets para criar layouts personalizados em aplicativos Flutter."
                ]
            }
        ]
    },
    {
        id: 3,
        title: "Capítulo 3: Layout",
        icon: <Layout />,
        sections: [
            {
                title: "3.1. O que é Layout?",
                content: [
                    "Layout se refere à organização dos elementos de interface gráfica em um aplicativo móvel.",
                    "Um bom layout deve ser claro, fácil de usar e esteticamente agradável.",
                    "Em Flutter, os layouts são construídos a partir da combinação de diversos tipos de Widgets."
                ]
            },
            {
                title: "3.2. Como construir um Layout",
                content: [
                    "Para construir um layout em Flutter, é necessário escolher os Widgets adequados para cada elemento de interface gráfica e organizá-los de forma coerente.",
                    "Alguns dos tipos de Widgets que podem ser utilizados para construir layouts são:",
                    "• Containers: para definir áreas retangulares com bordas, background e margens.",
                    "• Rows e Columns: para organizar Widgets horizontal ou verticalmente.",
                    "• Expanded e Flexible: para definir espaços flexíveis que ocupam todo o espaço disponível.",
                    "• ListViews: para exibir uma lista de Widgets roláveis."
                ]
            },
            {
                title: "3.3. Exemplos de Layouts",
                content: [
                    "Para ilustrar como construir layouts em Flutter, vamos mostrar exemplos de layouts simples e complexos.",
                    "Cada exemplo irá mostrar a combinação dos tipos de Widgets mencionados anteriormente, e como configurar suas propriedades para obter o resultado desejado."
                ]
            },
            {
                title: "3.4. Boas práticas",
                content: [
                    "Algumas boas práticas que podem ajudar a construir layouts eficientes e fáceis de manter incluem:",
                    "• Usar a hierarquia de Widgets para construir layouts complexos, organizando Widgets menores em Widgets maiores.",
                    "• Evitar a aninhamento excessivo de Widgets, pois isso pode afetar negativamente o desempenho do aplicativo.",
                    "• Utilizar o MediaQuery para garantir que o layout se adapte a diferentes tamanhos de tela.",
                    "• Utilizar o Theme para aplicar estilos globais ao aplicativo, incluindo cores e fontes."
                ]
            },
            {
                title: "3.5. Conclusão",
                content: [
                    "Construir um layout eficiente e atraente em um aplicativo Flutter requer o uso adequado dos tipos de Widgets disponíveis.",
                    "Ao combinar diferentes tipos de Widgets e configurar suas propriedades, é possível criar layouts personalizados e eficientes.",
                    "No próximo capítulo, vamos explorar a linguagem de programação Dart, que é usada para desenvolver aplicativos Flutter."
                ]
            }
        ]
    },
    {
        id: 4,
        title: "Capítulo 4: Dart",
        icon: <Terminal />,
        sections: [
            {
                title: "4.1. O que é Dart?",
                content: [
                    "Dart é uma linguagem de programação de código aberto desenvolvida pela Google em 2011.",
                    "Dart é usado principalmente para desenvolvimento de aplicativos móveis com o framework Flutter, mas também pode ser usado para desenvolvimento web e server-side.",
                    "Dart é uma linguagem orientada a objetos e fortemente tipada, o que significa que as variáveis precisam ser declaradas com um tipo específico."
                ]
            },
            {
                title: "4.2. Sintaxe básica do Dart",
                content: [
                    "• Variáveis e constantes: como declarar e inicializar variáveis e constantes em Dart.",
                    "• Estruturas de controle: como usar estruturas de controle de fluxo, como if/else e for/while.",
                    "• Funções: como definir e chamar funções em Dart."
                ]
            },
            {
                title: "4.3. Programação orientada a objetos",
                content: [
                    "• Classes e objetos: como definir e instanciar classes em Dart.",
                    "• Herança: como usar herança para criar classes derivadas de outras classes.",
                    "• Polimorfismo: como usar polimorfismo para criar métodos que se comportam de maneira diferente em classes derivadas."
                ]
            },
            {
                title: "4.4. Programação assíncrona",
                content: [
                    "Como usar a programação assíncrona para lidar com operações que podem levar algum tempo para serem concluídas, como carregar dados da internet ou executar animações.",
                    "O uso de Future, async e await em Dart."
                ]
            },
            {
                title: "4.5. Boas práticas",
                content: [
                    "Algumas boas práticas que podem ajudar a escrever código claro e fácil de manter em Dart incluem:",
                    "• Usar nomes de variáveis e funções descritivas.",
                    "• Escrever comentários claros e úteis.",
                    "• Manter o código organizado e bem formatado.",
                    "• Usar constantes e enums para valores que não mudam durante a execução do aplicativo."
                ]
            },
            {
                title: "4.6. Conclusão",
                content: [
                    "Dart é uma linguagem de programação poderosa e flexível, que é especialmente adequada para o desenvolvimento de aplicativos móveis com o framework Flutter.",
                    "Compreender a sintaxe básica, a programação orientada a objetos e a programação assíncrona em Dart é essencial para desenvolver aplicativos Flutter eficientes e robustos.",
                    "No próximo capítulo, vamos combinar os conhecimentos adquiridos sobre Dart e Widgets para criar um aplicativo Flutter completo."
                ]
            }
        ]
    },
    {
        id: 5,
        title: "Capítulo 5: Flutter",
        icon: <Smartphone />,
        sections: [
            {
                title: "5.1. O que é Flutter?",
                content: [
                    "Flutter é um framework de desenvolvimento de aplicativos móveis de código aberto, criado pela Google em 2017.",
                    "Flutter utiliza a linguagem de programação Dart e uma biblioteca de Widgets personalizáveis para criar interfaces de usuário modernas e animadas.",
                    "Flutter permite que os desenvolvedores criem aplicativos para iOS, Android, web e desktop a partir de um único código-base."
                ]
            },
            {
                title: "5.2. O ciclo de vida",
                content: [
                    "Como um aplicativo Flutter é iniciado e encerrado.",
                    "Os principais eventos que ocorrem durante o ciclo de vida de um aplicativo Flutter e como lidar com eles.",
                    "Como preservar o estado do aplicativo durante mudanças de configuração ou quando o aplicativo é suspenso."
                ]
            },
            {
                title: "5.3. Widgets em Flutter",
                content: [
                    "Uma visão geral dos Widgets em Flutter e como eles são usados para construir interfaces de usuário.",
                    "Como criar e personalizar os principais Widgets em Flutter, como Text, Image, Container e ListView.",
                    "Como organizar os Widgets em uma hierarquia de Widgets para criar layouts complexos."
                ]
            },
            {
                title: "5.4. Navegação",
                content: [
                    "Como criar e navegar entre as telas de um aplicativo Flutter.",
                    "Como passar dados entre as telas de um aplicativo Flutter."
                ]
            },
            {
                title: "5.5. Comunicação com APIs externas",
                content: [
                    "Como se comunicar com APIs externas em um aplicativo Flutter usando pacotes como http e dio.",
                    "Como lidar com respostas assíncronas de APIs externas."
                ]
            },
            {
                title: "5.6. Boas práticas",
                content: [
                    "Algumas boas práticas que podem ajudar a escrever aplicativos Flutter eficientes e fáceis de manter incluem:",
                    "• Usar Widgets personalizados para reutilizar código.",
                    "• Utilizar o gerenciamento de estado adequado para o tipo de aplicativo.",
                    "• Escrever testes automatizados para garantir a qualidade do código."
                ]
            },
            {
                title: "5.7. Conclusão",
                content: [
                    "Flutter é um framework poderoso e flexível para o desenvolvimento de aplicativos móveis modernos.",
                    "Compreender o ciclo de vida do aplicativo Flutter, os Widgets em Flutter e as boas práticas em Flutter é essencial para criar aplicativos Flutter eficientes e robustos.",
                    "No próximo capítulo, vamos colocar tudo o que aprendemos em prática e criar um aplicativo Flutter completo."
                ]
            }
        ]
    },
    {
        id: 6,
        title: "Capítulo 6: Conclusão",
        icon: <CheckCircle2 />,
        sections: [
            {
                title: "6.1. Recapitulando",
                content: [
                    "Uma breve revisão do que foi aprendido ao longo do E-book, desde a introdução até o capítulo sobre Flutter.",
                    "Destaque dos principais conceitos, técnicas e habilidades que foram ensinados."
                ]
            },
            {
                title: "6.2. Próximos passos",
                content: [
                    "Sugestões de leituras complementares, cursos online e outros recursos para ajudar os leitores a aprimorar suas habilidades em Flutter.",
                    "Dicas para aprimorar a prática de programação em Flutter."
                ]
            },
            {
                title: "6.3. Desafios",
                content: [
                    "Alguns desafios que os leitores podem tentar para testar e aprimorar suas habilidades em Flutter.",
                    "Dicas para lidar com problemas e superar obstáculos ao tentar completar os desafios."
                ]
            },
            {
                title: "6.4. Agradecimentos",
                content: [
                    "Agradecimentos a todos os que contribuíram para o desenvolvimento deste E-book, incluindo autores, editores, revisores, testadores e outros.",
                    "Reconhecimento aos leitores por seu tempo e esforço dedicados à leitura do E-book."
                ]
            },
            {
                title: "6.5. Feedback",
                content: [
                    "Solicitação de feedback dos leitores sobre o E-book, incluindo comentários sobre o que funcionou bem, o que poderia ser melhorado e quais tópicos deveriam ser cobertos em futuros E-books."
                ]
            },
            {
                title: "6.6. Conclusão",
                content: [
                    "Conclusão final do E-book, com uma ênfase na importância do aprendizado contínuo e do aprimoramento das habilidades em Flutter.",
                    "Encorajamento para continuar explorando e experimentando com Flutter, e para compartilhar conhecimento e experiência com a comunidade Flutter em geral."
                ]
            }
        ]
    }
  ]
};

// --- DADOS DO E-BOOK: EMAIL MARKETING ---
const EMAIL_MARKETING_BOOK_DATA = {
    id: 'email-marketing',
    title: "E-mail Marketing com Flutter & Cloud Functions",
    author: "Fábio Lucas",
    coverImage: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?q=80&w=800&auto=format&fit=crop",
    description: "Aprenda a construir um sistema de disparo de e-mails em massa utilizando Flutter, Firebase Cloud Functions e SendGrid. Ideal para Newsletters e Automação.",
    chapters: [
        {
            id: 1,
            title: "Capítulo 1: Arquitetura",
            icon: <Layers />,
            sections: [
                {
                    title: "1.1. O Problema do Envio Local",
                    content: [
                        "Muitos iniciantes tentam enviar e-mails diretamente do dispositivo (Client-side) usando pacotes SMTP. Isso é um erro grave de segurança.",
                        "Expor suas credenciais de SMTP no código do aplicativo permite que qualquer um decompiles seu app e roube sua conta para enviar SPAM.",
                        "A solução correta é a arquitetura Serverless: O Flutter solicita o envio, e o servidor (Cloud Functions) executa a ação."
                    ]
                },
                {
                    title: "1.2. A Stack Tecnológica",
                    content: [
                        "Neste E-book, utilizaremos a seguinte combinação poderosa:",
                        "• Frontend: Flutter (UI para compor e disparar).",
                        "• Backend: Firebase Cloud Functions (Node.js/TypeScript).",
                        "• Database: Firestore (Para armazenar templates e logs).",
                        "• Provider: SendGrid ou Mailgun (APIs robustas de entrega)."
                    ]
                },
                {
                    title: "1.3. Fluxo de Dados",
                    content: [
                        "1. Usuário clica em 'Enviar' no App.",
                        "2. App escreve um documento na coleção 'mail_queue' do Firestore.",
                        "3. Cloud Function detecta a criação do documento (Trigger onCreate).",
                        "4. Function processa o template e chama a API do SendGrid.",
                        "5. Function atualiza o documento com status 'sent' ou 'error'."
                    ]
                }
            ]
        },
        {
            id: 2,
            title: "Capítulo 2: Configuração",
            icon: <Server />,
            sections: [
                {
                    title: "2.1. Firebase Blaze Plan",
                    highlight: true,
                    content: [
                        "Atenção: Para fazer chamadas a APIs externas (como Google, SendGrid, etc.) de dentro das Cloud Functions, você precisa estar no plano Blaze (Pay as you go) do Firebase.",
                        "Não se preocupe, a cota gratuita é generosa, mas o upgrade é necessário para liberar a saída de rede."
                    ]
                },
                {
                    title: "2.2. Configurando o SendGrid",
                    content: [
                        "Crie uma conta no SendGrid (ou provedor de sua escolha).",
                        "Gere uma API KEY com permissões de 'Mail Send'.",
                        "Autentique seu domínio (Sender Authentication) para evitar que seus e-mails caiam na caixa de SPAM."
                    ]
                },
                {
                    title: "2.3. Ambiente de Desenvolvimento",
                    content: [
                        "Instale o Firebase CLI: `npm install -g firebase-tools`",
                        "Inicialize as funções no seu projeto: `firebase init functions`",
                        "Escolha TypeScript para ter tipagem forte e evitar erros bobos no backend."
                    ]
                }
            ]
        },
        {
            id: 3,
            title: "Capítulo 3: Frontend (Flutter)",
            icon: <Smartphone />,
            sections: [
                {
                    title: "3.1. Interface de Composição",
                    content: [
                        "Vamos criar uma tela com campos para: Assunto, Destinatários (Tags) e Corpo do E-mail.",
                        "Utilizaremos o pacote `flutter_html_editor` ou similar para permitir que o usuário crie e-mails ricos com negrito, imagens e links diretamente do app."
                    ]
                },
                {
                    title: "3.2. Gerenciamento de Listas",
                    content: [
                        "Como selecionar 1.000 usuários de uma vez?",
                        "Não baixe todos os usuários para o dispositivo! Crie uma UI de filtros (ex: 'Usuários Ativos', 'Newsletter') e envie apenas os critérios para o backend.",
                        "O processamento pesado deve ficar na nuvem."
                    ]
                }
            ]
        },
        {
            id: 4,
            title: "Capítulo 4: Backend (Cloud Functions)",
            icon: <Code2 />,
            sections: [
                {
                    title: "4.1. Escrevendo a Trigger",
                    content: [
                        "Vamos escrever uma função que escuta o Firestore. Veja o conceito:",
                        "`export const sendMail = functions.firestore.document('mail/{id}').onCreate(async (snap, context) => { ... })`",
                        "Dentro dela, acessamos os dados do e-mail: `const data = snap.data();`"
                    ]
                },
                {
                    title: "4.2. Integração com SendGrid",
                    content: [
                        "Utilize a biblioteca `@sendgrid/mail`.",
                        "Configure a API Key via variáveis de ambiente do Firebase config (nunca hardcoded!).",
                        "Monte o objeto de mensagem (to, from, subject, html) e dispare: `await sgMail.send(msg);`"
                    ]
                }
            ]
        },
        {
            id: 5,
            title: "Capítulo 5: Envio em Massa",
            icon: <Database />,
            sections: [
                {
                    title: "5.1. O Problema de Escala",
                    content: [
                        "O SendGrid tem limites de taxa, e as Cloud Functions têm tempo limite de execução (timeout).",
                        "Se você tentar enviar 10.000 e-mails em um loop simples, sua função vai dar timeout e falhar no meio."
                    ]
                },
                {
                    title: "5.2. A Solução: Batching & Filas",
                    content: [
                        "Para listas grandes, a estratégia é dividir para conquistar.",
                        "Crie uma função 'Maestro' que lê a lista de usuários e cria centenas de pequenos documentos de 'tarefa de envio' no Firestore.",
                        "Outra função processa essas pequenas tarefas em paralelo, garantindo escalabilidade infinita."
                    ]
                }
            ]
        },
        {
            id: 6,
            title: "Capítulo 6: Analytics & Conclusão",
            icon: <BarChart3 />,
            sections: [
                {
                    title: "6.1. Rastreando Aberturas",
                    content: [
                        "Como saber se o usuário leu?",
                        "O SendGrid oferece Webhooks. Você cria uma Cloud Function HTTP (`onRequest`) e configura a URL no painel do SendGrid.",
                        "Quando alguém abre o e-mail, o SendGrid avisa sua função, e você atualiza o status no Firestore para exibir no App Flutter."
                    ]
                },
                {
                    title: "6.2. Conclusão",
                    content: [
                        "Você agora tem um sistema profissional de E-mail Marketing, seguro, escalável e integrado ao seu app.",
                        "Use esse conhecimento para criar Newsletters, avisos de sistema ou campanhas de vendas.",
                        "Lembre-se sempre das boas práticas anti-spam (DKIM, SPF) para garantir a entrega."
                    ]
                }
            ]
        }
    ]
};

// --- DADOS DO E-BOOK: INSTAGRAM CLONE ---
const INSTAGRAM_CLONE_BOOK_DATA = {
    id: 'instagram-clone',
    title: "Clonando o Instagram com Flutter & Firebase",
    author: "Fábio Lucas",
    coverImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
    description: "Engenharia Reversa de UI, Animações Complexas, Feed Infinito e Stories. O guia definitivo para criar apps sociais de alto nível.",
    chapters: [
        {
            id: 1,
            title: "Capítulo 1: Deconstrução de UI",
            icon: <Layout />,
            sections: [
                {
                    title: "1.1. Engenharia Reversa",
                    content: [
                        "O primeiro passo para clonar um app é entender sua estrutura. Vamos analisar o layout do Instagram e identificar os Widgets nativos.",
                        "O 'Feed' nada mais é do que um `ListView.builder`. Os 'Stories' são um `ListView` horizontal dentro de um container com altura fixa.",
                        "A 'BottomNavigationBar' controla o estado da tela principal usando um `IndexedStack` para manter a performance."
                    ]
                },
                {
                    title: "1.2. O Poder do Scaffold",
                    content: [
                        "Utilizaremos o `Scaffold` como a espinha dorsal. Vamos personalizar o `AppBar` para incluir a logo e os ícones de ação (Direct, Activity).",
                        "Aprenda a remover a sombra padrão (`elevation: 0`) para obter o visual 'flat' e moderno."
                    ]
                }
            ]
        },
        {
            id: 2,
            title: "Capítulo 2: Slivers & Feed Infinito",
            icon: <Scroll />,
            sections: [
                {
                    title: "2.1. Por que Slivers?",
                    content: [
                        "Para experiências de scroll complexas (onde o AppBar some ao rolar), o `ListView` simples não basta. Introduziremos `CustomScrollView`, `SliverAppBar` e `SliverList`.",
                        "Isso permite que a barra superior flutue ou se fixe dependendo da direção do scroll, igual ao app original."
                    ]
                },
                {
                    title: "2.2. Paginação com Firestore",
                    content: [
                        "Não podemos baixar 1 milhão de posts de uma vez. Implementaremos 'Infinite Scroll'.",
                        "Usaremos `limit(10)` e `startAfterDocument(lastDoc)` do Firestore para carregar posts sob demanda conforme o usuário chega ao fim da lista."
                    ]
                }
            ]
        },
        {
            id: 3,
            title: "Capítulo 3: Stories & Animações",
            icon: <Camera />,
            sections: [
                {
                    title: "3.1. O Círculo de Gradiente",
                    content: [
                        "Criaremos o icônico anel de gradiente (Instagram Colors) ao redor do avatar usando `Container` com `BoxDecoration` e `LinearGradient`.",
                        "Adicionaremos um sinal de '+' para o usuário atual criar seu story."
                    ]
                },
                {
                    title: "3.2. Visualizador de Stories",
                    content: [
                        "Ao clicar, abriremos uma nova rota em tela cheia. Usaremos `PageView` para navegar entre usuários e animações de barra de progresso no topo.",
                        "Implementaremos gestos de toque (tap para pular, long press para pausar) usando `GestureDetector`."
                    ]
                }
            ]
        },
        {
            id: 4,
            title: "Capítulo 4: Backend Relacional NoSQL",
            icon: <Database />,
            sections: [
                {
                    title: "4.1. Estrutura de Dados",
                    content: [
                        "NoSQL não tem JOINs? Sem problema. Aprenda a desnormalizar dados.",
                        "Coleções principais: `users`, `posts`, `comments`, `followers`, `following`.",
                        "Como estruturar o 'Feed' de um usuário cruzando os IDs de quem ele segue."
                    ]
                },
                {
                    title: "4.2. Storage & Imagens",
                    content: [
                        "Upload de fotos e vídeos para o Firebase Storage. Geração de thumbnails e compactação de imagem antes do envio usando o pacote `flutter_image_compress` para economizar dados."
                    ]
                }
            ]
        },
        {
            id: 5,
            title: "Capítulo 5: Interações em Tempo Real",
            icon: <Heart />,
            sections: [
                {
                    title: "5.1. Optimistic UI (Likes)",
                    highlight: true,
                    content: [
                        "O usuário não pode esperar o servidor responder para ver o coração ficar vermelho. A UI deve atualizar *instantaneamente*.",
                        "Ensinaremos como gerenciar o estado localmente enquanto a requisição acontece em segundo plano, revertendo apenas em caso de erro."
                    ]
                },
                {
                    title: "5.2. Animação de Like",
                    content: [
                        "O famoso 'Double Tap' na foto. Criaremos uma animação de coração pulsante no centro da imagem usando `ScaleTransition` e `Opacity` que aparece e desaparece suavemente."
                    ]
                }
            ]
        },
        {
            id: 6,
            title: "Capítulo 6: Conclusão & Desafios",
            icon: <Film />,
            sections: [
                {
                    title: "6.1. O que faltou?",
                    content: [
                        "Clonar o Instagram é um projeto gigantesco. Cobrimos o Core.",
                        "Desafios para você: Implementar o 'Reels' (videoplayer vertical), Mensagens Diretas (Chat) e Filtros de Câmera."
                    ]
                },
                {
                    title: "6.2. Próximos Passos",
                    content: [
                        "Publique seu clone no GitHub para turbinar seu portfólio. Recrutadores adoram ver engenharia reversa bem feita.",
                        "Tente migrar o backend para uma API própria em Node.js ou Go para praticar Full-Stack real."
                    ]
                }
            ]
        }
    ]
};

// --- DADOS DO E-BOOK: DELIVERY DE 10 MIL REAIS (NOVO) ---
const DELIVERY_APP_BOOK_DATA = {
    id: 'delivery-app-10k',
    title: "Delivery Full-Stack: O App de 10 Mil Reais",
    author: "Fábio Lucas",
    coverImage: "https://images.unsplash.com/photo-1526367790999-0150786686a2?q=80&w=800&auto=format&fit=crop",
    description: "Crie um concorrente do iFood do zero. Aprenda a desenvolver o ecossistema completo: App do Cliente, App da Loja e App do Entregador com Geolocalização Avançada.",
    chapters: [
      {
        id: 1,
        title: "Capítulo 1: O Mindset de R$ 10k",
        icon: <DollarSign />,
        sections: [
            {
                title: "1.1. Muito mais que um App",
                content: [
                    "Não estamos aqui para ganhar uma mixaria. Estamos falando de um projeto avaliado entre R$ 25.000 e R$ 300.000.",
                    "Este não é um aplicativo simples de 'arrastar e soltar'. É programação de verdade, para quem tem dedicação e não desiste no primeiro erro.",
                    "Se você é um programador nível intermediário (ou iniciante esforçado), você vai sair daqui com um SaaS pronto para venda."
                ]
            },
            {
                title: "1.2. A Nubank usa Flutter",
                content: [
                    "Se você tem dúvidas sobre a capacidade do Flutter, saiba que o banco roxo é feito inteiramente com ele.",
                    "Isso significa performance nativa, segurança bancária e uma UI fluida. Se serve para o Nubank, serve para o seu Delivery."
                ]
            }
        ]
      },
      {
        id: 2,
        title: "Capítulo 2: Metodologia & Ecossistema",
        icon: <Layers />,
        sections: [
            {
                title: "2.1. O Tripé do Delivery",
                content: [
                    "Um sistema de delivery nunca é apenas um aplicativo. São três:",
                    "• App do Cliente (Fundo Branco): Onde os pedidos são feitos.",
                    "• App da Loja (Fundo Escuro): Onde os pedidos são aceitos e gerenciados.",
                    "• App do Entregador: Onde as rotas são traçadas.",
                    "Você vai aprender a arquitetar os três compartilhando o mesmo backend."
                ]
            },
            {
                title: "2.2. A Metodologia do Sucesso",
                content: [
                    "Não saia codando que nem louco. Siga a estrutura: Estratégia -> Estrutura -> Esqueleto -> Interface.",
                    "Planeje seu banco de dados antes de escrever a primeira linha de código Dart."
                ]
            }
        ]
      },
      {
        id: 3,
        title: "Capítulo 3: Geolocalização e Maps",
        icon: <MapPin />,
        sections: [
            {
                title: "3.1. Google Places API",
                highlight: true,
                content: [
                    "O maior problema do iFood é endereço errado. Vamos resolver isso usando o `Place ID`.",
                    "Quando o usuário digita 'Shopping Flamboyant', a API retorna um ID único que garante a coordenada exata, evitando que o entregador vá parar do outro lado da rua."
                ]
            },
            {
                title: "3.2. Rastreamento em Tempo Real",
                content: [
                    "Aprenda a capturar a localização do entregador em background e atualizar o mapa do cliente via WebSocket ou Firestore Stream.",
                    "O cliente vê a motinha se mexendo no mapa. Isso é o que traz o efeito 'Uau' para o seu app."
                ]
            }
        ]
      },
      {
        id: 4,
        title: "Capítulo 4: Deep Links & Growth",
        icon: <Rocket />,
        sections: [
            {
                title: "4.1. Do Instagram para o App",
                content: [
                    "O marketing é essencial. Se o usuário vê um lanche no Instagram e clica no link, ele TEM que abrir direto na tela daquele lanche dentro do app.",
                    "Isso é Deep Linking. Se não estiver configurado, o link abre a home ou a loja de aplicativos, e você perde a venda."
                ]
            },
            {
                title: "4.2. Dynamic Links (Firebase)",
                content: [
                    "E se o usuário não tiver o app instalado? O Dynamic Link é inteligente: ele manda pra loja, o usuário instala, e DEPOIS de instalar, o app abre já na tela do lanche.",
                    "Essa é a diferença entre um app amador e um profissional."
                ]
            }
        ]
      },
      {
        id: 5,
        title: "Capítulo 5: Realidade & Manutenção",
        icon: <Wrench />,
        sections: [
            {
                title: "5.1. O Preço da Manutenção",
                content: [
                    "Um aplicativo é como um carro: exige manutenção. O Android atualiza todo ano. APIs mudam. Bibliotecas depreciam.",
                    "Se o Google lança o Android 15 e muda a regra de permissão de GPS, seu app para de funcionar se você não atualizar.",
                    "Venda isso para o seu cliente: O desenvolvimento custa X, a manutenção mensal custa Y."
                ]
            },
            {
                title: "5.2. Multiplataforma Real",
                content: [
                    "Com Flutter, seu código roda em Android, iOS, Windows e Mac.",
                    "Isso elimina a necessidade de contratar 4 programadores diferentes. Você é o exército de um homem só."
                ]
            }
        ]
      }
    ]
};

// --- DADOS DO E-BOOK: SCRIPT DO APP DE 100K ---
const SCRIPT_VIDEO_BOOK_DATA = {
    id: 'script-100k',
    title: "Script Secreto: O App de 100 Mil Reais",
    author: "Fábio Lucas",
    coverImage: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=800&auto=format&fit=crop",
    description: "O roteiro exato usado para criar um SaaS Multiplataforma. Do 'Zero' ao 'Deploy' em Windows, Mac, Android e iOS.",
    chapters: [
      {
        id: 1,
        title: "Capítulo 1: Fundação & Configuração",
        icon: <Laptop />,
        sections: [
            {
                title: "1.1. Início do Projeto",
                content: [
                    "Atenção: Não implementaremos Cloud Functions ou APIs complexas de pagamento agora. O foco é MVP (Produto Mínimo Viável).",
                    "Vamos criar o projeto do zero, garantindo que o `flutter create` já contemple as pastas de todas as plataformas alvo."
                ]
            },
            {
                title: "1.2. Configuração Multiplataforma",
                content: [
                    "O segredo para não ter dor de cabeça depois: Configurar o projeto para rodar no Android, iPhone, Windows e macOS LOGO NO INÍCIO.",
                    "Isso evita erros de build complexos quando o projeto já estiver grande com muitas dependências."
                ]
            },
             {
                title: "1.3. Firebase Setup",
                content: [
                    "Configuração do Firebase para TODAS as plataformas.",
                    "Adição dos arquivos `google-services.json` (Android) e `GoogleService-Info.plist` (iOS).",
                    "Configuração do Firebase para Web/Desktop."
                ]
            }
        ]
      },
      {
          id: 2,
          title: "Capítulo 2: Autenticação & Segurança",
          icon: <Lock />,
          sections: [
              {
                  title: "2.1. Telas Iniciais",
                  content: [
                      "Criação da Tela de Splash (Branding).",
                      "Desenvolvimento das Telas de Login e Cadastro com validações de formulário."
                  ]
              },
              {
                  title: "2.2. Funcionalidades de Auth",
                  content: [
                      "Integração do Firebase Auth para Login e Cadastro em todas as plataformas.",
                      "Implementação da funcionalidade 'Recuperar Senha' (envio de e-mail de redefinição)."
                  ]
              }
          ]
      },
      {
          id: 3,
          title: "Capítulo 3: Arquitetura & Estado",
          icon: <Layers />,
          sections: [
              {
                  title: "3.1. Preservação de Estado",
                  highlight: true,
                  content: [
                      "DICA DE OURO: Criar padrão de múltiplas telas sem perder o estado delas.",
                      "Isso significa que se você rolar uma lista na Aba A, ir para a Aba B e voltar, a lista A deve estar no mesmo lugar.",
                      "Usaremos `IndexedStack` ou `AutomaticKeepAliveClientMixin`."
                  ]
              }
          ]
      },
      {
          id: 4,
          title: "Capítulo 4: Core Features",
          icon: <ShoppingBag />,
          sections: [
              {
                  title: "4.1. Perfil do Usuário",
                  content: [
                      "Implementação do CRUD completo (Create, Read, Update, Delete) para os dados do perfil do usuário."
                  ]
              },
              {
                  title: "4.2. E-Commerce UI",
                  content: [
                      "Criação da Tela do Produto (Detalhes, Imagens, Preço).",
                      "Criação da Tela da Loja (Vitrine do Vendedor).",
                      "Criação da Tela de Listagem de Lojas."
                  ]
              },
               {
                  title: "4.3. Paginação (Aviso Importante)",
                  highlight: true,
                  content: [
                      "Neste script gratuito, faremos a listagem simples.",
                      "Para aprender PAGINAÇÃO PROFISSIONAL com Firebase Firestore (carregar itens sob demanda ao rolar), confira meu Curso Completo. Isso economiza muito dinheiro em leitura de banco de dados."
                  ]
              }
          ]
      },
      {
          id: 5,
          title: "Capítulo 5: Social Commerce",
          icon: <MessageSquare />,
          sections: [
              {
                  title: "5.1. Engajamento",
                  content: [
                      "Implementação de Stories (Status temporários de lojas). *Paginação detalhada no curso pago.*",
                      "Implementação de Chat em tempo real entre comprador e vendedor. *Arquitetura escalável de chat no curso pago.*"
                  ]
              },
               {
                  title: "5.2. Busca Inteligente",
                  content: [
                      "Criação de filtros de produtos que funcionam em tempo real (Preço, Categoria, Localização)."
                  ]
              }
          ]
      },
      {
          id: 6,
          title: "Capítulo 6: O Grande Final",
          icon: <Coins />,
          sections: [
              {
                  title: "6.1. Polimento",
                  content: [
                      "Correção de pequenos erros e bugs visuais.",
                      "Testes finais em todas as plataformas (Mobile e Desktop)."
                  ]
              },
              {
                  title: "6.2. Compilação & Deploy",
                  content: [
                      "Processo de build e geração dos executáveis/IPAs/APKs para as lojas."
                  ]
              },
              {
                  title: "6.3. O Pitch de Vendas (R$ 100k)",
                  highlight: true,
                  content: [
                      "Imagina você vender essa plataforma como um SaaS (Software as a Service).",
                      "A estrutura que criamos é suficiente para colocar centenas de empresas aqui dentro.",
                      "Faça as contas: Se você cobrar R$ 500,00 por mês de 200 empresas...",
                      "500 x 200 = R$ 100.000,00 POR MÊS.",
                      "Tá bom ou quer mais? Se quiser aprender a escalar isso, compre meu curso completo agora."
                  ]
              }
          ]
      }
    ]
  };

// --- DADOS DO E-BOOK: SOLOPRENEUR (NOVO) ---
const SOLOPRENEUR_BOOK_DATA = {
    id: 'solopreneur-diary',
    title: "Diário de um Solopreneur: O Êxtase do Flow",
    author: "Fábio Lucas",
    coverImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
    description: "Um mergulho visceral na mente de um desenvolvedor solitário. Descubra como atingir o estado de Flow absoluto e a fusão homem-máquina.",
    chapters: [
      {
        id: 1,
        title: "Capítulo 1: A Rotina Solitária",
        icon: <Video />,
        sections: [
            {
                title: "1.1. O Empresário Solitário",
                content: [
                    "Ser um 'Solopreneur' não é apenas trabalhar sozinho. É carregar o peso de todas as decisões, do código ao marketing, em completo silêncio.",
                    "Vou compartilhar meu dia a dia sem filtros: os desafios, a solidão e a liberdade absoluta de construir impérios digitais do meu quarto."
                ]
            }
        ]
      },
      {
        id: 2,
        title: "Capítulo 2: O Estado de Transe",
        icon: <Eye />,
        sections: [
            {
                title: "2.1. O Olhar Vidrado",
                content: [
                    "Estava programando tanto que fiquei vidrado. Sabe aquele momento em que você olha fixamente para um ponto sem piscar, como se estivesse viajando?",
                    "Mas eu estava consciente. Sabia de tudo. Exatamente tudo o que estava fazendo.",
                    "Não era cansaço, era foco absoluto. Uma paixão tão grande que o mundo ao redor desapareceu."
                ]
            }
        ]
      },
      {
        id: 3,
        title: "Capítulo 3: A Fusão",
        icon: <Cpu />,
        sections: [
            {
                title: "3.1. Um Só Organismo",
                highlight: true,
                content: [
                    "As coisas fluíam naturalmente. Eu nem precisava raciocinar. O código saía dos meus dedos como se eu e o computador nos tornássemos uma coisa só.",
                    "Uma máquina única, brutalmente produtiva. Virei um monstro de eficiência.",
                    "Tarefas complexas eram devoradas em minutos. Sem perceber, fiz 90% do trabalho da semana inteira em apenas algumas horas."
                ]
            }
        ]
      },
      {
        id: 4,
        title: "Capítulo 4: O Reboot Forçado",
        icon: <Battery />,
        sections: [
            {
                title: "4.1. A Cobrança do Corpo",
                content: [
                    "Toda energia tem um preço. O ápice da produtividade drenou minhas reservas vitais.",
                    "Meu corpo cobrou a conta instantaneamente. Caí desmaiado de exaustão.",
                    "Acordei horas depois, com o sol torrando as minhas costas, lembrando que sou humano, afinal."
                ]
            }
        ]
      },
      {
        id: 5,
        title: "Capítulo 5: Reflexão & Inspiração",
        icon: <Sun />,
        sections: [
            {
                title: "5.1. O Preço da Genialidade",
                content: [
                    "Vale a pena? A resposta está no resultado. Aquelas horas valeram por semanas.",
                    "Esse é o poder do foco total. Use com sabedoria, mas prepare-se para o impacto."
                ]
            }
        ]
      }
    ]
};

// --- DADOS DO E-BOOK: PYTHON INSTAGRAM DOWNLOADER ---
const PYTHON_INSTA_BOOK_DATA = {
    id: 'python-insta-downloader',
    title: "Python Automation: Instagram Downloader",
    author: "Fábio Lucas",
    coverImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
    description: "Aprenda a baixar vídeos do Instagram de maneira simples utilizando Python. Tutorial completo de automação com Instaloader e script funcional.",
    chapters: [
      {
        id: 1,
        title: "Capítulo 1: Configuração do Ambiente",
        icon: <Terminal />,
        sections: [
            {
                title: "1.1. Setup Inicial",
                content: [
                    "Para começar, você precisará do Python instalado e de um editor de código como o VS Code ou Visual Studio.",
                    "Vamos criar um arquivo chamado `insta_downloader.py` na sua pasta de projetos."
                ]
            },
            {
                title: "1.2. Instalando Dependências",
                content: [
                    "O segredo deste script é a biblioteca `instaloader`.",
                    "Abra o terminal (CMD) e execute o comando: `pip install instaloader`.",
                    "Essa biblioteca cuida de toda a complexidade de conexão com o Instagram."
                ]
            }
        ]
      },
      {
        id: 2,
        title: "Capítulo 2: O Código (Script)",
        icon: <Code2 />,
        sections: [
            {
                title: "2.1. Estrutura Básica",
                content: [
                    "Importe a biblioteca: `import instaloader`.",
                    "Crie uma instância da classe: `L = instaloader.Instaloader()`.",
                    "Use o método `download_post` passando o objeto Post recuperado via URL ou Shortcode."
                ]
            },
            {
                title: "2.2. Executando o Script",
                content: [
                    "Para rodar, digite `python insta_downloader.py` no terminal.",
                    "O script pedirá a URL do vídeo que você deseja baixar."
                ]
            },
            {
                title: "2.3. Script Completo",
                content: [
                    "Copie e cole o código abaixo em seu editor. Certifique-se de ter a biblioteca instalada."
                ],
                codeSnippet: `# Salve este script como download_instagram.py
import instaloader

# Inicializa o instaloader
loader = instaloader.Instaloader()

# URL do post do Instagram (coloque a URL real do post)
post_url = input("Insira a URL do post público do Instagram: ")

# Extrai o shortcode da URL
shortcode = post_url.split("/")[-2]

try:
    # Faz o download do post
    loader.download_post(instaloader.Post.from_shortcode(loader.context, shortcode), target="downloaded_videos")
    print("Download concluído!")
except Exception as e:
    print(f"Erro ao fazer download: {e}")`
            }
        ]
      },
      {
        id: 3,
        title: "Capítulo 3: Debugging e Erros Comuns",
        icon: <AlertTriangle />,
        sections: [
            {
                title: "3.1. O Erro da URL (Blob/Post)",
                highlight: true,
                content: [
                    "Atenção: Não use links que contenham 'blob:' ou estruturas complexas de sessão.",
                    "O script precisa do `shortcode` da postagem (ex: a parte 'Cy8...' da URL). Se você passar o link errado, receberá um erro de 'Fetching' ou 'JSON Parse'.",
                    "A solução é limpar a URL e usar apenas o link direto da postagem pública."
                ]
            },
            {
                title: "3.2. Testando na Prática",
                content: [
                    "Se o seu script falhar com um link, tente outro. Vídeos privados ou stories requerem login (não abordado neste script básico).",
                    "Este tutorial foca em postagens públicas do Feed ou Reels."
                ]
            }
        ]
      },
      {
        id: 4,
        title: "Capítulo 4: Resultado e Qualidade",
        icon: <Video />,
        sections: [
            {
                title: "4.1. Verificação do Arquivo",
                content: [
                    "O script cria uma pasta com o nome da postagem contendo o vídeo (.mp4), a legenda (.txt) e a thumbnail (.jpg).",
                    "Ao comparar com sites de download online (ex: SnapInsta), a qualidade é idêntica (mesmos codecs e resolução 720p/1080p), provando que o script é eficiente."
                ]
            }
        ]
      },
      {
        id: 5,
        title: "Capítulo 5: Manutenção e Futuro",
        icon: <Wrench />,
        sections: [
            {
                title: "5.1. Depreciação de Bibliotecas",
                content: [
                    "O Instagram muda sua API constantemente. O comando `pip install` de hoje pode não funcionar daqui a alguns meses se a biblioteca não for atualizada.",
                    "Esteja preparado para buscar atualizações ou ajustar o código conforme as métodos forem depreciados."
                ]
            }
        ]
      }
    ]
};

// --- DADOS DO E-BOOK: CHATGPT E ADVOGADOS (NOVO) ---
const CHATGPT_LAW_BOOK_DATA = {
    id: 'chatgpt-law',
    title: "ChatGPT e Advogados: O Fim ou o Recomeço?",
    author: "Fábio Lucas",
    coverImage: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop",
    description: "Uma análise profunda sobre o impacto da Inteligência Artificial no Direito. Descubra se o ChatGPT vai tirar seu emprego ou se tornar seu melhor sócio.",
    chapters: [
        {
            id: 1,
            title: "Capítulo 1: O Novo Concorrente",
            icon: <Bot />, 
            sections: [
                {
                    title: "1.1. O que é essa IA?",
                    content: [
                        "O ChatGPT é uma tecnologia que muitos dizem ter nascido para substituir os advogados.",
                        "Pode parecer exagero inicial, mas o potencial demonstrado nos diz que ela é sim capaz de substituir até mesmo especialistas em resoluções de problemas específicos.",
                        "Mas calma! Vamos analisar o cenário atual antes de entrar em pânico."
                    ]
                },
                {
                    title: "1.2. A Realidade Hoje",
                    content: [
                        "Fiquem tranquilos por enquanto. Hoje, a IA não pode assumir seu lugar no tribunal.",
                        "O papel atual dela é de 'Assistente Jurídico de Luxo': ajudar a redigir petições iniciais, buscar jurisprudências complexas e resumir leis.",
                        "Ela evita que você perca horas em pesquisas manuais, entregando o 'filé' do conhecimento jurídico em segundos."
                    ]
                }
            ]
        },
        {
            id: 2,
            title: "Capítulo 2: A Prova de Fogo",
            icon: <Gavel />, 
            sections: [
                {
                    title: "2.1. Aprovado na OAB",
                    highlight: true,
                    content: [
                        "Notícia urgente: O ChatGPT foi aprovado na primeira fase do Exame da Ordem dos Advogados do Brasil (OAB).",
                        "Isso prova que a máquina tem capacidade técnica de operar como advogado. Imagine se ela pudesse tirar a carteirinha?",
                        "A barreira agora não é mais intelectual, é apenas regulatória e humana."
                    ]
                }
            ]
        },
        {
            id: 3,
            title: "Capítulo 3: Adaptação ou Morte",
            icon: <TrendingUp />,
            sections: [
                {
                    title: "3.1. Surfando a Onda",
                    content: [
                        "A Comissão de Inovação traz a mensagem clara: Advogados precisam surfar nessa onda, não tentar pará-la.",
                        "Regredir ou tentar proibir a tecnologia é uma batalha perdida. O segredo é integração.",
                        "Use a IA para automatizar o braçal e foque no estratégico, no relacionamento com o cliente e na tese complexa."
                    ]
                },
                {
                    title: "3.2. Produtividade Extrema",
                    content: [
                        "Quem usa pela primeira vez fica horrorizado (no bom sentido). É um fator 'Uau'.",
                        "Problemas de redação que você levaria horas são resolvidos em segundos. O foco da OpenAI é otimizar o tempo humano, não necessariamente eliminar o humano.",
                        "A pergunta final é: Você vai correr para as montanhas ou vai aprender a pilotar essa nave?"
                    ]
                }
            ]
        }
    ]
};

const ECommerceOverview: React.FC<ECommerceOverviewProps> = ({ type }) => {
  const [selectedBook, setSelectedBook] = useState<any | null>(null);

  // --- MODO LEITURA (DETALHES DO EBOOK) ---
  if (type === 'ebooks' && selectedBook) {
    return (
        <section className="bg-[#000] min-h-screen pt-24 pb-20">
            {/* Header de Navegação */}
            <div className="fixed top-20 left-0 right-0 z-40 bg-[#000]/90 backdrop-blur-md border-b border-[#333] px-6 py-4 flex justify-between items-center">
                <button 
                    onClick={() => setSelectedBook(null)}
                    className="flex items-center gap-2 text-[#AAAAAA] hover:text-[#44D62C] transition-colors group"
                >
                    <div className="p-2 bg-[#111] rounded-full group-hover:bg-[#44D62C]/20 border border-[#333] group-hover:border-[#44D62C]">
                        <ArrowLeft size={20} />
                    </div>
                    <span className="font-mono text-sm hidden md:inline">Voltar para Biblioteca</span>
                </button>
                
                <div className="flex items-center gap-4">
                    <span className="text-[#EEE] font-mono text-sm font-bold hidden md:inline truncate max-w-[200px]">{selectedBook.title}</span>
                    <button 
                        onClick={() => alert("O download do PDF foi iniciado! (Simulação)")}
                        className="flex items-center gap-2 bg-[#44D62C] text-black px-4 py-2 rounded-full font-bold text-sm hover:bg-[#5aff3d] transition-transform hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(68,214,44,0.3)]"
                    >
                        <Download size={16} />
                        <span className="hidden sm:inline">Baixar PDF</span>
                    </button>
                </div>
            </div>

            <div className="container mx-auto px-6 max-w-4xl mt-12 animate-fade-in-up">
                
                {/* Capa e Título do Livro */}
                <div className="text-center mb-16 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#44D62C]/10 rounded-full blur-[120px] pointer-events-none"></div>
                    
                    <div className="inline-block relative group mb-8">
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#44D62C] to-[#111] rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                        <img 
                            src={selectedBook.coverImage} 
                            alt={selectedBook.title}
                            className="relative w-48 h-72 object-cover rounded-lg shadow-2xl border border-[#333]" 
                        />
                    </div>
                    
                    <h1 className="text-3xl md:text-5xl font-bold text-[#EEE] font-mono mb-4">{selectedBook.title}</h1>
                    <div className="flex justify-center items-center gap-4 text-[#888] text-sm">
                        <span className="flex items-center gap-1"><Users size={14} /> {selectedBook.author}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1"><FileText size={14} /> {selectedBook.chapters.length} Capítulos</span>
                        <span>•</span>
                        <span className="text-[#44D62C] font-bold">Versão 1.0</span>
                    </div>
                </div>

                {/* Conteúdo dos Capítulos */}
                <div className="space-y-12">
                    {selectedBook.chapters.map((chapter: any, index: number) => (
                        <div key={index} className="bg-[#0A0A0A] border border-[#333] rounded-3xl overflow-hidden hover:border-[#44D62C]/50 transition-colors duration-500">
                            
                            {/* Cabeçalho do Capítulo */}
                            <div className="bg-[#111] p-6 md:p-8 flex items-center justify-between border-b border-[#333]">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-[#000] border border-[#333] rounded-xl flex items-center justify-center text-[#44D62C]">
                                        {/* Fallback to simple icon if Lottie fails or simple visual needed */}
                                        <LottieIcon icon={chapter.icon} src={chapter.lottie} size={32} />
                                    </div>
                                    <h2 className="text-xl md:text-2xl font-bold text-[#EEE] font-mono">{chapter.title}</h2>
                                </div>
                                <span className="text-[#333] font-bold text-4xl font-mono opacity-20 hidden md:block">0{index + 1}</span>
                            </div>

                            {/* Seções do Capítulo */}
                            <div className="p-6 md:p-8 space-y-8">
                                {chapter.sections.map((section: any, idx: number) => (
                                    <div key={idx} className={`relative ${section.highlight ? 'bg-[#44D62C]/5 p-6 rounded-xl border border-[#44D62C]/20' : ''}`}>
                                        <h3 className="text-[#44D62C] font-bold font-mono text-lg mb-4 flex items-center gap-2">
                                            {section.highlight && <CheckCircle2 size={18} />}
                                            {section.title}
                                        </h3>
                                        <div className="space-y-3">
                                            {section.content.map((paragraph: string, pIdx: number) => (
                                                <p key={pIdx} className="text-[#AAA] leading-relaxed font-sans text-base">
                                                    {paragraph}
                                                </p>
                                            ))}
                                            {/* Code Snippet Renderer */}
                                            {section.codeSnippet && (
                                                <div className="mt-4 bg-[#111] p-4 rounded-lg border border-[#333] font-mono text-xs text-green-400 overflow-x-auto relative group/code">
                                                    <div className="absolute top-2 right-2 opacity-0 group-hover/code:opacity-100 transition-opacity">
                                                        <span className="text-[10px] text-[#666] bg-[#000] px-2 py-1 rounded border border-[#333]">Python</span>
                                                    </div>
                                                    <pre className="whitespace-pre-wrap">{section.codeSnippet}</pre>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer do Leitor */}
                <div className="mt-20 mb-12 text-center bg-[#111] rounded-2xl p-8 border border-[#333]">
                    <Rocket className="mx-auto text-[#44D62C] mb-4 animate-bounce" size={40} />
                    <h3 className="text-2xl font-bold text-[#EEE] mb-2">Pronto para o próximo nível?</h3>
                    <p className="text-[#888] mb-6">Este foi apenas o começo. Baixe o PDF completo para ter acesso offline.</p>
                    <button 
                        onClick={() => alert("Download iniciado!")}
                        className="inline-flex items-center gap-2 bg-[#EEE] text-black px-8 py-3 rounded-full font-bold hover:bg-[#44D62C] transition-colors"
                    >
                        <Download size={20} />
                        Download E-book PDF
                    </button>
                </div>

            </div>
        </section>
    );
  }

  // --- MODO PADRÃO (VISÃO GERAL / GRID) ---
  
  let title = '';
  let description = '';
  let icon = null;

  switch (type) {
    case 'ebooks':
      title = 'Meus E-books';
      description = 'Explore meu conhecimento técnico e insights de carreira em formatos digitais práticos.';
      icon = <Book size={48} />;
      break;
    case 'courses':
      title = 'Meus Cursos';
      description = 'Aprofunde-se em tópicos de desenvolvimento com aulas detalhadas, projetos práticos e suporte exclusivo.';
      icon = <GraduationCap size={48} />;
      break;
    case 'products':
      title = 'Produtos Digitais';
      description = 'Códigos-fonte, mentorias e mais para alavancar sua jornada de desenvolvimento.';
      icon = <ShoppingBag size={48} />;
      break;
    default:
      title = 'Conteúdo Digital';
      description = 'Acesse e-books, cursos e outros produtos exclusivos.';
      icon = <Book size={48} />;
  }

  return (
    <section className="py-20 min-h-screen bg-[#000000] pt-24">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-16">
          <div className="text-[#44D62C] mx-auto mb-4">{icon}</div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#EEEEEE] mb-4 font-mono">{title}</h2>
          <p className="text-[#AAAAAA] max-w-3xl mx-auto text-lg font-sans">
            {description}
          </p>
        </div>

        {/* E-BOOKS GRID VIEW */}
        {type === 'ebooks' ? (
             <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    
                    {/* E-book 1: Flutter Básico */}
                    <div 
                        onClick={() => setSelectedBook(FLUTTER_BOOK_DATA)}
                        className="group bg-[#0A0A0A] rounded-2xl border border-[#333] hover:border-[#44D62C] transition-all duration-500 cursor-pointer flex flex-col overflow-hidden relative"
                    >
                        <div className="absolute top-3 right-3 z-20 bg-[#44D62C] text-black text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                            Leitura Gratuita
                        </div>
                        <div className="h-64 overflow-hidden relative bg-[#111]">
                             <img src={FLUTTER_BOOK_DATA.coverImage} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" alt="Capa" />
                             <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent"></div>
                             <div className="absolute bottom-4 left-4 right-4">
                                <h3 className="text-xl font-bold text-white font-mono leading-tight group-hover:text-[#44D62C] transition-colors">{FLUTTER_BOOK_DATA.title}</h3>
                             </div>
                        </div>
                        <div className="p-6 flex-1 flex flex-col justify-between">
                            <p className="text-[#888] text-sm line-clamp-3 mb-6">{FLUTTER_BOOK_DATA.description}</p>
                            <div className="flex items-center justify-between text-xs font-mono text-[#666]">
                                <span className="flex items-center gap-1"><Layers size={14} /> 6 Capítulos</span>
                                <span className="group-hover:translate-x-1 transition-transform flex items-center gap-1 text-[#44D62C]">Ler Agora <ChevronRight size={14} /></span>
                            </div>
                        </div>
                    </div>

                    {/* E-book 2: Email Marketing */}
                    <div 
                        onClick={() => setSelectedBook(EMAIL_MARKETING_BOOK_DATA)}
                        className="group bg-[#0A0A0A] rounded-2xl border border-[#333] hover:border-[#44D62C] transition-all duration-500 cursor-pointer flex flex-col overflow-hidden relative"
                    >
                        <div className="absolute top-3 right-3 z-20 bg-[#44D62C] text-black text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                            Leitura Gratuita
                        </div>
                        <div className="h-64 overflow-hidden relative bg-[#111]">
                             <img src={EMAIL_MARKETING_BOOK_DATA.coverImage} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" alt="Capa" />
                             <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent"></div>
                             <div className="absolute bottom-4 left-4 right-4">
                                <h3 className="text-xl font-bold text-white font-mono leading-tight group-hover:text-[#44D62C] transition-colors">{EMAIL_MARKETING_BOOK_DATA.title}</h3>
                             </div>
                        </div>
                        <div className="p-6 flex-1 flex flex-col justify-between">
                            <p className="text-[#888] text-sm line-clamp-3 mb-6">{EMAIL_MARKETING_BOOK_DATA.description}</p>
                            <div className="flex items-center justify-between text-xs font-mono text-[#666]">
                                <span className="flex items-center gap-1"><Mail size={14} /> 6 Capítulos</span>
                                <span className="group-hover:translate-x-1 transition-transform flex items-center gap-1 text-[#44D62C]">Ler Agora <ChevronRight size={14} /></span>
                            </div>
                        </div>
                    </div>

                    {/* E-book 3: Instagram Clone */}
                    <div 
                        onClick={() => setSelectedBook(INSTAGRAM_CLONE_BOOK_DATA)}
                        className="group bg-[#0A0A0A] rounded-2xl border border-[#333] hover:border-[#44D62C] transition-all duration-500 cursor-pointer flex flex-col overflow-hidden relative"
                    >
                        <div className="absolute top-3 right-3 z-20 bg-[#44D62C] text-black text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                            Leitura Gratuita
                        </div>
                        <div className="h-64 overflow-hidden relative bg-[#111]">
                             <img src={INSTAGRAM_CLONE_BOOK_DATA.coverImage} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" alt="Capa" />
                             <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent"></div>
                             <div className="absolute bottom-4 left-4 right-4">
                                <h3 className="text-xl font-bold text-white font-mono leading-tight group-hover:text-[#44D62C] transition-colors">{INSTAGRAM_CLONE_BOOK_DATA.title}</h3>
                             </div>
                        </div>
                        <div className="p-6 flex-1 flex flex-col justify-between">
                            <p className="text-[#888] text-sm line-clamp-3 mb-6">{INSTAGRAM_CLONE_BOOK_DATA.description}</p>
                            <div className="flex items-center justify-between text-xs font-mono text-[#666]">
                                <span className="flex items-center gap-1"><Camera size={14} /> 6 Capítulos</span>
                                <span className="group-hover:translate-x-1 transition-transform flex items-center gap-1 text-[#44D62C]">Ler Agora <ChevronRight size={14} /></span>
                            </div>
                        </div>
                    </div>

                    {/* E-book 4: Script do App de 100k */}
                     <div 
                        onClick={() => setSelectedBook(SCRIPT_VIDEO_BOOK_DATA)}
                        className="group bg-[#0A0A0A] rounded-2xl border border-[#333] hover:border-[#44D62C] transition-all duration-500 cursor-pointer flex flex-col overflow-hidden relative"
                    >
                        <div className="absolute top-3 right-3 z-20 bg-gradient-to-r from-yellow-500 to-amber-600 text-black text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                            Blueprint SaaS
                        </div>
                        <div className="h-64 overflow-hidden relative bg-[#111]">
                             <img src={SCRIPT_VIDEO_BOOK_DATA.coverImage} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" alt="Capa" />
                             <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent"></div>
                             <div className="absolute bottom-4 left-4 right-4">
                                <h3 className="text-xl font-bold text-white font-mono leading-tight group-hover:text-[#44D62C] transition-colors">{SCRIPT_VIDEO_BOOK_DATA.title}</h3>
                             </div>
                        </div>
                        <div className="p-6 flex-1 flex flex-col justify-between">
                            <p className="text-[#888] text-sm line-clamp-3 mb-6">{SCRIPT_VIDEO_BOOK_DATA.description}</p>
                            <div className="flex items-center justify-between text-xs font-mono text-[#666]">
                                <span className="flex items-center gap-1"><Coins size={14} /> 6 Capítulos</span>
                                <span className="group-hover:translate-x-1 transition-transform flex items-center gap-1 text-[#44D62C]">Ler Agora <ChevronRight size={14} /></span>
                            </div>
                        </div>
                    </div>

                    {/* E-book 5: Delivery App 10k (NOVO) */}
                    <div 
                        onClick={() => setSelectedBook(DELIVERY_APP_BOOK_DATA)}
                        className="group bg-[#0A0A0A] rounded-2xl border border-[#333] hover:border-[#13AC6F] transition-all duration-500 cursor-pointer flex flex-col overflow-hidden relative"
                    >
                        <div className="absolute top-3 right-3 z-20 bg-[#13AC6F] text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider shadow-lg">
                            Novo Lançamento
                        </div>
                        <div className="h-64 overflow-hidden relative bg-[#111]">
                             <img src={DELIVERY_APP_BOOK_DATA.coverImage} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" alt="Capa" />
                             <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent"></div>
                             <div className="absolute bottom-4 left-4 right-4">
                                <h3 className="text-xl font-bold text-white font-mono leading-tight group-hover:text-[#13AC6F] transition-colors">{DELIVERY_APP_BOOK_DATA.title}</h3>
                             </div>
                        </div>
                        <div className="p-6 flex-1 flex flex-col justify-between">
                            <p className="text-[#888] text-sm line-clamp-3 mb-6">{DELIVERY_APP_BOOK_DATA.description}</p>
                            <div className="flex items-center justify-between text-xs font-mono text-[#666]">
                                <span className="flex items-center gap-1"><MapPin size={14} /> 5 Capítulos</span>
                                <span className="group-hover:translate-x-1 transition-transform flex items-center gap-1 text-[#13AC6F]">Ler Agora <ChevronRight size={14} /></span>
                            </div>
                        </div>
                    </div>

                    {/* E-book 6: Diário do Solopreneur */}
                    <div 
                        onClick={() => setSelectedBook(SOLOPRENEUR_BOOK_DATA)}
                        className="group bg-[#0A0A0A] rounded-2xl border border-[#333] hover:border-[#00FFFF] transition-all duration-500 cursor-pointer flex flex-col overflow-hidden relative"
                    >
                        <div className="absolute top-3 right-3 z-20 bg-gradient-to-r from-cyan-500 to-blue-500 text-black text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                            Mindset & Flow
                        </div>
                        <div className="h-64 overflow-hidden relative bg-[#111]">
                             <img src={SOLOPRENEUR_BOOK_DATA.coverImage} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" alt="Capa" />
                             <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent"></div>
                             <div className="absolute bottom-4 left-4 right-4">
                                <h3 className="text-xl font-bold text-white font-mono leading-tight group-hover:text-[#00FFFF] transition-colors">{SOLOPRENEUR_BOOK_DATA.title}</h3>
                             </div>
                        </div>
                        <div className="p-6 flex-1 flex flex-col justify-between">
                            <p className="text-[#888] text-sm line-clamp-3 mb-6">{SOLOPRENEUR_BOOK_DATA.description}</p>
                            <div className="flex items-center justify-between text-xs font-mono text-[#666]">
                                <span className="flex items-center gap-1"><Activity size={14} /> 5 Capítulos</span>
                                <span className="group-hover:translate-x-1 transition-transform flex items-center gap-1 text-[#00FFFF]">Ler Agora <ChevronRight size={14} /></span>
                            </div>
                        </div>
                    </div>

                    {/* E-book 7: Python Instagram Downloader (NOVO) */}
                    <div 
                        onClick={() => setSelectedBook(PYTHON_INSTA_BOOK_DATA)}
                        className="group bg-[#0A0A0A] rounded-2xl border border-[#333] hover:border-[#306998] transition-all duration-500 cursor-pointer flex flex-col overflow-hidden relative"
                    >
                        <div className="absolute top-3 right-3 z-20 bg-gradient-to-r from-[#306998] to-[#FFD43B] text-black text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                            Automação Python
                        </div>
                        <div className="h-64 overflow-hidden relative bg-[#111]">
                             <img src={PYTHON_INSTA_BOOK_DATA.coverImage} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" alt="Capa" />
                             <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent"></div>
                             <div className="absolute bottom-4 left-4 right-4">
                                <h3 className="text-xl font-bold text-white font-mono leading-tight group-hover:text-[#306998] transition-colors">{PYTHON_INSTA_BOOK_DATA.title}</h3>
                             </div>
                        </div>
                        <div className="p-6 flex-1 flex flex-col justify-between">
                            <p className="text-[#888] text-sm line-clamp-3 mb-6">{PYTHON_INSTA_BOOK_DATA.description}</p>
                            <div className="flex items-center justify-between text-xs font-mono text-[#666]">
                                <span className="flex items-center gap-1"><Terminal size={14} /> 5 Capítulos</span>
                                <span className="group-hover:translate-x-1 transition-transform flex items-center gap-1 text-[#306998]">Ler Agora <ChevronRight size={14} /></span>
                            </div>
                        </div>
                    </div>

                    {/* E-book 8: ChatGPT e Advogados (NOVO) */}
                    <div 
                        onClick={() => setSelectedBook(CHATGPT_LAW_BOOK_DATA)}
                        className="group bg-[#0A0A0A] rounded-2xl border border-[#333] hover:border-[#44D62C] transition-all duration-500 cursor-pointer flex flex-col overflow-hidden relative"
                    >
                        <div className="absolute top-3 right-3 z-20 bg-gradient-to-r from-blue-600 to-cyan-400 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                            Leitura Gratuita
                        </div>
                        <div className="h-64 overflow-hidden relative bg-[#111]">
                             <img src={CHATGPT_LAW_BOOK_DATA.coverImage} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" alt="Capa" />
                             <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent"></div>
                             <div className="absolute bottom-4 left-4 right-4">
                                <h3 className="text-xl font-bold text-white font-mono leading-tight group-hover:text-[#44D62C] transition-colors">{CHATGPT_LAW_BOOK_DATA.title}</h3>
                             </div>
                        </div>
                        <div className="p-6 flex-1 flex flex-col justify-between">
                            <p className="text-[#888] text-sm line-clamp-3 mb-6">{CHATGPT_LAW_BOOK_DATA.description}</p>
                            <div className="flex items-center justify-between text-xs font-mono text-[#666]">
                                <span className="flex items-center gap-1"><Gavel size={14} /> 3 Capítulos</span>
                                <span className="group-hover:translate-x-1 transition-transform flex items-center gap-1 text-[#44D62C]">Ler Agora <ChevronRight size={14} /></span>
                            </div>
                        </div>
                    </div>

                </div>
             </div>
        ) : (
            // Default View for Other Types (Courses/Products)
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <FeatureCard 
                icon={<ShoppingBag size={32} />} 
                title="AdMob Integration" 
                description="Publicidade relevante para monetização e descoberta de conteúdo." 
            />
            <FeatureCard 
                icon={<DollarSign size={32} />} 
                title="Planos de Acesso" 
                description="Modelos de assinatura para comunidade, cursos e códigos-fonte." 
            />
            <FeatureCard 
                icon={<Users size={32} />} 
                title="Comunidade Exclusiva" 
                description="Estrutura similar a Discord + StackOverflow para suporte e networking." 
            />
            <FeatureCard 
                icon={<GraduationCap size={32} />} 
                title="Cursos Interativos" 
                description="Plataforma EAD moderna com segurança de dados, streaming de vídeo e lives." 
            />
            <FeatureCard 
                icon={<Code2 size={32} />} 
                title="Códigos-Fonte" 
                description="Acesso exclusivo a repositórios completos para aprendizado prático." 
            />
            <FeatureCard 
                icon={<Book size={32} />} 
                title="Mentorias 1:1" 
                description="Sessões personalizadas para acelerar seu desenvolvimento profissional." 
            />
            </div>
        )}
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="bg-[#0A0A0A] p-6 rounded-2xl border border-[#333] hover:border-[#44D62C] transition-all duration-300 group text-left">
    <div className="text-[#44D62C] mb-4 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-[#EEEEEE] mb-2 font-mono">{title}</h3>
    <p className="text-[#AAAAAA] text-sm font-sans">{description}</p>
  </div>
);

export default ECommerceOverview;