<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();

$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
    case "GET":
        $sql = "SELECT * FROM contract";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        if(isset($path[3]) && is_numeric($path[3])) {
            $sql .= " WHERE id = :id";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $path[3]);
            $stmt->execute();
            $users = $stmt->fetch(PDO::FETCH_ASSOC);
        } else {
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }

        echo json_encode($users);
        break;
    case "POST":
        $user = json_decode( file_get_contents('php://input') );
        $sql = "INSERT INTO contract(contract_id, contract_name, Signing_date, exprtion_date, total_cost,amount,items,Legal_officer_name,employee_id,warranty_start_date,warranty__end_date,company_name,address,company_phone,liaison_officer_name) 
        VALUES(null, :contract_name, :Signing_date, :exprtion_date, :total_cost,:amount,:items,:Legal_officer_name,:employee_id,:warranty_start_date,:warranty__end_date,:company_name,:address,:company_phone,:liaison_officer_name)";
        $stmt = $conn->prepare($sql);
       
        $stmt->bindParam(':contract_name', $user->contract_name);
        $stmt->bindParam(':Signing_date', $user->Signing_date);
        $stmt->bindParam(':exprtion_date', $user->exprtion_date);
        $stmt->bindParam(':total_cost', $user->total_cost);
        $stmt->bindParam(':amount', $user->amount);
        $stmt->bindParam(':items', $user->items);
        $stmt->bindParam(':Legal_officer_name', $user->Legal_officer_name);
        $stmt->bindParam(':employee_id', $user->employee_id);
        $stmt->bindParam(':warranty_start_date', $user->warranty_start_date);
        $stmt->bindParam(':warranty__end_date', $user->warranty__end_date);
        $stmt->bindParam(':company_name', $user->company_name);
        $stmt->bindParam(':address', $user->address);
        $stmt->bindParam(':company_phone', $user->company_phone);
        $stmt->bindParam(':liaison_officer_name', $user->liaison_officer_name);

        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record created successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to create record.'];
        }
        echo json_encode($response);
        break;

    // case "PUT":
    //     $user = json_decode( file_get_contents('php://input') );
    //     $sql = "UPDATE users SET name= :name, email =:email, mobile =:mobile, updated_at =:updated_at WHERE id = :id";
    //     $stmt = $conn->prepare($sql);
    //     $updated_at = date('Y-m-d');
    //     $stmt->bindParam(':id', $user->id);
    //     $stmt->bindParam(':name', $user->name);
    //     $stmt->bindParam(':email', $user->email);
    //     $stmt->bindParam(':mobile', $user->mobile);
    //     $stmt->bindParam(':updated_at', $updated_at);

    //     if($stmt->execute()) {
    //         $response = ['status' => 1, 'message' => 'Record updated successfully.'];
    //     } else {
    //         $response = ['status' => 0, 'message' => 'Failed to update record.'];
    //     }
    //     echo json_encode($response);
    //     break;

    // case "DELETE":
    //     $sql = "DELETE FROM users WHERE id = :id";
    //     $path = explode('/', $_SERVER['REQUEST_URI']);

    //     $stmt = $conn->prepare($sql);
    //     $stmt->bindParam(':id', $path[3]);

    //     if($stmt->execute()) {
    //         $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
    //     } else {
    //         $response = ['status' => 0, 'message' => 'Failed to delete record.'];
    //     }
    //     echo json_encode($response);
    //     break;
}