enum UserRole { client, programmer, designer, admin }

class Task {
  final String title;
  final String assignee;
  final String deadline;
  final String status; // 'pending', 'in_progress', 'completed'
  final String priority; // 'low', 'medium', 'high'

  Task({
    required this.title,
    required this.assignee,
    required this.deadline,
    required this.status,
    required this.priority,
  });
}

class ToolData {
  final String title;
  final String subtitle;
  final String tag;
  final bool alert;
  final dynamic icon;
  final String? route;

  ToolData({
    required this.title,
    required this.subtitle,
    required this.tag,
    required this.icon,
    this.alert = false,
    this.route,
  });
}

class FinanceData {
  final double available;
  final double pending;

  FinanceData({required this.available, required this.pending});
}
