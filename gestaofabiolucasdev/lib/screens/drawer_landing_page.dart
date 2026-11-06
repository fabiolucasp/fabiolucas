import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';

class DrawerLandingPage extends StatelessWidget {
  const DrawerLandingPage({super.key});

  @override
  Widget build(BuildContext context) {
    return ListView(
      padding: EdgeInsets.zero,
      children: [
        DrawerHeader(
          decoration: const BoxDecoration(
            color: Color(0xFF1E1B24),
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            mainAxisAlignment: MainAxisAlignment.end,
            children: [
              Container(
                padding: const EdgeInsets.all(8),
                decoration: BoxDecoration(
                  color: Colors.black,
                  borderRadius: BorderRadius.circular(10),
                  border: Border.all(color: Colors.white24),
                ),
                child: const Text(
                  "F/L",
                  style: TextStyle(
                    color: Colors.white,
                    fontWeight: FontWeight.w900,
                    fontSize: 16,
                  ),
                ),
              ),
              const SizedBox(height: 12),
              const Text(
                "Fábio Lucas Dev",
                style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold, fontSize: 16),
              ),
              const Text(
                "Plataforma & Soluções Flutter",
                style: TextStyle(color: Colors.grey, fontSize: 12),
              ),
            ],
          ),
        ),
        ListTile(
          leading: const Icon(Icons.dashboard_outlined),
          title: const Text("Painel Operacional"),
          onTap: () {
            Navigator.of(context).pop();
            Navigator.of(context).pushNamed("/dashboard");
          },
        ),
        ListTile(
          leading: const Icon(Icons.school_outlined),
          title: const Text("Cursos & Treinamentos"),
          onTap: () {
            Navigator.of(context).pop();
            Navigator.of(context).pushNamed("/cursos");
          },
        ),
        ListTile(
          leading: const Icon(Icons.video_collection_outlined),
          title: const Text("Central de Provas em Vídeo"),
          onTap: () {
            Navigator.of(context).pop();
            Navigator.of(context).pushNamed("/provas");
          },
        ),
        ListTile(
          leading: const Icon(Icons.receipt_long_outlined),
          title: const Text("Comprovantes PineapplePay"),
          onTap: () {
            Navigator.of(context).pop();
            Navigator.of(context).pushNamed("/comprovante");
          },
        ),
        const Divider(color: Colors.white12),
        ListTile(
          leading: const Icon(Icons.notifications_none),
          title: const Text("Notificações Push"),
          onTap: () {
            Navigator.of(context).pop();
          },
        ),
        ListTile(
          leading: const Icon(Icons.settings_outlined),
          title: const Text("Configurações"),
          onTap: () {
            Navigator.of(context).pop();
          },
        ),
        ListTile(
          leading: const Icon(Icons.logout, color: Colors.redAccent),
          title: const Text("Encerrar Sessão", style: TextStyle(color: Colors.redAccent)),
          onTap: () async {
            await FirebaseAuth.instance.signOut().catchError((_) {});
            if (context.mounted) {
              Navigator.of(context).pushReplacementNamed("/login");
            }
          },
        ),
      ],
    );
  }
}
