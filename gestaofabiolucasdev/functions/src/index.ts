import * as functions from "firebase-functions/v1";
import * as admin from "firebase-admin";
import * as fs from "fs";
// @ts-ignore
const BotDetector = require("device-detector-js/dist/parsers/bot");
const useragent = require("express-useragent");

admin.initializeApp();

/**
 * Registra novo token de FCM do dispositivo e o inscreve no tópico global 'todos'
 */
export const onNewToken = functions.https.onCall(async (data, context) => {
  const token = data.token;

  if (!context.auth) {
    throw new functions.https.HttpsError(
      "unauthenticated",
      "Usuário não autenticado."
    );
  }

  try {
    const response = await admin.messaging().subscribeToTopic(token, "todos");
    console.log("Token cadastrado no FCM topic 'todos':", response);
    return { message: "Token registrado com sucesso!", success: true };
  } catch (error) {
    console.error("Erro ao registrar token no FCM:", error);
    throw new functions.https.HttpsError(
      "internal",
      "Erro ao registrar token no servidor FCM."
    );
  }
});

/**
 * Server-Side Rendering de Meta Tags Open Graph para links compartilhados no WhatsApp e Redes Sociais
 * Mapeado pelas regras de rewrites do firebase.json (rota /loja**)
 */
export const dynamicMetaTagsUpdate = functions.https.onRequest(async (request, response) => {
  const botDetector = new BotDetector();
  const userAgent = (request.headers["user-agent"] || "").toString();
  console.log("UserAgent da requisição:", userAgent);
  
  const bot = botDetector.parse(userAgent);
  const ua = useragent.parse(userAgent);

  // Se for bot de rede social (WhatsApp, Facebook, Twitter, Telegram, Googlebot)
  if (bot || ua.browser === "WhatsApp") {
    console.log("Bot ou preview de WhatsApp detectado. Injetando Open Graph tags.");
    const html = `<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8">
    <title>Fábio Lucas Dev - Aplicativos & Soluções Digitais</title>
    <meta name="description" content="Ecossistema completo de desenvolvimento mobile e web com Flutter e Firebase.">
    <meta name="keywords" content="Flutter, Dart, Firebase, Aplicativos, Goiânia, Software">
    <meta property="og:locale" content="pt_BR" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Fábio Lucas Dev | Soluções em Flutter & Cloud" />
    <meta property="og:description" content="Desenvolvimento de software de alta performance, aplicativos corporativos e mobilidade." />
    <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/fabiolucas-c5448.appspot.com/o/Logo%20minha%20empresa.png?alt=media&token=2f855b84-e36c-49e8-be2f-c2abb5d0ca8c" />
    <meta property="og:image:secure" content="https://firebasestorage.googleapis.com/v0/b/fabiolucas-c5448.appspot.com/o/Logo%20minha%20empresa.png?alt=media&token=2f855b84-e36c-49e8-be2f-c2abb5d0ca8c" />
    <meta property="og:url" content="https://fabiolucas.com" />
  </head>
  <body>
    <h1>Fábio Lucas Dev</h1>
    <p>Redirecionando para a aplicação...</p>
    <script>window.location.href = "/";</script>
  </body>
</html>`;
    response.status(200).send(html);
    return;
  }

  // Se for usuário humano normal navegando no browser, lê o index.html da build web
  try {
    if (fs.existsSync("index.html")) {
      const html = fs.readFileSync("index.html", "utf8");
      response.status(200).send(html);
    } else {
      response.redirect("/");
    }
  } catch (err) {
    response.redirect("/");
  }
});

/**
 * Health check para monitoramento de latência e disponibilidade das APIs
 */
export const healthCheck = functions.https.onRequest((req, res) => {
  res.status(200).json({
    status: "online",
    service: "gestaofabiolucasdev",
    timestamp: new Date().toISOString()
  });
});
