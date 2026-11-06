import 'package:flutter/material.dart';
import 'package:url_strategy/url_strategy.dart';
import 'theme/app_theme.dart';
import 'routes/route_generator.dart';

final GlobalKey<NavigatorState> appNavigatorKey = GlobalKey<NavigatorState>();

void main() {
  setPathUrlStrategy();
  runApp(const ClientTrackerApp());
}

class ClientTrackerApp extends StatelessWidget {
  const ClientTrackerApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Fábio Lucas Dev - ERP & Plataforma',
      debugShowCheckedModeBanner: false,
      theme: AppTheme.darkTheme,
      navigatorKey: appNavigatorKey,
      initialRoute: "/",
      onGenerateRoute: RouteGenerator.generateRoute,
    );
  }
}
