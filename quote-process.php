
<?php
error_reporting(E_ALL);
ini_set('display_errors', 0);
header('Content-Type: application/json');

require_once('generate_pdf.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    try {
        $data = $_POST;
        
        if (empty($data)) {
            throw new Exception('No data received');
        }
        
        $result = generateAndSendPDF($data);
        
        if (!isset($result['success'])) {
            throw new Exception('Invalid PDF generation response');
        }
        
        echo json_encode([
            'status' => $result['success'] ? 'success' : 'error',
            'message' => $result['message'] ?? 'Unknown error',
            'pdf' => $result['pdf'] ?? null
        ]);
        
    } catch (Exception $e) {
        error_log("Quote Process Error: " . $e->getMessage());
        http_response_code(500);
        echo json_encode([
            'status' => 'error',
            'message' => 'An error occurred while processing your request: ' . $e->getMessage(),
            'trace' => $e->getTraceAsString()
        ]);
    }
    exit;
}
?>
