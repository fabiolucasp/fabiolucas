import 'package:flutter/material.dart';

class AppTheme {
  static final ThemeData darkTheme = ThemeData(
    useMaterial3: true,
    brightness: Brightness.dark,
    colorScheme: ColorScheme.fromSeed(
      seedColor: const Color(0xFF6C63FF), // Primary Brand Color
      brightness: Brightness.dark,
      surface: const Color(0xFF1C1B1F), // M3 Dark Surface
      surfaceContainer: const Color(0xFF252429), // Slightly lighter for cards
      primary: const Color(0xFFD0BCFF), // M3 Primary Light
      onPrimary: const Color(0xFF381E72),
      secondary: const Color(0xFFCCC2DC),
      tertiary: const Color(0xFFEFB8C8),
    ),
    scaffoldBackgroundColor: const Color(0xFF141218),
    cardTheme: CardThemeData(
      elevation: 0,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(16),
        side: BorderSide(color: Colors.white.withValues(alpha: 0.08), width: 1),
      ),
      color: const Color(0xFF252429),
    ),
    appBarTheme: const AppBarTheme(
      backgroundColor: Color(0xFF141218),
      elevation: 0,
      centerTitle: false,
    ),
    navigationBarTheme: NavigationBarThemeData(
      backgroundColor: const Color(0xFF1C1B1F),
      indicatorColor: const Color(0xFF4F378B),
      labelTextStyle: WidgetStateProperty.all(
        const TextStyle(fontSize: 12, fontWeight: FontWeight.w500),
      ),
    ),
  );
}
