<?php
// Permite o React chamar essa API
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Content-Type: application/json");
    
// Pega o login e senha enviados pelo React
$body = json_decode(file_get_contents("php://input"), true);
$login = $body['login'];
$senha = md5($body['senha']); // criptografa a senha igual ao banco

// Conecta no banco
$conn = new mysqli('localhost', 'root', '', 'unisale');

// Busca o usuário
$sql = "SELECT nome FROM usuarios WHERE login='$login' AND senha='$senha'";
$result = $conn->query($sql);

// Retorna sucesso ou falha
if ($result->num_rows == 1) {
    $usuario = $result->fetch_assoc();
    echo json_encode(["success" => true, "nome" => $usuario['nome']]);
} else {
    echo json_encode(["success" => false]);
}
?>
