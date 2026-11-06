import 'dart:typed_data';
import 'package:flutter/material.dart';
import 'package:pdf/pdf.dart';
import 'package:pdf/widgets.dart' as pw;
import 'package:printing/printing.dart';

class ReceiptScreen extends StatefulWidget {
  final Object? args;
  const ReceiptScreen({super.key, this.args});

  @override
  State<ReceiptScreen> createState() => _ReceiptScreenState();
}

class _ReceiptScreenState extends State<ReceiptScreen> {
  Future<Uint8List> _generatePdf(PdfPageFormat format) async {
    final doc = pw.Document(title: "Comprovante PineapplePay", author: "Fábio Lucas Dev");

    doc.addPage(
      pw.Page(
        pageFormat: PdfPageFormat.a4,
        build: (pw.Context context) {
          return pw.Padding(
            padding: const pw.EdgeInsets.all(32),
            child: pw.Column(
              crossAxisAlignment: pw.CrossAxisAlignment.start,
              children: [
                // Header PineapplePay
                pw.Row(
                  mainAxisAlignment: pw.MainAxisAlignment.spaceBetween,
                  children: [
                    pw.Row(
                      children: [
                        pw.Text(
                          "Pineapple",
                          style: pw.TextStyle(
                            fontWeight: pw.FontWeight.bold,
                            fontSize: 26,
                            color: const PdfColor(0.91, 0.08, 0.51), // Rosa Pineapple
                          ),
                        ),
                        pw.Text(
                          "Pay",
                          style: pw.TextStyle(
                            fontWeight: pw.FontWeight.bold,
                            fontSize: 26,
                            color: const PdfColor(0.0, 0.71, 0.29), // Verde Pineapple
                          ),
                        ),
                      ],
                    ),
                    pw.Container(
                      padding: const pw.EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                      decoration: pw.BoxDecoration(
                        color: const PdfColor(0.92, 0.98, 0.94),
                        borderRadius: pw.BorderRadius.circular(6),
                      ),
                      child: pw.Text(
                        "COMPROVANTE OFICIAL",
                        style: pw.TextStyle(
                          color: const PdfColor(0.0, 0.6, 0.25),
                          fontWeight: pw.FontWeight.bold,
                          fontSize: 10,
                        ),
                      ),
                    ),
                  ],
                ),
                pw.SizedBox(height: 16),
                pw.Divider(color: PdfColors.grey300, thickness: 1),
                pw.SizedBox(height: 20),

                // Resumo Financeiro
                pw.Row(
                  mainAxisAlignment: pw.MainAxisAlignment.spaceBetween,
                  children: [
                    pw.Column(
                      crossAxisAlignment: pw.CrossAxisAlignment.start,
                      children: [
                        pw.Text("VALOR TOTAL DA COMPRA", style: const pw.TextStyle(fontSize: 10, color: PdfColors.grey600)),
                        pw.SizedBox(height: 4),
                        pw.Text("R\$ 1.250,00", style: pw.TextStyle(fontSize: 22, fontWeight: pw.FontWeight.bold, color: PdfColors.black)),
                      ],
                    ),
                    pw.Column(
                      crossAxisAlignment: pw.CrossAxisAlignment.end,
                      children: [
                        pw.Text("CASHBACK TOTAL GERADO", style: const pw.TextStyle(fontSize: 10, color: PdfColors.grey600)),
                        pw.SizedBox(height: 4),
                        pw.Text("R\$ 125,00 (10%)", style: pw.TextStyle(fontSize: 18, fontWeight: pw.FontWeight.bold, color: const PdfColor(0.0, 0.71, 0.29))),
                      ],
                    ),
                  ],
                ),
                pw.SizedBox(height: 24),

                // Detalhamento do Cashback para Turma de Formatura
                pw.Container(
                  width: double.infinity,
                  padding: const pw.EdgeInsets.all(16),
                  decoration: pw.BoxDecoration(
                    color: const PdfColor(0.97, 0.97, 0.98),
                    borderRadius: pw.BorderRadius.circular(8),
                    border: pw.Border.all(color: PdfColors.grey300),
                  ),
                  child: pw.Column(
                    crossAxisAlignment: pw.CrossAxisAlignment.start,
                    children: [
                      pw.Text("DESTINAÇÃO DO CASHBACK", style: pw.TextStyle(fontWeight: pw.FontWeight.bold, fontSize: 11, color: PdfColors.black)),
                      pw.SizedBox(height: 8),
                      pw.Row(
                        mainAxisAlignment: pw.MainAxisAlignment.spaceBetween,
                        children: [
                          pw.Text("Turma de Medicina 2026/1 - Comissão Geral", style: const pw.TextStyle(fontSize: 10, color: PdfColors.grey800)),
                          pw.Text("R\$ 100,00", style: pw.TextStyle(fontSize: 11, fontWeight: pw.FontWeight.bold)),
                        ],
                      ),
                      pw.SizedBox(height: 4),
                      pw.Row(
                        mainAxisAlignment: pw.MainAxisAlignment.spaceBetween,
                        children: [
                          pw.Text("Taxa Administrativa da Plataforma (2%)", style: const pw.TextStyle(fontSize: 10, color: PdfColors.grey600)),
                          pw.Text("R\$ 25,00", style: const pw.TextStyle(fontSize: 10, color: PdfColors.grey600)),
                        ],
                      ),
                    ],
                  ),
                ),
                pw.SizedBox(height: 28),

                // Tabela de Produtos / Ingressos
                pw.Text("PRODUTOS & ITENS DA TRANSAÇÃO", style: pw.TextStyle(fontWeight: pw.FontWeight.bold, fontSize: 12, color: PdfColors.black)),
                pw.SizedBox(height: 12),
                pw.Table(
                  border: pw.TableBorder(horizontalInside: pw.BorderSide(color: PdfColors.grey200, width: 0.5)),
                  children: [
                    pw.TableRow(
                      decoration: const pw.BoxDecoration(color: PdfColors.grey100),
                      children: [
                        pw.Padding(padding: const pw.EdgeInsets.all(8), child: pw.Text("Item", style: pw.TextStyle(fontWeight: pw.FontWeight.bold, fontSize: 10))),
                        pw.Padding(padding: const pw.EdgeInsets.all(8), child: pw.Text("Qtd", style: pw.TextStyle(fontWeight: pw.FontWeight.bold, fontSize: 10))),
                        pw.Padding(padding: const pw.EdgeInsets.all(8), child: pw.Text("Preço Un.", style: pw.TextStyle(fontWeight: pw.FontWeight.bold, fontSize: 10))),
                        pw.Padding(padding: const pw.EdgeInsets.all(8), child: pw.Text("Total", style: pw.TextStyle(fontWeight: pw.FontWeight.bold, fontSize: 10))),
                      ],
                    ),
                    pw.TableRow(
                      children: [
                        pw.Padding(padding: const pw.EdgeInsets.all(8), child: pw.Text("Mesa Principal - Baile de Gala", style: const pw.TextStyle(fontSize: 10))),
                        pw.Padding(padding: const pw.EdgeInsets.all(8), child: pw.Text("1", style: const pw.TextStyle(fontSize: 10))),
                        pw.Padding(padding: const pw.EdgeInsets.all(8), child: pw.Text("R\$ 1.000,00", style: const pw.TextStyle(fontSize: 10))),
                        pw.Padding(padding: const pw.EdgeInsets.all(8), child: pw.Text("R\$ 1.000,00", style: const pw.TextStyle(fontSize: 10))),
                      ],
                    ),
                    pw.TableRow(
                      children: [
                        pw.Padding(padding: const pw.EdgeInsets.all(8), child: pw.Text("Convite Extra - Formando", style: const pw.TextStyle(fontSize: 10))),
                        pw.Padding(padding: const pw.EdgeInsets.all(8), child: pw.Text("1", style: const pw.TextStyle(fontSize: 10))),
                        pw.Padding(padding: const pw.EdgeInsets.all(8), child: pw.Text("R\$ 250,00", style: const pw.TextStyle(fontSize: 10))),
                        pw.Padding(padding: const pw.EdgeInsets.all(8), child: pw.Text("R\$ 250,00", style: const pw.TextStyle(fontSize: 10))),
                      ],
                    ),
                  ],
                ),
                pw.Spacer(),

                // Rodapé com hash de segurança
                pw.Divider(color: PdfColors.grey300, thickness: 1),
                pw.SizedBox(height: 8),
                pw.Row(
                  mainAxisAlignment: pw.MainAxisAlignment.spaceBetween,
                  children: [
                    pw.Text("Fábio Lucas Dev &bull; Ecossistema PineapplePay", style: const pw.TextStyle(fontSize: 9, color: PdfColors.grey600)),
                    pw.Text("ID Autenticação: #fbl-pp-8f3a2c1-2026", style: const pw.TextStyle(fontSize: 9, color: PdfColors.grey600)),
                  ],
                ),
              ],
            ),
          );
        },
      ),
    );

    return doc.save();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Comprovante PineapplePay"),
        leading: IconButton(
          icon: const Icon(Icons.arrow_back),
          onPressed: () => Navigator.of(context).pop(),
        ),
      ),
      body: PdfPreview(
        maxPageWidth: 700,
        pdfFileName: "Comprovante-PineapplePay.pdf",
        build: (format) => _generatePdf(format),
        canChangeOrientation: false,
        canChangePageFormat: false,
      ),
    );
  }
}
