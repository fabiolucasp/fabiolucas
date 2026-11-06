import 'package:flutter/material.dart';
import '../models/enhanced_models.dart';

class LoginScreen extends StatelessWidget {
  final Function(String) onLogin;

  const LoginScreen({super.key, required this.onLogin});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: SingleChildScrollView(
          padding: const EdgeInsets.all(32),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Container(
                padding: const EdgeInsets.all(24),
                decoration: BoxDecoration(
                  color: Theme.of(context).colorScheme.primary.withValues(alpha: 0.1),
                  shape: BoxShape.circle,
                ),
                child: Icon(
                  Icons.lock_outline,
                  size: 48,
                  color: Theme.of(context).colorScheme.primary,
                ),
              ),
              const SizedBox(height: 32),
              Text(
                "Acesso Exclusivo",
                style: Theme.of(context).textTheme.headlineMedium?.copyWith(
                  fontWeight: FontWeight.bold,
                ),
              ),
              const SizedBox(height: 8),
              Text(
                "Acompanhe seu projeto em tempo real",
                style: TextStyle(color: Colors.grey[500]),
              ),
              const SizedBox(height: 48),
              _buildTextField(context, "Email", Icons.email_outlined),
              const SizedBox(height: 16),
              _buildTextField(context, "Senha", Icons.lock_outline, isPassword: true),
              const SizedBox(height: 32),
              SizedBox(
                width: double.infinity,
                child: FilledButton(
                  onPressed: () {
                    onLogin("user@demo.com");
                    Navigator.of(context).pushReplacementNamed("/roles");
                  },
                  style: FilledButton.styleFrom(
                    padding: const EdgeInsets.symmetric(vertical: 16),
                  ),
                  child: const Text("ENTRAR"),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildTextField(BuildContext context, String label, IconData icon, {bool isPassword = false}) {
    return TextField(
      obscureText: isPassword,
      decoration: InputDecoration(
        labelText: label,
        prefixIcon: Icon(icon),
        border: OutlineInputBorder(
          borderRadius: BorderRadius.circular(12),
        ),
        filled: true,
        fillColor: Theme.of(context).cardColor,
      ),
    );
  }
}

class RoleSelectionScreen extends StatelessWidget {
  final Function(UserRole) onSelect;

  const RoleSelectionScreen({super.key, required this.onSelect});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Founders OS · Selecione seu Perfil"),
        centerTitle: true,
      ),
      body: Center(
        child: SingleChildScrollView(
          padding: const EdgeInsets.all(24),
          child: ConstrainedBox(
            constraints: const BoxConstraints(maxWidth: 800),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                const Icon(Icons.hub_outlined, size: 56, color: Color(0xFF44D62C)),
                const SizedBox(height: 16),
                Text(
                  "Portal de Gestão Founders OS",
                  style: Theme.of(context).textTheme.headlineMedium?.copyWith(
                    fontWeight: FontWeight.bold,
                    fontFamily: 'monospace',
                  ),
                  textAlign: TextAlign.center,
                ),
                const SizedBox(height: 8),
                Text(
                  "Escolha seu perfil para acessar o ecossistema unificado de desenvolvimento e marketing",
                  style: TextStyle(color: Colors.grey[400]),
                  textAlign: TextAlign.center,
                ),
                const SizedBox(height: 36),
                LayoutBuilder(
                  builder: (context, constraints) {
                    final isNarrow = constraints.maxWidth < 600;
                    return Flex(
                      direction: isNarrow ? Axis.vertical : Axis.horizontal,
                      mainAxisAlignment: MainAxisAlignment.center,
                      crossAxisAlignment: CrossAxisAlignment.stretch,
                      children: [
                        Expanded(
                          flex: isNarrow ? 0 : 1,
                          child: _buildRoleCard(
                            context,
                            title: "Administrador",
                            subtitle: "Fábio Lucas - Master Dev",
                            description: "Gestão completa de projetos, faturamento, Instagram Studio, automações de IA e controle total de CRUD (Criar, Alterar e Deletar).",
                            badge: "Acesso Total (CRUD)",
                            badgeColor: const Color(0xFF44D62C),
                            icon: Icons.admin_panel_settings_rounded,
                            role: UserRole.admin,
                          ),
                        ),
                        SizedBox(width: isNarrow ? 0 : 20, height: isNarrow ? 20 : 0),
                        Expanded(
                          flex: isNarrow ? 0 : 1,
                          child: _buildRoleCard(
                            context,
                            title: "Cliente",
                            subtitle: "Área Exclusiva do Cliente",
                            description: "Acompanhamento em tempo real do aplicativo, commits no GitHub, status de homologação, aprovação de posts e faturas transparentes.",
                            badge: "Acompanhamento & Aprovações",
                            badgeColor: const Color(0xFF00B4D8),
                            icon: Icons.person_pin_rounded,
                            role: UserRole.client,
                          ),
                        ),
                      ],
                    );
                  },
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }

  Widget _buildRoleCard(
    BuildContext context, {
    required String title,
    required String subtitle,
    required String description,
    required String badge,
    required Color badgeColor,
    required IconData icon,
    required UserRole role,
  }) {
    return Card(
      elevation: 4,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(16),
        side: BorderSide(color: badgeColor.withValues(alpha: 0.4), width: 1.5),
      ),
      color: const Color(0xFF111111),
      clipBehavior: Clip.antiAlias,
      child: InkWell(
        onTap: () {
          onSelect(role);
          Navigator.of(context).pushReplacementNamed("/dashboard", arguments: role);
        },
        child: Padding(
          padding: const EdgeInsets.all(24),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Container(
                    padding: const EdgeInsets.all(12),
                    decoration: BoxDecoration(
                      color: badgeColor.withValues(alpha: 0.15),
                      borderRadius: BorderRadius.circular(12),
                    ),
                    child: Icon(icon, size: 36, color: badgeColor),
                  ),
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                    decoration: BoxDecoration(
                      color: badgeColor.withValues(alpha: 0.2),
                      borderRadius: BorderRadius.circular(20),
                      border: Border.all(color: badgeColor.withValues(alpha: 0.4)),
                    ),
                    child: Text(
                      badge,
                      style: TextStyle(fontSize: 11, fontWeight: FontWeight.bold, color: badgeColor),
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 20),
              Text(
                title,
                style: const TextStyle(fontSize: 22, fontWeight: FontWeight.bold, color: Colors.white),
              ),
              const SizedBox(height: 4),
              Text(
                subtitle,
                style: TextStyle(fontSize: 13, color: badgeColor, fontWeight: FontWeight.w600),
              ),
              const SizedBox(height: 12),
              Text(
                description,
                style: TextStyle(fontSize: 13, color: Colors.grey[400], height: 1.4),
              ),
              const SizedBox(height: 24),
              SizedBox(
                width: double.infinity,
                child: FilledButton.icon(
                  onPressed: () {
                    onSelect(role);
                    Navigator.of(context).pushReplacementNamed("/dashboard", arguments: role);
                  },
                  icon: const Icon(Icons.arrow_forward_rounded, size: 18),
                  label: Text("Entrar como $title"),
                  style: FilledButton.styleFrom(
                    backgroundColor: badgeColor,
                    foregroundColor: Colors.black,
                    textStyle: const TextStyle(fontWeight: FontWeight.bold),
                    padding: const EdgeInsets.symmetric(vertical: 14),
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
