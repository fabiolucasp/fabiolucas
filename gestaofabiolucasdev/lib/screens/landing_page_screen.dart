import 'package:flutter/material.dart';
import 'package:lottie/lottie.dart';
import 'drawer_landing_page.dart';

class LandingPageScreen extends StatefulWidget {
  final Object? args;
  const LandingPageScreen({super.key, this.args});

  @override
  State<LandingPageScreen> createState() => _LandingPageScreenState();
}

class _LandingPageScreenState extends State<LandingPageScreen> {
  @override
  Widget build(BuildContext context) {
    final isDesktop = MediaQuery.of(context).size.width >= 900;

    return Scaffold(
      backgroundColor: const Color(0xFF141218),
      appBar: AppBar(
        title: Row(
          children: [
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
              decoration: BoxDecoration(
                color: Colors.black,
                borderRadius: BorderRadius.circular(6),
                border: Border.all(color: Colors.white24),
              ),
              child: const Text(
                "F/L",
                style: TextStyle(fontWeight: FontWeight.w900, color: Colors.white, fontSize: 13),
              ),
            ),
            const SizedBox(width: 10),
            const Text("Fábio Lucas Dev", style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16)),
          ],
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.of(context).pushNamed("/cursos"),
            child: const Text("Cursos", style: TextStyle(color: Color(0xFFD0BCFF))),
          ),
          TextButton(
            onPressed: () => Navigator.of(context).pushNamed("/provas"),
            child: const Text("Provas", style: TextStyle(color: Color(0xFFD0BCFF))),
          ),
          TextButton(
            onPressed: () => Navigator.of(context).pushNamed("/dashboard"),
            child: const Text("Dashboard", style: TextStyle(color: Color(0xFF44D62C))),
          ),
          const SizedBox(width: 8),
        ],
      ),
      drawer: const Drawer(
        child: DrawerLandingPage(),
      ),
      body: SingleChildScrollView(
        child: Column(
          children: [
            // Hero Section
            Container(
              width: double.infinity,
              padding: EdgeInsets.symmetric(
                horizontal: isDesktop ? 64 : 24,
                vertical: isDesktop ? 80 : 40,
              ),
              child: isDesktop
                  ? Row(
                      crossAxisAlignment: CrossAxisAlignment.center,
                      children: [
                        Expanded(child: _buildHeroText(context)),
                        const SizedBox(width: 48),
                        Expanded(child: _buildHeroIllustration()),
                      ],
                    )
                  : Column(
                      children: [
                        _buildHeroText(context),
                        const SizedBox(height: 36),
                        _buildHeroIllustration(),
                      ],
                    ),
            ),

            const Divider(color: Colors.white10),

            // Features & Pilares do Ecossistema
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 48),
              child: Column(
                children: [
                  const Text(
                    "PILARES DE ENGENHARIA",
                    style: TextStyle(
                      color: Color(0xFF44D62C),
                      fontSize: 12,
                      fontWeight: FontWeight.bold,
                      letterSpacing: 2,
                    ),
                  ),
                  const SizedBox(height: 12),
                  const Text(
                    "Do Design ao Código Escalável em Produção",
                    textAlign: TextAlign.center,
                    style: TextStyle(color: Colors.white, fontSize: 24, fontWeight: FontWeight.bold),
                  ),
                  const SizedBox(height: 36),
                  Wrap(
                    spacing: 16,
                    runSpacing: 16,
                    alignment: WrapAlignment.center,
                    children: [
                      _buildPilarCard(
                        icon: Icons.phone_android,
                        title: "Flutter 3 Nativo",
                        desc: "Performance de 60 a 120 FPS cravados em iOS, Android e Web com Material Design 3 e Clean Architecture.",
                      ),
                      _buildPilarCard(
                        icon: Icons.cloud_done,
                        title: "Firebase & Cloud",
                        desc: "Backends escaláveis em tempo real, Cloud Functions v2 em Node 22 e banco Firestore sem latência.",
                      ),
                      _buildPilarCard(
                        icon: Icons.security,
                        title: "Biometria & Segurança",
                        desc: "Prova de vida facial em 7 etapas, autenticação biométrica e proteção contra engenharia reversa.",
                      ),
                    ],
                  ),
                ],
              ),
            ),

            // Rodapé
            Container(
              width: double.infinity,
              padding: const EdgeInsets.all(32),
              color: const Color(0xFF0F0E13),
              child: Column(
                children: [
                  const Text(
                    "© 2026 Fábio Lucas Dev &bull; Todos os direitos reservados",
                    style: TextStyle(color: Colors.grey, fontSize: 12),
                  ),
                  const SizedBox(height: 6),
                  Text(
                    "Goiânia - GO, Brasil &bull; Especialista Flutter & Full-Stack",
                    style: TextStyle(color: Colors.grey[600], fontSize: 11),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildHeroText(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Container(
          padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
          decoration: BoxDecoration(
            color: const Color(0xFF44D62C).withValues(alpha: 0.12),
            borderRadius: BorderRadius.circular(6),
            border: Border.all(color: const Color(0xFF44D62C).withValues(alpha: 0.3)),
          ),
          child: const Text(
            "DISPONÍVEL PARA NOVOS PROJETOS",
            style: TextStyle(color: Color(0xFF44D62C), fontSize: 11, fontWeight: FontWeight.bold),
          ),
        ),
        const SizedBox(height: 20),
        RichText(
          text: const TextSpan(
            style: TextStyle(fontSize: 34, fontWeight: FontWeight.bold, color: Colors.white, height: 1.2),
            children: [
              TextSpan(text: "Um ótimo "),
              TextSpan(
                text: "Produto",
                style: TextStyle(color: Color(0xFF44D62C)),
              ),
              TextSpan(text: "\né construído por um ótimo "),
              TextSpan(
                text: "Time",
                style: TextStyle(color: Color(0xFFD0BCFF)),
              ),
            ],
          ),
        ),
        const SizedBox(height: 16),
        Text(
          "Construo e gerencio aplicativos de alto impacto em Flutter e Firebase, garantindo arquitetura robusta, design coeso e escalabilidade para o seu negócio.",
          style: TextStyle(color: Colors.grey[400], fontSize: 16, height: 1.5),
        ),
        const SizedBox(height: 32),
        Row(
          children: [
            FilledButton(
              onPressed: () => Navigator.of(context).pushNamed("/dashboard"),
              style: FilledButton.styleFrom(
                backgroundColor: const Color(0xFF44D62C),
                foregroundColor: Colors.black,
                padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 16),
              ),
              child: const Text("ACESSAR DASHBOARD", style: TextStyle(fontWeight: FontWeight.bold)),
            ),
            const SizedBox(width: 16),
            OutlinedButton(
              onPressed: () => Navigator.of(context).pushNamed("/cursos"),
              style: OutlinedButton.styleFrom(
                side: const BorderSide(color: Colors.white24),
                padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 16),
              ),
              child: const Text("VER CURSOS", style: TextStyle(color: Colors.white)),
            ),
          ],
        ),
      ],
    );
  }

  Widget _buildHeroIllustration() {
    return Center(
      child: Container(
        constraints: const BoxConstraints(maxWidth: 400),
        child: Lottie.asset(
          "src/animation/ilustracao-landing-page-primeira-secao.json",
          errorBuilder: (context, error, stackTrace) {
            return Container(
              height: 260,
              decoration: BoxDecoration(
                color: const Color(0xFF252429),
                borderRadius: BorderRadius.circular(20),
                border: Border.all(color: Colors.white12),
              ),
              child: const Center(
                child: Icon(Icons.code, size: 80, color: Color(0xFF6C63FF)),
              ),
            );
          },
        ),
      ),
    );
  }

  Widget _buildPilarCard({required IconData icon, required String title, required String desc}) {
    return Container(
      width: 280,
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        color: const Color(0xFF1E1B24),
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: Colors.white12),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Icon(icon, color: const Color(0xFF44D62C), size: 28),
          const SizedBox(height: 16),
          Text(title, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.bold, fontSize: 16)),
          const SizedBox(height: 8),
          Text(desc, style: TextStyle(color: Colors.grey[400], fontSize: 12, height: 1.4)),
        ],
      ),
    );
  }
}
