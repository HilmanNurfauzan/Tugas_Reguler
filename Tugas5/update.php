<?php
include 'db/database.php';

$message = "";
$messageType = "";

if (!isset($_GET['id']) || !is_numeric($_GET['id'])) {
    header("Location: read.php");
    exit();
}

$id = (int)$_GET['id'];

// Fetch existing data
$stmt = mysqli_prepare($conn, "SELECT * FROM users WHERE id = ?");
mysqli_stmt_bind_param($stmt, "i", $id);
mysqli_stmt_execute($stmt);
$result = mysqli_stmt_get_result($stmt);
$user = mysqli_fetch_assoc($result);
mysqli_stmt_close($stmt);

if (!$user) {
    header("Location: read.php");
    exit();
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = trim($_POST["username"] ?? "");
    $email = trim($_POST["email"] ?? "");

    if (empty($username) || empty($email)) {
        $message = "Username and email cannot be empty.";
        $messageType = "error";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $message = "Invalid email address.";
        $messageType = "error";
    } else {
        // Check if username or email already exists (excluding current user)
        $stmtCheck = mysqli_prepare($conn, "SELECT id FROM users WHERE (username = ? OR email = ?) AND id != ?");
        mysqli_stmt_bind_param($stmtCheck, "ssi", $username, $email, $id);
        mysqli_stmt_execute($stmtCheck);
        $resultCheck = mysqli_stmt_get_result($stmtCheck);

        if (mysqli_num_rows($resultCheck) > 0) {
            $message = "This username or email is already registered. Please try another.";
            $messageType = "error";
        } else {
            $stmtUpdate = mysqli_prepare($conn, "UPDATE users SET username = ?, email = ? WHERE id = ?");
            mysqli_stmt_bind_param($stmtUpdate, "ssi", $username, $email, $id);

            if (mysqli_stmt_execute($stmtUpdate)) {
                $message = "User has been successfully updated.";
                $messageType = "success";
                // Refresh user data
                $user['username'] = $username;
                $user['email'] = $email;
            } else {
                $message = "Error: Could not update data.";
                $messageType = "error";
            }
            mysqli_stmt_close($stmtUpdate);
        }
        mysqli_stmt_close($stmtCheck);
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP CRUD application</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div class="container">
        <h1 class="title">Update User</h1>

        <form method="POST" action="update.php?id=<?php echo $id; ?>">
            <div class="form-group">
                <label for="username">Name:</label>
                <input type="text" id="username" name="username" value="<?php echo htmlspecialchars($user['username']); ?>" required>
            </div>

            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" value="<?php echo htmlspecialchars($user['email']); ?>" required>
            </div>

            <?php if (!empty($message)): ?>
                <div class="message <?php echo $messageType; ?>">
                    <?php echo htmlspecialchars($message); ?>
                </div>
            <?php endif; ?>

            <button type="submit" class="btn btn-insert">Update</button>
        </form>

        <div class="nav-buttons">
            <a href="create.php" class="btn btn-nav">CREATE</a>
            <a href="read.php" class="btn btn-nav">READ</a>
        </div>
    </div>
</body>
</html>