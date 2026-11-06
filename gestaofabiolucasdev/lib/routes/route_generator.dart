import 'package:flutter/material.dart';
import '../controllers/splash_screen.dart';
import '../controllers/receipt_controller.dart';
import '../screens/auth_screens.dart';
import '../screens/dashboard_screen.dart';
import '../screens/landing_page_screen.dart';
import '../screens/cursos_screen.dart';
import '../screens/provas_screen.dart';
import '../models/enhanced_models.dart';

class RouteGenerator {
  static Route<dynamic> generateRoute(RouteSettings settings) {
    final args = settings.arguments;
    final uri = Uri.parse(settings.name ?? "/");
    final routePath = uri.path;

    switch (routePath) {
      case "/":
      case "/splash":
        return _buildTransition(SplashScreen(args: args));

      case "/login":
        return _buildTransition(LoginScreen(onLogin: (email) {}));

      case "/roles":
        return _buildTransition(RoleSelectionScreen(onSelect: (role) {}));

      case "/dashboard":
        final role = args is UserRole ? args : UserRole.client;
        return _buildTransition(DashboardScreen(role: role));

      case "/landing":
        return _buildTransition(LandingPageScreen(args: args));

      case "/cursos":
      case "/ebook":
      case "/mentoria":
        return _buildTransition(CursosScreen(args: args));

      case "/provas":
        return _buildTransition(ProvasScreen(args: args));

      case "/comprovante":
      case "/recibo":
        return _buildTransition(ReceiptScreen(args: args));

      default:
        return _buildTransition(
          Scaffold(
            appBar: AppBar(title: const Text("Página não encontrada")),
            body: Center(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  const Icon(Icons.error_outline, size: 48, color: Colors.redAccent),
                  const SizedBox(height: 16),
                  Text("Rota desconhecida: $routePath"),
                  const SizedBox(height: 24),
                  FilledButton(
                    onPressed: () {},
                    child: const Text("Voltar ao Início"),
                  ),
                ],
              ),
            ),
          ),
        );
    }
  }

  static PageRouteBuilder _buildTransition(Widget child) {
    return PageRouteBuilder(
      pageBuilder: (context, animation, secondaryAnimation) => child,
      transitionsBuilder: (context, animation, secondaryAnimation, child) {
        const begin = Offset(0.0, 0.05);
        const end = Offset.zero;
        const curve = Curves.easeOutCubic;

        final tween = Tween(begin: begin, end: end).chain(CurveTween(curve: curve));
        final fadeTween = Tween<double>(begin: 0.0, end: 1.0);

        return FadeTransition(
          opacity: animation.drive(fadeTween),
          child: SlideTransition(
            position: animation.drive(tween),
            child: child,
          ),
        );
      },
    );
  }
}
