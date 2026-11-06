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
      appBar: AppBar(title: const Text("Selecione seu Perfil")),
      body: GridView.count(
        padding: const EdgeInsets.all(24),
        crossAxisCount: 2,
        mainAxisSpacing: 16,
        crossAxisSpacing: 16,
        children: [
          _buildCard(context, "Cliente", Icons.person_outline, UserRole.client),
          _buildCard(context, "Programador", Icons.terminal, UserRole.programmer),
          _buildCard(context, "Designer", Icons.brush, UserRole.designer),
          _buildCard(context, "Admin", Icons.security, UserRole.admin),
        ],
      ),
    );
  }

  Widget _buildCard(BuildContext context, String title, IconData icon, UserRole role) {
    return Card(
      clipBehavior: Clip.antiAlias,
      child: InkWell(
        onTap: () {
          onSelect(role);
          Navigator.of(context).pushReplacementNamed("/dashboard", arguments: role);
        },
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(icon, size: 48, color: Theme.of(context).colorScheme.primary),
            const SizedBox(height: 16),
            Text(title, style: const TextStyle(fontWeight: FontWeight.bold)),
          ],
        ),
      ),
    );
  }
}
