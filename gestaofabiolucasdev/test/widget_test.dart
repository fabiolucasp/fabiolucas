import 'package:flutter_test/flutter_test.dart';
import 'package:gestaofabiolucasdev/main.dart';

void main() {
  testWidgets('ClientTrackerApp smoke test', (WidgetTester tester) async {
    await tester.pumpWidget(const ClientTrackerApp());
    expect(find.byType(ClientTrackerApp), findsOneWidget);
  });
}
