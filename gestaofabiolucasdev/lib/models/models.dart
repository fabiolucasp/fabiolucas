enum ActivityType { commit, meeting, update }

class Activity {
  final String id;
  final ActivityType type;
  final DateTime timestamp;
  final String title;
  final String? subtitle;
  final String? detail;
  final bool hasAction;

  Activity({
    required this.id,
    required this.type,
    required this.timestamp,
    required this.title,
    this.subtitle,
    this.detail,
    this.hasAction = false,
  });
}

class ProjectStats {
  final int totalCommits;
  final int hoursSpent;
  final int upcomingMeetings;
  final double progress;

  ProjectStats({
    required this.totalCommits,
    required this.hoursSpent,
    required this.upcomingMeetings,
    required this.progress,
  });
}
