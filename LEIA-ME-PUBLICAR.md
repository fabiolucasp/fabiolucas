# Publicar seu novo portfólio — Windows / PowerShell

Este pacote contém **somente o portfólio React público**, com o build pronto em `dist/` e o código-fonte. Não contém app Flutter, backend, documentos privados, login, senha ou token.

**Destino:** projeto Firebase `portifolio-66eb2`, domínio `fabiolucas.com`.
**Importante:** o Site ID precisa ser confirmado no Console. Ele pode ser diferente do Project ID. Não escolha o primeiro site nem crie outro por tentativa.

## 1. Extrair e abrir a pasta certa

1. Clique com o botão direito no ZIP → **Extrair tudo**.
2. Entre na pasta `portfolio-publico` extraída. Você deve ver `firebase.json`, `.firebaserc`, `Publicar-Portfolio.ps1` e a pasta `dist`.
3. No Explorador de Arquivos, clique na barra de endereço, digite `powershell` e pressione Enter. O terminal abre nessa pasta.
4. Confira, copiando e colando:

```powershell
node --version
npm.cmd --version
```

Se aparecer “não reconhecido”, instale o **Node.js LTS pelo site oficial https://nodejs.org/**, reabra o PowerShell e repita. O código-fonte requer Node 22.12 ou superior. Não instale por links recebidos de terceiros. Usamos `npm.cmd`/`npx.cmd` para evitar o bloqueio comum dos arquivos npm.ps1; não é necessário mudar a ExecutionPolicy.

## 2. Executar a publicação guiada

Abra `Publicar-Portfolio.ps1` no Bloco de Notas. **Copie todo o conteúdo e cole no PowerShell** aberto na pasta. O script tem verificações e confirmações antes de publicar. Não precisa executar `npm install` nem recompilar: `dist/` já está pronto e será conferido por hashes.

O script vai:

1. Conferir arquivos, configuração Hosting-only e integridade do build.
2. Executar o **login oficial local do Firebase**. Se você já estiver conectado, o CLI informa isso e usa seu login existente. Se abrir o navegador, entre na conta Google que tem acesso ao projeto e confirme você mesmo. Se aparecerem perguntas opcionais sobre Gemini ou estatísticas/analytics, responda **N**. **Nunca envie senha, código de autorização ou token pelo chat.** O login fica no seu computador.
3. Listar os sites do projeto e abrir o Firebase Console. No Console, entre em **Hosting**, escolha o site que possui **fabiolucas.com** e copie seu **Site ID**.
4. Antes de continuar, em **Histórico de versões / Release history**, anote a versão/release atualmente publicada e a data. Isso deixa uma referência para reversão. Não apague releases nem o site.
5. Pedir o Site ID, conferir que ele pertence ao projeto e pedir que você digite `fabiolucas.com` e depois `PUBLICAR`.
6. Vincular o target local `portfolio-public` ao site confirmado e publicar **somente `hosting:portfolio-public`**.
7. Conferir HTTP e identificador do build no domínio e abrir o navegador.

O comando de publicação utilizado é:

```powershell
npx.cmd -y firebase-tools@latest deploy --only hosting:portfolio-public --project portifolio-66eb2
if ($LASTEXITCODE -ne 0) { throw 'Deploy não confirmado. Confira o Console antes de repetir.' }
```

**Não execute esse último comando sozinho antes de vincular o target com o script. Não use `deploy` sem `--only`. Não execute `firebase init`, deploy de Functions/Firestore ou App Hosting.**

## 3. Conferir o resultado

Depois de “Deploy complete”, abra uma janela anônima ou faça recarga completa e confira:

- https://fabiolucas.com/ — portfólio e novos cases.
- https://fabiolucas.com/#/servicos — serviços.
- https://fabiolucas.com/#/cliente — app do cliente em desenvolvimento, sem lojas falsas.
- https://fabiolucas.com/#/login — nenhum campo de senha; acesso indisponível até configuração real.
- Contato → abre seu aplicativo de email; não finge envio de formulário.
- Navegação mobile, abertura/fechamento dos cases e links de seção.

O build deste pacote contém `index-BSNXsWL-.js`. Se o domínio ainda mostrar outro build, confira cache, o Site ID vinculado e o status do domínio no Console. **Não publique em outros sites por tentativa.** Se houver um erro, copie somente a mensagem de erro, sem tokens, códigos de autorização ou arquivos de login.

## 4. Se precisar reverter

Se você decidir desfazer a publicação, use o **Histórico de versões do mesmo site no Firebase Console**, identifique a release anterior que anotou e use a opção de reversão oferecida pelo Console. Leia e confirme conscientemente o destino antes de reverter. Este pacote não faz rollback automático e não apaga o histórico.

## Limites conhecidos

- Build/TypeScript e seis testes sem navegador passaram no ambiente de preparação. Validação visual/interativa no navegador ainda precisa ser feita por você após acesso local/publicação; o ambiente cloud bloqueou essa etapa.
- Imagens e fontes dependem de terceiros. Os quatro perfis sociais não puderam ser certificados pela ferramenta de leitura externa.
- Cursos, PDFs, comunidade e app cliente têm estados de prévia/indisponível. Não há pagamento, envio de formulário nem portal operacional nesta vitrine.
- O aplicativo do cliente está em desenvolvimento para App Store/Google Play; a central interna da agência é separada e não está neste pacote.
- Casos sem código disponibilizado, inclusive AutoPartsGuide, continuam apresentados como conceituais/pendentes de validação. Exemplos de interface não são registros de clientes.
- SEO continua SPA com hash; existe aviso de tamanho do bundle, não erro de build.
- O script PowerShell foi revisado estaticamente, mas não executado aqui (PowerShell indisponível). Nenhum deploy foi feito durante a preparação deste ZIP.

## Para editar o código futuramente (não necessário para publicar este pacote)

```powershell
npm.cmd ci
if ($LASTEXITCODE -ne 0) { throw 'Instalação falhou.' }
npm.cmd run build
if ($LASTEXITCODE -ne 0) { throw 'Build falhou.' }
```

Após editar/recompilar, este manifesto de hashes não corresponderá ao novo build. Não remova a proteção às cegas: revise os arquivos e gere um novo pacote/manifesto antes de publicar.
