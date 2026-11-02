# Execute na pasta extraida que contem firebase.json e dist.
$ErrorActionPreference = 'Stop'
if (-not (Get-Command node -ErrorAction SilentlyContinue) -or -not (Get-Command npm.cmd -ErrorAction SilentlyContinue) -or -not (Get-Command npx.cmd -ErrorAction SilentlyContinue)) {
  throw 'Node.js/npm nao encontrados. Instale a versao LTS pelo site oficial https://nodejs.org/ e reabra o PowerShell.'
}
node --version
if ($LASTEXITCODE -ne 0) { throw 'Falha ao verificar Node.js.' }
npm.cmd --version
if ($LASTEXITCODE -ne 0) { throw 'Falha ao verificar npm.' }
if (-not (Test-Path './dist/index.html') -or -not (Test-Path './firebase.json')) { throw 'Abra o PowerShell dentro da pasta portfolio-publico extraida.' }
$config = Get-Content './firebase.json' -Raw | ConvertFrom-Json
if (@($config.PSObject.Properties.Name).Count -ne 1 -or $config.hosting.public -ne 'dist' -or $config.hosting.target -ne 'portfolio-public') { throw 'Configuracao Hosting diferente da esperada; pare para revisar.' }
$manifest = Get-Content './BUILD-MANIFEST.json' -Raw | ConvertFrom-Json
foreach ($item in $manifest.dist) {
  if (-not (Test-Path $item.path)) { throw "Arquivo do build ausente: $($item.path)" }
  if ((Get-FileHash $item.path -Algorithm SHA256).Hash.ToLowerInvariant() -ne $item.sha256) { throw "Build alterado: $($item.path). Nao publique este pacote sem revisao." }
}
Write-Host 'Build pronto conferido. Nao precisa executar npm install ou npm run build.'
# Reconhece login local existente; se necessario, abre autorizacao Google no seu navegador.
npx.cmd -y firebase-tools@latest login
if ($LASTEXITCODE -ne 0) { throw 'Login nao concluido. Pare aqui; nao envie senha, token ou codigo pelo chat.' }
# Escolha N para Gemini e coleta opcional de uso se essas perguntas aparecerem.
npx.cmd -y firebase-tools@latest hosting:sites:list --project portifolio-66eb2
if ($LASTEXITCODE -ne 0) { throw 'Nao foi possivel listar sites. Confira a conta e permissao no projeto.' }
Start-Process 'https://console.firebase.google.com/project/portifolio-66eb2/hosting'
Write-Host 'No Console, confirme qual site tem o dominio fabiolucas.com. Em Historico de versoes, anote a release atual para eventual reversao. Nao escolha o primeiro site automaticamente.'
$siteId = (Read-Host 'Cole o Site ID exato confirmado no Console (nao o dominio)').Trim()
if ($siteId -notmatch '^[a-z0-9][a-z0-9-]*$') { throw 'Site ID vazio ou com formato inesperado.' }
# Valida que o ID informado esta na lista do projeto, sem escolher um por voce.
$sitesOutput = & npx.cmd -y firebase-tools@latest hosting:sites:list --project portifolio-66eb2 --json
if ($LASTEXITCODE -ne 0) { throw 'Falha ao conferir o Site ID no projeto.' }
$sitesData = ($sitesOutput -join "`n") | ConvertFrom-Json
$knownIds = @($sitesData.result.sites | ForEach-Object { ($_.name -split '/')[-1] })
if ($siteId -notin $knownIds) { throw 'O Site ID informado nao foi encontrado neste projeto.' }
$domain = (Read-Host 'Para confirmar que esse Site ID atende seu dominio, digite fabiolucas.com').Trim()
if ($domain -cne 'fabiolucas.com') { throw 'Confirmacao de dominio cancelada.' }
$confirm = Read-Host "Publicar somente o portfolio React em $siteId? Digite PUBLICAR"
if ($confirm -cne 'PUBLICAR') { throw 'Publicacao cancelada.' }
npx.cmd -y firebase-tools@latest target:apply hosting portfolio-public $siteId --project portifolio-66eb2
if ($LASTEXITCODE -ne 0) { throw 'Falha ao vincular target. Nada foi publicado.' }
npx.cmd -y firebase-tools@latest deploy --only hosting:portfolio-public --project portifolio-66eb2
if ($LASTEXITCODE -ne 0) { throw 'Deploy nao confirmado. Confira o historico no Console antes de tentar novamente.' }
Write-Host 'CLI informou deploy concluido. Agora confira o dominio e as rotas no navegador.'
try {
  $page = Invoke-WebRequest -Uri 'https://fabiolucas.com/' -UseBasicParsing -Headers @{ 'Cache-Control'='no-cache' }
  if ($page.StatusCode -ne 200) { throw "HTTP $($page.StatusCode)" }
  if (-not $page.Content.Contains('index-BXlAUp5j.js')) { Write-Warning 'Dominio ainda nao apresenta o identificador deste build. Confira cache, site vinculado e status do dominio no Console; nao publique em outro site por tentativa.' }
  else { Write-Host 'HTTP 200 e identificador do novo build confirmados no dominio.' }
} catch { Write-Warning "Nao foi possivel confirmar o HTTP do dominio: $($_.Exception.Message)" }
Start-Process 'https://fabiolucas.com/'
