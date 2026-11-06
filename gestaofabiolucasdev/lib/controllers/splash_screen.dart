import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:lottie/lottie.dart';

class SplashScreen extends StatefulWidget {
  final Object? args;
  const SplashScreen({super.key, this.args});

  @override
  State<SplashScreen> createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> {
  Future<Map<String, dynamic>>? _appInitFuture;

  @override
  void initState() {
    super.initState();
    _appInitFuture = _initializeApplication();
  }

  Future<Map<String, dynamic>> _initializeApplication() async {
    WidgetsFlutterBinding.ensureInitialized();
    Map<String, dynamic> status = {};

    try {
      if (kIsWeb) {
        await Firebase.initializeApp(
          options: const FirebaseOptions(
            apiKey: "AIzaSyBby9Ld6bzzEkLSE3xycrz0GGKTFNw8kxw",
            authDomain: "portifolio-66eb2.firebaseapp.com",
            projectId: "portifolio-66eb2",
            storageBucket: "portifolio-66eb2.appspot.com",
            messagingSenderId: "832624274814",
            appId: "1:832624274814:web:b3c1a54554de2b5eff572f",
            measurementId: "G-H8Y76WVEJ6",
          ),
        );
      } else {
        await Firebase.initializeApp();
      }
      status["firebase"] = true;
      status["user"] = FirebaseAuth.instance.currentUser;
    } catch (e) {
      status["firebase"] = false;
      status["error"] = e.toString();
    }

    // Delay mínimo estético de 1.5s para exibir o branding
    await Future.delayed(const Duration(milliseconds: 1500));
    return status;
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF141218),
      body: FutureBuilder<Map<String, dynamic>>(
        future: _appInitFuture,
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.done) {
            WidgetsBinding.instance.addPostFrameCallback((_) {
              if (mounted) {
                Navigator.of(context).pushReplacementNamed("/dashboard");
              }
            });
          }

          return Center(
            child: SingleChildScrollView(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  // Animação Lottie de Inicialização
                  SizedBox(
                    width: 180,
                    height: 180,
                    child: Lottie.asset(
                      "src/animation/carregando-dados-servidores.json",
                      errorBuilder: (context, error, stackTrace) {
                        return Container(
                          width: 80,
                          height: 80,
                          decoration: BoxDecoration(
                            color: Colors.black,
                            borderRadius: BorderRadius.circular(16),
                            border: Border.all(color: Colors.white24),
                          ),
                          child: const Center(
                            child: Text(
                              "F/L",
                              style: TextStyle(
                                color: Colors.white,
                                fontWeight: FontWeight.bold,
                                fontSize: 24,
                              ),
                            ),
                          ),
                        );
                      },
                    ),
                  ),
                  const SizedBox(height: 24),
                  const Text(
                    "FÁBIO LUCAS DEV",
                    style: TextStyle(
                      color: Colors.white,
                      fontSize: 18,
                      fontWeight: FontWeight.bold,
                      letterSpacing: 2,
                    ),
                  ),
                  const SizedBox(height: 6),
                  const Text(
                    "ERP & Plataforma Operacional",
                    style: TextStyle(
                      color: Color(0xFFD0BCFF),
                      fontSize: 12,
                      letterSpacing: 1,
                    ),
                  ),
                  const SizedBox(height: 24),
                  const SizedBox(
                    width: 24,
                    height: 24,
                    child: CircularProgressIndicator(
                      strokeWidth: 2,
                      valueColor: AlwaysStoppedAnimation<Color>(Color(0xFF6C63FF)),
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
