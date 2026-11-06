import '../models/models.dart';

class MockData {
  static final ProjectStats stats = ProjectStats(
    totalCommits: 342,
    hoursSpent: 128,
    upcomingMeetings: 2,
    progress: 0.65,
  );

  static final List<Activity> activities = [
    Activity(
      id: '1',
      type: ActivityType.commit,
      timestamp: DateTime.now().subtract(const Duration(minutes: 5)),
      title: "New Commit",
      subtitle: "feat: Implementação do gateway de pagamento",
      detail: "hash: 8f3a2c1",
    ),
    Activity(
      id: '2',
      type: ActivityType.meeting,
      timestamp: DateTime.now().subtract(const Duration(minutes: 5)),
      title: "Reunião Agendada",
      subtitle: "Reunião para 03/10 às 14:00 (30 min)",
      hasAction: true,
    ),
    Activity(
      id: '3',
      type: ActivityType.update,
      timestamp: DateTime.now().subtract(const Duration(days: 2)),
      title: "Feed Semanal & Updates",
      subtitle: "Resumo automático das atividades e milestones alcançados",
      detail: "Vídeo disponível",
      hasAction: true,
    ),
    Activity(
      id: '4',
      type: ActivityType.commit,
      timestamp: DateTime.now().subtract(const Duration(days: 3)),
      title: "New Commit",
      subtitle: "fix: Correção de layout na tela de login",
      detail: "hash: 7b2x9y0",
    ),
  ];
}
