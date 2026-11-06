import 'package:flutter/material.dart';
import '../models/enhanced_models.dart';

class FinanceCard extends StatelessWidget {
  final FinanceData data;
  final String title;
  final VoidCallback onAction;

  const FinanceCard({
    super.key, 
    required this.data, 
    this.title = "Carteira Digital",
    required this.onAction,
  });

  @override
  Widget build(BuildContext context) {
    final primary = Theme.of(context).colorScheme.primary;
    
    return Card(
      child: Padding(
        padding: const EdgeInsets.all(20),
        child: Column(
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Row(
                  children: [
                    Icon(Icons.account_balance_wallet, color: primary),
                    const SizedBox(width: 8),
                    Text(title.toUpperCase(), style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 12)),
                  ],
                ),
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 2),
                  decoration: BoxDecoration(
                    color: primary.withValues(alpha: 0.1),
                    borderRadius: BorderRadius.circular(4),
                  ),
                  child: Text("#WALLET", style: TextStyle(fontSize: 10, color: primary)),
                ),
              ],
            ),
            const SizedBox(height: 20),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text("DISPONÍVEL", style: TextStyle(fontSize: 10, color: Colors.grey[500])),
                    Text(
                      "R\$ ${data.available.toStringAsFixed(2)}",
                      style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold, color: primary),
                    ),
                  ],
                ),
                Column(
                  crossAxisAlignment: CrossAxisAlignment.end,
                  children: [
                    Text("PENDENTE", style: TextStyle(fontSize: 10, color: Colors.grey[500])),
                    Text(
                      "R\$ ${data.pending.toStringAsFixed(2)}",
                      style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w500),
                    ),
                  ],
                ),
              ],
            ),
            const SizedBox(height: 16),
            SizedBox(
              width: double.infinity,
              child: OutlinedButton(
                onPressed: onAction,
                child: const Text("SOLICITAR SAQUE"),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class ToolsGrid extends StatelessWidget {
  final List<ToolData> tools;

  const ToolsGrid({super.key, required this.tools});

  @override
  Widget build(BuildContext context) {
    return GridView.builder(
      shrinkWrap: true,
      physics: const NeverScrollableScrollPhysics(),
      gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: 2,
        childAspectRatio: 1.6,
        crossAxisSpacing: 12,
        mainAxisSpacing: 12,
      ),
      itemCount: tools.length,
      itemBuilder: (context, index) {
        final tool = tools[index];
        final color = tool.alert ? Colors.red : Theme.of(context).colorScheme.primary;
        
        return InkWell(
          borderRadius: BorderRadius.circular(12),
          onTap: () {
            if (tool.route != null) {
              Navigator.of(context).pushNamed(tool.route!);
            }
          },
          child: Container(
            padding: const EdgeInsets.all(12),
            decoration: BoxDecoration(
              color: Theme.of(context).cardColor,
              borderRadius: BorderRadius.circular(12),
              border: Border.all(
                color: tool.alert ? Colors.red.withValues(alpha: 0.5) : Colors.transparent,
              ),
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Icon(tool.icon, color: color, size: 20),
                    Text(
                      tool.tag,
                      style: TextStyle(fontSize: 10, fontWeight: FontWeight.bold, color: color),
                    ),
                  ],
                ),
                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      tool.title,
                      style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 13),
                      maxLines: 1,
                      overflow: TextOverflow.ellipsis,
                    ),
                    Text(
                      tool.subtitle,
                      style: TextStyle(fontSize: 11, color: Colors.grey[500]),
                      maxLines: 1,
                      overflow: TextOverflow.ellipsis,
                    ),
                  ],
                )
              ],
            ),
          ),
        );
      },
    );
  }
}
