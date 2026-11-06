import 'package:flutter/material.dart';

class CourseTier {
  final String id;
  final String title;
  final String level;
  final String price;
  final String description;
  final List<String> modules;
  final Color color;

  const CourseTier({
    required this.id,
    required this.title,
    required this.level,
    required this.price,
    required this.description,
    required this.modules,
    required this.color,
  });
}

const List<CourseTier> coursesList = [
  CourseTier(
    id: 'iniciante',
    title: 'Fundamentos de Flutter & Dart',
    level: 'Iniciante',
    price: 'R\$ 197,00',
    description: 'Do zero à criação do seu primeiro aplicativo com widgets modernos e navegação.',
    modules: [
      'Configuração do ambiente e SDK',
      'Dart 3: Tipagem, Records e Pattern Matching',
      'Widgets essenciais e Layouts responsivos',
      'Navegação e passagem de parâmetros',
      'Publicação do primeiro APK na Play Store'
    ],
    color: Color(0xFF4CAF50),
  ),
  CourseTier(
    id: 'intermediario',
    title: 'Arquitetura Limpa & Firebase Pro',
    level: 'Intermediário',
    price: 'R\$ 397,00',
    description: 'Aprenda a estruturar apps escaláveis com Clean Architecture, Bloc/Provider e backend na nuvem.',
    modules: [
      'Clean Architecture desacoplada em 3 camadas',
      'Autenticação social e biometria facial',
      'Firestore em tempo real e regras de segurança',
      'Gerenciamento de estado com Streams e Bloc',
      'Testes unitários e de integração automatizados'
    ],
    color: Color(0xFF2196F3),
  ),
  CourseTier(
    id: 'avancado',
    title: 'Mestre em Apps de Alta Escala & Monetização',
    level: 'Avançado',
    price: 'R\$ 697,00',
    description: 'Desenvolvimento de ecossistemas complexos: telemetria GPS, pagamentos Pix/Cartão e Cloud Functions.',
    modules: [
      'Google Maps & Navigation SDK turn-by-turn',
      'Gateways de pagamento: Pix dinâmico e split',
      'Cloud Functions v2 com Node 22 e TypeScript',
      'Otimização de GPU e 60/120 FPS cravados',
      'Homologação completa na Google Play e App Store'
    ],
    color: Color(0xFF9C27B0),
  ),
];

class CursosScreen extends StatelessWidget {
  final Object? args;
  const CursosScreen({super.key, this.args});

  void _openCheckout(BuildContext context, CourseTier course) {
    showModalBottomSheet(
      context: context,
      isScrollControlled: true,
      backgroundColor: const Color(0xFF1E1B24),
      shape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.vertical(top: Radius.circular(24)),
      ),
      builder: (ctx) {
        return Padding(
          padding: EdgeInsets.only(
            left: 24,
            right: 24,
            top: 24,
            bottom: MediaQuery.of(ctx).viewInsets.bottom + 24,
          ),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Text(
                    "Checkout de Inscrição",
                    style: Theme.of(ctx).textTheme.titleMedium?.copyWith(fontWeight: FontWeight.bold),
                  ),
                  IconButton(
                    icon: const Icon(Icons.close, size: 20),
                    onPressed: () => Navigator.of(ctx).pop(),
                  ),
                ],
              ),
              const Divider(color: Colors.white12),
              const SizedBox(height: 12),
              Text(course.title, style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 16)),
              const SizedBox(height: 4),
              Text("Acesso vitalício com certificado e comunidade VIP", style: TextStyle(color: Colors.grey[400], fontSize: 12)),
              const SizedBox(height: 16),
              Container(
                padding: const EdgeInsets.all(16),
                decoration: BoxDecoration(
                  color: Colors.black26,
                  borderRadius: BorderRadius.circular(12),
                  border: Border.all(color: Colors.white12),
                ),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    const Text("Investimento:", style: TextStyle(color: Colors.grey)),
                    Text(course.price, style: const TextStyle(fontSize: 20, fontWeight: FontWeight.bold, color: Color(0xFF44D62C))),
                  ],
                ),
              ),
              const SizedBox(height: 20),
              SizedBox(
                width: double.infinity,
                child: FilledButton.icon(
                  onPressed: () {
                    Navigator.of(ctx).pop();
                    ScaffoldMessenger.of(context).showSnackBar(
                      SnackBar(
                        content: Text("Inscrição no curso ${course.title} iniciada com sucesso!"),
                        backgroundColor: const Color(0xFF44D62C),
                      ),
                    );
                  },
                  icon: const Icon(Icons.lock, size: 18),
                  label: const Text("PAGAR COM PIX OU CARTÃO"),
                  style: FilledButton.styleFrom(
                    backgroundColor: const Color(0xFF6C63FF),
                    padding: const EdgeInsets.symmetric(vertical: 16),
                  ),
                ),
              ),
            ],
          ),
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Cursos & Treinamentos Práticos"),
        leading: IconButton(
          icon: const Icon(Icons.arrow_back),
          onPressed: () => Navigator.of(context).pop(),
        ),
      ),
      body: ListView.builder(
        padding: const EdgeInsets.all(16),
        itemCount: coursesList.length,
        itemBuilder: (context, index) {
          final course = coursesList[index];
          return Card(
            margin: const EdgeInsets.only(bottom: 20),
            clipBehavior: Clip.antiAlias,
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(16),
              side: BorderSide(color: course.color.withValues(alpha: 0.3), width: 1),
            ),
            child: Padding(
              padding: const EdgeInsets.all(20),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Container(
                        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                        decoration: BoxDecoration(
                          color: course.color.withValues(alpha: 0.15),
                          borderRadius: BorderRadius.circular(6),
                        ),
                        child: Text(
                          course.level.toUpperCase(),
                          style: TextStyle(
                            color: course.color,
                            fontWeight: FontWeight.bold,
                            fontSize: 10,
                          ),
                        ),
                      ),
                      Text(
                        course.price,
                        style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold, color: Color(0xFF44D62C)),
                      ),
                    ],
                  ),
                  const SizedBox(height: 12),
                  Text(
                    course.title,
                    style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
                  ),
                  const SizedBox(height: 6),
                  Text(
                    course.description,
                    style: TextStyle(color: Colors.grey[400], fontSize: 13, height: 1.4),
                  ),
                  const SizedBox(height: 16),
                  const Text("O que você vai dominar:", style: TextStyle(fontSize: 12, fontWeight: FontWeight.bold)),
                  const SizedBox(height: 8),
                  ...course.modules.map(
                    (mod) => Padding(
                      padding: const EdgeInsets.only(bottom: 4),
                      child: Row(
                        children: [
                          Icon(Icons.check_circle, size: 14, color: course.color),
                          const SizedBox(width: 8),
                          Expanded(child: Text(mod, style: TextStyle(fontSize: 12, color: Colors.grey[300]))),
                        ],
                      ),
                    ),
                  ),
                  const SizedBox(height: 16),
                  SizedBox(
                    width: double.infinity,
                    child: OutlinedButton(
                      onPressed: () => _openCheckout(context, course),
                      style: OutlinedButton.styleFrom(
                        side: BorderSide(color: course.color),
                        padding: const EdgeInsets.symmetric(vertical: 14),
                      ),
                      child: Text("QUERO ME INSCREVER &bull; ${course.price}", style: TextStyle(color: course.color, fontWeight: FontWeight.bold)),
                    ),
                  ),
                ],
              ),
            ),
          );
        },
      ),
    );
  }
}
