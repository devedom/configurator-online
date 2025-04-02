<?php
require_once 'vendor/autoload.php';
use Dompdf\Dompdf;
use Dompdf\Options;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

function generateAndSendPDF($data) {
		try {
				if (empty($data)) {
						return array('success' => false, 'message' => 'Invalid data provided');
				}

				// Configure Dompdf
				$options = new Options();
				$options->set('defaultFont', 'DejaVu Sans');
				$options->set('isHtml5ParserEnabled', true);
				$options->set('isPhpEnabled', true);
				$options->set('isRemoteEnabled', true);
				$options->set('isFontSubsettingEnabled', true);
				$options->set('defaultEncoding', 'UTF-8');
				$options->set('isHtml5ParserEnabled', true);
				$options->set('isPhpEnabled', true);
				$options->set('isRemoteEnabled', true);
				$options->set('defaultEncoding', 'UTF-8');
				$options->set('fontCache', __DIR__ . '/vendor/dompdf/dompdf/lib/fonts/');
				$options->set('fontDir', __DIR__ . '/vendor/dompdf/dompdf/lib/fonts/');
				$options->set('chroot', __DIR__);
				$options->set('tempDir', __DIR__ . '/temp');
				$options->set('isFontSubsettingEnabled', true);

				$dompdf = new Dompdf($options);
				$dompdf->setPaper('A4', 'portrait');
				$dompdf->set_option('margin_top', 10);
				$dompdf->set_option('margin_bottom', 10);
				$dompdf->set_option('margin_left', 15);
				$dompdf->set_option('margin_right', 15);


			// Convert currency values
			$panel_cost = (float)str_replace(['€', ' ', '.'], ['', '', ''], str_replace(',', '.', $data['panel_cost']))/100;
			$quantity = (float)$data['quantity'];
			$discount_percentage = (float)$data['discount_percentage'];
			$discount_amount = ($panel_cost * $quantity) * ($discount_percentage / 100);
			$base_total = number_format((float)$data['base_total'], 2, ',', '.') . ' €';
			$vat_amount = number_format((float)$data['vat_amount'], 2, ',', '.') . ' €';
			$final_total = number_format((float)$data['final_total'], 2, ',', '.') . ' €';
			$formatted_discount = number_format($discount_amount, 2, ',', '.') . ' €';

				$today = date('d/m/Y');
				// Validate data before processing
				if (!is_array($data) || empty($data)) {
						throw new Exception("Invalid or empty data received");
				}

				// Ensure all required fields are present
				$required_fields = ['panel_line', 'panel_model', 'dimensions', 'quantity'];
				foreach ($required_fields as $field) {
						if (!isset($data[$field]) || empty($data[$field])) {
								throw new Exception("Missing required field: " . $field);
						}
				}

				// Format numbers with proper decimal places
				//$base_total = number_format((float)$data['base_total'], 2, ',', '.');
				//$vat_amount = number_format((float)$data['vat_amount'], 2, ',', '.');
				//$final_total = number_format((float)$data['final_total'], 2, ',', '.');
				//$discount_amount = isset($data['discount_amount']) ? number_format((float)$data['discount_amount'], 2, ',', '.') : '0,00';

				$html = '
				<html>
	<head>
		<meta charset="UTF-8"/>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
		<style>
			 *{ font-family: DejaVu Sans !important; margin: 5px; line-height: 1.2; font-size: 11px;}
			.logo { text-align: center; margin-bottom: 15px; }
			.logo img { width: 250px; height: auto; }
			.offer-date { text-align: center; border: 1px solid #ccc; padding: 15px; margin-bottom: 20px; border-radius: 5px; font-weight: bold; font-size: 12px;}
			.section { border: 1px solid #ccc; padding: 10px; margin-bottom: 15px; border-radius: 5px; }
			table { table-layout: fixed; }
			.section-title { font-size: 18px; font-weight: bold; margin-bottom: 15px; padding-bottom: 5px; border-bottom: 2px solid #333; }
			.info-block { margin: 10px 0; }
			.info-block p { margin: 5px 0; }

			table { width: 100%; border-collapse: collapse; margin: 5px 0; font-size: 10px; }
			th, td { border: 1px solid #333; padding: 3px; text-align: left; }
			th { background-color: #f0f0f0; width: 55%; }
			.column { box-sizing: border-box; }
			.section { margin-bottom: 10px; }
			.section-title { font-size: 12px; }
			.info-block p { margin: 3px 0; }

			.final-costs { margin-top: 20px; }
			.final-costs th { font-weight: bold; }
			.final-total { font-weight: bold; background-color: #e0e0e0; }
		</style>
	</head>
	<body>
		<div class="logo">
			<img src="images/logo_beta.png" alt="Logo">
		</div>

		<div class="offer-date">Προσφορά Πάνελ Αλουμινίου Verpan: ' . $today . '</div>

		<table style="width: 100%; border-collapse: collapse; margin: 0 auto;">
			<tr>
				<td style="width: 48%; vertical-align: top; padding: 10px; border-color: white;">
					<div class="section">
						<div class="section-title">Στοιχεία Πελάτη</div>
						<div class="info-block">
						<p><strong>Όνοματεπώνυμο:</strong> ' . htmlspecialchars($data['fname'] . ' ' . $data['lname'], ENT_QUOTES, 'UTF-8') . '</p>
						<p><strong>Διεύθυνση:</strong> ' . htmlspecialchars($data['address'], ENT_QUOTES, 'UTF-8') . '</p>
						<p><strong>Email:</strong> ' . htmlspecialchars($data['email'], ENT_QUOTES, 'UTF-8') . '</p>
						<p><strong>Τηλέφωνο:</strong> ' . htmlspecialchars($data['phone'], ENT_QUOTES, 'UTF-8') . '</p>
					</div>
				</div>

				<div class="section">
					<div class="section-title">Διαμόρφωση Πάνελ</div>
					<table>
						' . (!empty($data['panel_line']) ? '<tr><th>Επιλεγμένη σειρά</th><td>' . htmlspecialchars($data['panel_line']) . '</td></tr>' : '') . '
						' . (!empty($data['panel_model']) ? '<tr><th>Επιλεγμένο μοντέλο πάνελ</th><td>' . htmlspecialchars($data['panel_model']) . '</td></tr>' : '') . '
						' . (!empty($data['dimensions']) ? '<tr><th>Διαστάσεις πάνελ</th><td>' . htmlspecialchars($data['dimensions']) . '</td></tr>' : '') . '
						' . (!empty($data['panel_color']) ? '<tr><th>Εξωτερικό χρώμα πάνελ</th><td>' . htmlspecialchars($data['panel_color']) . '</td></tr>' : '') . '
						' . (!empty($data['subColor']) ? '<tr><th>Εξωτερικό δευτερεύον</th><td>' . htmlspecialchars($data['subColor']) . '</td></tr>' : '') . '
						' . (!empty($data['subNoColor']) ? '<tr><th>Εξωτερικό δευτερεύον</th><td>' . htmlspecialchars($data['subNoColor']) . '</td></tr>' : '') . '
						' . (!empty($data['panel_color_in']) ? '<tr><th>Εσωτερικό χρώμα πάνελ</th><td>' . htmlspecialchars($data['panel_color_in']) . '</td></tr>' : '') . '
						' . (!empty($data['subColorIn']) ? '<tr><th>Εσωτερικό δευτερεύον</th><td>' . htmlspecialchars($data['subColorIn']) . '</td></tr>' : '') . '
						' . (!empty($data['subNoColorIn']) ? '<tr><th>Εσωτερικό δευτερεύον</th><td>' . htmlspecialchars($data['subNoColorIn']) . '</td></tr>' : '') . '
						' . (!empty($data['panelWidth']) ? '<tr><th>Πάχος πάνελ</th><td>' . htmlspecialchars($data['panelWidth']) . '</td></tr>' : '') . '
						' . (!empty($data['glassTypeText']) ? '<tr><th>Τύπος γυαλιού</th><td>' . htmlspecialchars($data['glassTypeText']) . '</td></tr>' : '') . '
						' . (!empty($data['glass_simple']) ? '<tr><th>Γυαλί</th><td>' . htmlspecialchars($data['glass_simple']) . '</td></tr>' : '') . '
						' . (!empty($data['glass_triplex']) ? '<tr><th>Triplex</th><td>' . htmlspecialchars($data['glass_triplex']) . '</td></tr>' : '') . '
						' . (!empty($data['glass_motiv']) ? '<tr><th>Μοτίβο γυαλιού</th><td>' . htmlspecialchars($data['glass_motiv']) . '</td></tr>' : '') . '
						' . ($data['panel_cut'] === 'YES' ? '<tr><th>Κοπή πάνελ</th><td>ΝΑΙ</td></tr>' : '') . '
						' . (!empty($data['panelCutDim']) ? '<tr><th>Διαστάσεις Κοπής</th><td>' . htmlspecialchars($data['panelCutDim']) . '</td></tr>' : '') . '
						' . ($data['inox_316'] === 'YES' ? '<tr><th>Inox 316</th><td>ΝΑΙ</td></tr>' : '') . '
					</table>
				</div>
			</td>
				<td style="width: 48%; vertical-align: top; padding: 10px; border-color: white;">
				<div class="section">
					<div class="section-title">Λεπτομέρειες Προσφοράς</div>
					<table>
						<tr><th>Ποσότητα</th><td>' . htmlspecialchars($data['quantity']) . '</td></tr>
						<tr><th>Κόστος πάνελ</th><td>' . number_format((float)str_replace(['€', ' '], ['', ''], $data['panel_cost']), 2, ',', '.') . ' €</td></tr>
						' . ($discount_amount > 0 ? '<tr><th>Έκπτωση κόστους πάνελ (' . $data['discount_percentage'] . '%)</th><td>-' . $formatted_discount . '</td></tr>' : '') . '
						' . ((float)str_replace(['€', ' '], ['', ''], $data['panel_color_out_cost']) > 0 ? '<tr><th>Κόστος εξωτερικού χρώματος</th><td>' . number_format((float)str_replace(['€', ' '], ['', ''], $data['panel_color_out_cost']), 2, ',', '.') . ' €</td></tr>' : '') . '
						' . ((float)str_replace(['€', ' '], ['', ''], $data['panel_color_in_cost']) > 0 ? '<tr><th>Κόστος εσωτερικού χρώματος</th><td>' . number_format((float)str_replace(['€', ' '], ['', ''], $data['panel_color_in_cost']), 2, ',', '.') . ' €</td></tr>' : '') . '
						' . ((float)str_replace(['€', ' '], ['', ''], $data['panel_width_cost']) > 0 ? '<tr><th>Κόστος πάχους</th><td>' . number_format((float)str_replace(['€', ' '], ['', ''], $data['panel_width_cost']), 2, ',', '.') . ' €</td></tr>' : '') . '
						' . ((float)str_replace(['€', ' '], ['', ''], $data['panel_glass_cost']) > 0 ? '<tr><th>Κόστος γυαλιού</th><td>' . number_format((float)str_replace(['€', ' '], ['', ''], $data['panel_glass_cost']), 2, ',', '.') . ' €</td></tr>' : '') . '
						' . ((float)str_replace(['€', ' '], ['', ''], $data['panel_triplex_cost']) > 0 ? '<tr><th>Κόστος triplex</th><td>' . number_format((float)str_replace(['€', ' '], ['', ''], $data['panel_triplex_cost']), 2, ',', '.') . ' €</td></tr>' : '') . '
						' . ((float)str_replace(['€', ' '], ['', ''], $data['panel_cut_cost']) > 0 ? '<tr><th>Κόστος κοπής</th><td>' . number_format((float)str_replace(['€', ' '], ['', ''], $data['panel_cut_cost']), 2, ',', '.') . ' €</td></tr>' : '') . '
						' . ((float)str_replace(['€', ' '], ['', ''], $data['panel_inox_cost']) > 0 ? '<tr><th>Κόστος inox</th><td>' . number_format((float)str_replace(['€', ' '], ['', ''], $data['panel_inox_cost']), 2, ',', '.') . ' €</td></tr>' : '') . '
					</table>
				</div>

				<div class="section final-costs">
					<div class="section-title">Λεπτομέρειες τελικού κόστους</div>
					<table>
						<tr>
							<th>Κόστος χωρίς ΦΠΑ</th>
							<td>' . number_format(round((float)str_replace(['€', ' ', '.'], ['', '', ''], str_replace(',', '.', $data['base_total']))/100, 2), 2, ',', '.') . ' €</td>
						</tr>
						<tr>
							<th>ΦΠΑ (' . ((float)$data['vat_percentage']) . '%)</th>
							<td>' . number_format(round(((float)str_replace(['€', ' ', '.'], ['', '', ''], str_replace(',', '.', $data['base_total']))/100) * ((float)$data['vat_percentage']/100), 2), 2, ',', '.') . ' €</td>
						</tr>
						<tr class="final-total">
							<th>Τελικό κόστος</th>
							<td>' . number_format(round(((float)str_replace(['€', ' ', '.'], ['', '', ''], str_replace(',', '.', $data['base_total']))/100) * (1 + (float)$data['vat_percentage']/100), 2), 2, ',', '.') . ' €</td>
						</tr>
					</table>
				</div>

				 <div class="section">
					<div class="section-title">Επιπρόσθετες πληροφορίες</div>
					<p>' . (empty($data['additionalinfo']) ? '--' : nl2br(htmlspecialchars($data['additionalinfo']))) . '</p>
				</div>
			</td>
			</tr>
		</table>
	</body>
</html>';

				$dompdf->loadHtml($html);
				$dompdf->render();
				$pdfContent = $dompdf->output();

				// Send email
				$mail = new PHPMailer(true);
				$mail->CharSet = 'UTF-8';
				$mail->Encoding = 'base64';
				$mail->isSMTP();
				$mail->Host = 'mail.configurators.online';
				$mail->SMTPAuth = true;
				$mail->Username = 'info@configurators.online';
				$mail->Password = 'Edom1983!';
				$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
				$mail->Port = 465;

				$mail->setFrom('info@configurators.online', 'Verpan ALU');
				// Add customer email
				$mail->addAddress($data['email']);
				// Add additional recipients
				$mail->addAddress('tmiskas@gmail.com');
				$mail->addAddress('iriniverpan@gmail.com');
				
				$mail->addStringAttachment($pdfContent, 'verpan_offer.pdf');

				$mail->isHTML(true);
				$mail->Subject = 'Προσφορά πάνελ - Verpan ALU';
				$mail->Body = 'Βρείτε επισυναπτόμενη την προσφορά του πάνελ σας.';

				$mail->send();

				return array(
						'success' => true,
						'message' => 'PDF generated and sent successfully',
						'pdf' => base64_encode($pdfContent)
				);

		} catch (Exception $e) {
				error_log("PDF Generation Error: " . $e->getMessage());
				error_log("Data received: " . print_r($data, true));
				header('Content-Type: application/json');
				echo json_encode(array(
						'success' => false,
						'status' => 'error',
						'message' => $e->getMessage()
				));
				exit;
		}

		header('Content-Type: application/json');
		$response = array(
				'success' => true,
				'status' => 'success',
				'message' => 'PDF generated successfully',
				'pdf' => base64_encode($pdfContent)
		);
		echo json_encode($response);
		exit;
}