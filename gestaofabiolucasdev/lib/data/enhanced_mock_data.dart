import 'package:flutter/material.dart';
import '../models/enhanced_models.dart';

class EnhancedMockData {
  static final FinanceData finance = FinanceData(available: 15400.00, pending: 4200.00);

  static final List<Task> tasks = [
    Task(title: "Refatoração Backend Cloud Functions", assignee: "Dev Team", deadline: "Hoje", status: "in_progress", priority: "high"),
    Task(title: "Catálogo de Cursos & E-books", assignee: "Fábio Lucas", deadline: "Amanhã", status: "completed", priority: "medium"),
    Task(title: "Configuração SEO Dinâmico (Open Graph)", assignee: "DevOps", deadline: "Concluído", status: "completed", priority: "low"),
    Task(title: "Emissão de Comprovante PineapplePay", assignee: "Fintech", deadline: "15/10", status: "completed", priority: "high"),
  ];

  static final List<ToolData> devTools = [
    ToolData(title: "Landing Page", subtitle: "Portfólio Web Flutter", tag: "WEB", icon: Icons.language, route: "/landing"),
    ToolData(title: "Cursos & EAD", subtitle: "Catálogo de Treinamentos", tag: "EAD", icon: Icons.school, route: "/cursos"),
    ToolData(title: "Player de Provas", subtitle: "Vídeos de Evidência", tag: "VÍDEO", icon: Icons.video_collection, route: "/provas"),
    ToolData(title: "Recibo Pineapple", subtitle: "Gerador PDF Cashback", tag: "PDF", icon: Icons.receipt_long, route: "/comprovante"),
    ToolData(title: "Terminal Cloud", subtitle: "SSH Direct", tag: "SSH", icon: Icons.terminal),
    ToolData(title: "Pipeline Master", subtitle: "Build #9982", tag: "CI/CD", icon: Icons.rocket_launch),
    ToolData(title: "API Watchtower", subtitle: "Latency 24ms", tag: "API", icon: Icons.radar),
    ToolData(title: "Docker Ops", subtitle: "5 Containers", tag: "K8S", icon: Icons.view_in_ar),
    ToolData(title: "Tech Debt", subtitle: "Zero Débito Ativo", tag: "CHECK", icon: Icons.verified, alert: false),
  ];

  static final List<ToolData> designTools = [
    ToolData(title: "Landing Page", subtitle: "Visualizar UI Web", tag: "WEB", icon: Icons.language, route: "/landing"),
    ToolData(title: "Figma Sync", subtitle: "Live Updates", tag: "SYNC", icon: Icons.palette),
    ToolData(title: "Design Sys", subtitle: "Library v2.1", tag: "LIB", icon: Icons.style),
    ToolData(title: "Heatmap", subtitle: "User Behavior", tag: "UX", icon: Icons.local_fire_department),
    ToolData(title: "Handoff", subtitle: "Ready for Dev", tag: "JSON", icon: Icons.data_object),
  ];
}
