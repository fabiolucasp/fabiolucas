import 'package:flutter/material.dart';
import 'package:video_player/video_player.dart';

class ProvasScreen extends StatefulWidget {
  final Object? args;
  const ProvasScreen({super.key, this.args});

  @override
  State<ProvasScreen> createState() => _ProvasScreenState();
}

class _ProvasScreenState extends State<ProvasScreen> {
  late VideoPlayerController _controller;
  bool _isInitialized = false;

  @override
  void initState() {
    super.initState();
    _controller = VideoPlayerController.networkUrl(
      Uri.parse(
        "https://firebasestorage.googleapis.com/v0/b/fabiolucas-c5448.appspot.com/o/provas%2Fprovas.mp4?alt=media&token=daf60753-3e22-47e9-84fc-4f2b7ac1f7c3",
      ),
    )..initialize().then((_) {
        setState(() {
          _isInitialized = true;
        });
        _controller.setLooping(true);
        _controller.play();
      });
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Central de Provas & Evidências"),
        leading: IconButton(
          icon: const Icon(Icons.arrow_back),
          onPressed: () => Navigator.of(context).pop(),
        ),
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(20),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Video Player Card
            Card(
              clipBehavior: Clip.antiAlias,
              child: AspectRatio(
                aspectRatio: _isInitialized ? _controller.value.aspectRatio : 16 / 9,
                child: Stack(
                  alignment: Alignment.bottomCenter,
                  children: [
                    if (_isInitialized)
                      VideoPlayer(_controller)
                    else
                      const Center(
                        child: CircularProgressIndicator(),
                      ),
                    if (_isInitialized) ...[
                      // Overlay de Play/Pause
                      Center(
                        child: IconButton(
                          iconSize: 56,
                          icon: Icon(
                            _controller.value.isPlaying ? Icons.pause_circle : Icons.play_circle,
                            color: Colors.white70,
                          ),
                          onPressed: () {
                            setState(() {
                              _controller.value.isPlaying ? _controller.pause() : _controller.play();
                            });
                          },
                        ),
                      ),
                      // Barra de Progresso
                      VideoProgressIndicator(
                        _controller,
                        allowScrubbing: true,
                        colors: const VideoProgressColors(
                          playedColor: Color(0xFF6C63FF),
                          bufferedColor: Colors.white24,
                          backgroundColor: Colors.black45,
                        ),
                      ),
                    ]
                  ],
                ),
              ),
            ),
            const SizedBox(height: 20),

            // Controles de Velocidade
            if (_isInitialized)
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [0.5, 1.0, 1.5, 2.0].map((speed) {
                  final isCurrent = _controller.value.playbackSpeed == speed;
                  return Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 4),
                    child: ChoiceChip(
                      label: Text("${speed}x"),
                      selected: isCurrent,
                      onSelected: (selected) {
                        if (selected) {
                          setState(() {
                            _controller.setPlaybackSpeed(speed);
                          });
                        }
                      },
                    ),
                  );
                }).toList(),
              ),

            const SizedBox(height: 24),

            // Informações do Case
            Text(
              "Demonstração de Software em Vídeo",
              style: Theme.of(context).textTheme.titleLarge?.copyWith(fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 8),
            Text(
              "Registro em tempo real da execução dos aplicativos, testes de performance de 60/120 FPS e validação de funcionalidades de checkout e geolocalização.",
              style: TextStyle(color: Colors.grey[400], height: 1.5),
            ),
          ],
        ),
      ),
    );
  }
}
