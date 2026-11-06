import 'package:flutter/material.dart';
import '../data/mock_data.dart';
import '../data/enhanced_mock_data.dart';
import '../models/models.dart';
import '../models/enhanced_models.dart';
import '../widgets/activity_cards.dart';
import '../widgets/advanced_widgets.dart';
import '../utils/notifications.dart';
import 'drawer_landing_page.dart';

class DashboardScreen extends StatelessWidget {
  final UserRole role;

  const DashboardScreen({super.key, this.role = UserRole.client});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      drawer: const Drawer(child: DrawerLandingPage()),
      body: CustomScrollView(
        slivers: [
          SliverAppBar.medium(
            title: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  _getRoleTitle(role),
                  style: const TextStyle(fontWeight: FontWeight.bold),
                ),
                Text(
                  role == UserRole.client ? "Acompanhe o desenvolvimento" : "Painel Operacional",
                  style: const TextStyle(fontSize: 12, color: Colors.grey, fontWeight: FontWeight.normal),
                ),
              ],
            ),
            actions: [
              IconButton(
                icon: const Icon(Icons.notifications_outlined),
                onPressed: () {
                   CustomNotifications.show(
                      context, 
                      title: "Nova Atualização", 
                      body: "Commit #8f3a2c1 implantado com sucesso."
                   );
                },
              ),
              const Padding(
                padding: EdgeInsets.only(right: 16),
                child: CircleAvatar(
                  radius: 16,
                  backgroundColor: Color(0xFF333333),
                  child: Icon(Icons.person, size: 20, color: Colors.white),
                ),
              ),
            ],
          ),
          
          SliverToBoxAdapter(
            child: SingleChildScrollView(
              scrollDirection: Axis.horizontal,
              padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
              child: Row(
                children: [
                  ActionChip(
                    avatar: const Icon(Icons.language, size: 16, color: Color(0xFF44D62C)),
                    label: const Text("Landing Page"),
                    onPressed: () => Navigator.of(context).pushNamed("/landing"),
                  ),
                  const SizedBox(width: 8),
                  ActionChip(
                    avatar: const Icon(Icons.school, size: 16, color: Color(0xFFD0BCFF)),
                    label: const Text("Cursos & EAD"),
                    onPressed: () => Navigator.of(context).pushNamed("/cursos"),
                  ),
                  const SizedBox(width: 8),
                  ActionChip(
                    avatar: const Icon(Icons.video_collection, size: 16, color: Color(0xFFFCAF45)),
                    label: const Text("Player de Provas"),
                    onPressed: () => Navigator.of(context).pushNamed("/provas"),
                  ),
                  const SizedBox(width: 8),
                  ActionChip(
                    avatar: const Icon(Icons.receipt_long, size: 16, color: Color(0xFF00B54B)),
                    label: const Text("Comprovante Pineapple"),
                    onPressed: () => Navigator.of(context).pushNamed("/comprovante"),
                  ),
                ],
              ),
            ),
          ),

          if (role != UserRole.client) ...[
            SliverToBoxAdapter(
              child: Padding(
                padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
                child: FinanceCard(
                  data: EnhancedMockData.finance,
                  onAction: () {
                    CustomNotifications.show(
                      context, 
                      title: "Saque Solicitado", 
                      body: "Sua solicitação será processada em até 24h.",
                      isUrgent: true
                    );
                  },
                ),
              ),
            ),
            SliverToBoxAdapter(
              child: Padding(
                padding: const EdgeInsets.fromLTRB(16, 24, 16, 8),
                child: Text(
                  "FERRAMENTAS",
                  style: Theme.of(context).textTheme.labelLarge?.copyWith(
                    color: Colors.grey,
                    letterSpacing: 1.5,
                  ),
                ),
              ),
            ),
            SliverPadding(
              padding: const EdgeInsets.symmetric(horizontal: 16),
              sliver: SliverToBoxAdapter(
                child: ToolsGrid(
                  tools: role == UserRole.programmer 
                      ? EnhancedMockData.devTools 
                      : EnhancedMockData.designTools,
                ),
              ),
            ),
             const SliverPadding(padding: EdgeInsets.only(top: 24)),
          ],

          if (role == UserRole.client) ...[
            SliverToBoxAdapter(
              child: Padding(
                padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
                child: Column(
                  children: [
                    Row(
                      children: [
                        Expanded(
                          child: _StatCard(
                            label: "Commits GitHub",
                            value: "${MockData.stats.totalCommits}",
                            icon: Icons.commit,
                            color: Theme.of(context).colorScheme.primary,
                          ),
                        ),
                        const SizedBox(width: 12),
                        Expanded(
                          child: _StatCard(
                            label: "Horas de IA",
                            value: "46.8h",
                            icon: Icons.psychology_outlined,
                            color: const Color(0xFFD0BCFF),
                          ),
                        ),
                      ],
                    ),
                    const SizedBox(height: 12),
                    Row(
                      children: [
                        Expanded(
                          child: _StatCard(
                            label: "Saldo de Tokens",
                            value: "5.5M / 20M",
                            icon: Icons.token_outlined,
                            color: const Color(0xFF44D62C),
                          ),
                        ),
                        const SizedBox(width: 12),
                        Expanded(
                          child: _StatCard(
                            label: "Intervenções Fábio",
                            value: "4 resolvidas",
                            icon: Icons.verified_user_outlined,
                            color: const Color(0xFF00B4D8),
                          ),
                        ),
                      ],
                    ),
                    const SizedBox(height: 12),
                    Container(
                      padding: const EdgeInsets.all(16),
                      decoration: BoxDecoration(
                        color: const Color(0xFF161D2B),
                        borderRadius: BorderRadius.circular(12),
                        border: Border.all(color: const Color(0xFFF59E0B).withValues(alpha: 0.3)),
                      ),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Row(
                            mainAxisAlignment: MainAxisAlignment.spaceBetween,
                            children: [
                              Row(
                                children: [
                                  const Icon(Icons.local_shipping_outlined, color: Color(0xFFF59E0B), size: 20),
                                  const SizedBox(width: 8),
                                  Text(
                                    "Demanda & Remanejamento",
                                    style: Theme.of(context).textTheme.titleSmall?.copyWith(
                                      fontWeight: FontWeight.bold,
                                      color: Colors.white,
                                    ),
                                  ),
                                ],
                              ),
                              Container(
                                padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2),
                                decoration: BoxDecoration(
                                  color: const Color(0xFFF59E0B).withValues(alpha: 0.15),
                                  borderRadius: BorderRadius.circular(12),
                                ),
                                child: const Text(
                                  "IA Preditiva",
                                  style: TextStyle(fontSize: 10, color: Color(0xFFF59E0B), fontWeight: FontWeight.bold),
                                ),
                              ),
                            ],
                          ),
                          const SizedBox(height: 8),
                          Text(
                            "1 pedido isolado na terça-feira remanejado para sexta-feira. Economia de frete e custos invisíveis: R$ 380,00 este mês.",
                            style: TextStyle(fontSize: 12, color: Colors.grey[300], height: 1.4),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ],
          
          SliverToBoxAdapter(
            child: Padding(
              padding: const EdgeInsets.fromLTRB(16, 24, 16, 8),
              child: Text(
                role == UserRole.client ? "LINHA DO TEMPO" : "ATIVIDADE RECENTE",
                style: Theme.of(context).textTheme.labelLarge?.copyWith(
                  color: Colors.grey,
                  letterSpacing: 1.5,
                ),
              ),
            ),
          ),

          SliverPadding(
            padding: const EdgeInsets.symmetric(horizontal: 16),
            sliver: SliverList(
              delegate: SliverChildBuilderDelegate(
                (context, index) {
                  final activity = MockData.activities[index];
                  switch (activity.type) {
                    case ActivityType.commit:
                      return CommitCard(activity: activity);
                    case ActivityType.meeting:
                      return MeetingCard(activity: activity);
                    case ActivityType.update:
                      return UpdateCard(activity: activity);
                  }
                },
                childCount: MockData.activities.length,
              ),
            ),
          ),

          // Footer
          SliverToBoxAdapter(
            child: Padding(
              padding: const EdgeInsets.all(32.0),
              child: Column(
                children: [
                  const Divider(color: Colors.white10),
                  const SizedBox(height: 24),
                  if (role == UserRole.client)
                    Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        _StoreBadge(icon: Icons.android, label: "Google Play"),
                        const SizedBox(width: 16),
                        _StoreBadge(icon: Icons.apple, label: "App Store"),
                      ],
                    ),
                  const SizedBox(height: 24),
                  Text(
                    "© 2026 Fábio Lucas.",
                    style: TextStyle(color: Colors.grey[600], fontSize: 12),
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
  
  String _getRoleTitle(UserRole role) {
    switch (role) {
      case UserRole.programmer: return "Área do Desenvolvedor";
      case UserRole.designer: return "Estúdio Criativo";
      case UserRole.admin: return "Administração";
      default: return "Experiência Exclusiva";
    }
  }
}

class _StatCard extends StatelessWidget {
  final String label;
  final String value;
  final IconData icon;
  final Color color;

  const _StatCard({required this.label, required this.value, required this.icon, required this.color});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(
        color: Theme.of(context).colorScheme.surfaceContainer,
        borderRadius: BorderRadius.circular(12),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Icon(icon, color: color, size: 20),
          const SizedBox(height: 8),
          Text(value, style: const TextStyle(fontSize: 20, fontWeight: FontWeight.bold)),
          Text(label, style: TextStyle(fontSize: 12, color: Colors.grey[500])),
        ],
      ),
    );
  }
}

class _StoreBadge extends StatelessWidget {
  final IconData icon;
  final String label;

  const _StoreBadge({required this.icon, required this.label});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
      decoration: BoxDecoration(
        border: Border.all(color: Colors.white24),
        borderRadius: BorderRadius.circular(8),
      ),
      child: Row(
        children: [
          Icon(icon, size: 16),
          const SizedBox(width: 8),
          Text(label, style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w600)),
        ],
      ),
    );
  }
}
