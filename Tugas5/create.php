<?php
include 'db/database.php';

$message = "";
$messageType = "";

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
        $stmt = mysqli_prepare($conn, "SELECT id FROM users WHERE username = ? OR email = ?");
        mysqli_stmt_bind_param($stmt, "ss", $username, $email);
        mysqli_stmt_execute($stmt);
        $result = mysqli_stmt_get_result($stmt);

        if (mysqli_num_rows($result) > 0) {
            $stmtEmail = mysqli_prepare($conn, "SELECT id FROM users WHERE email = ?");
            mysqli_stmt_bind_param($stmtEmail, "s", $email);
            mysqli_stmt_execute($stmtEmail);
            $resultEmail = mysqli_stmt_get_result($stmtEmail);

            $stmtUser = mysqli_prepare($conn, "SELECT id FROM users WHERE username = ?");
            mysqli_stmt_bind_param($stmtUser, "s", $username);
            mysqli_stmt_execute($stmtUser);
            $resultUser = mysqli_stmt_get_result($stmtUser);

            if (mysqli_num_rows($resultEmail) > 0 && mysqli_num_rows($resultUser) > 0) {
                $message = "This username and email are already registered. Please try another.";
            } elseif (mysqli_num_rows($resultEmail) > 0) {
                $message = "This email is already registered. Please try another.";
            } else {
                $message = "This username is already registered. Please try another.";
            }
            $messageType = "error";

            mysqli_stmt_close($stmtEmail);
            mysqli_stmt_close($stmtUser);
        } else {
            $stmtInsert = mysqli_prepare($conn, "INSERT INTO users (username, email) VALUES (?, ?)");
            mysqli_stmt_bind_param($stmtInsert, "ss", $username, $email);

            if (mysqli_stmt_execute($stmtInsert)) {
                $message = "User has been successfully inserted.";
                $messageType = "success";
            } else {
                $message = "Error: Could not insert data.";
                $messageType = "error";
            }
            mysqli_stmt_close($stmtInsert);
        }
        mysqli_stmt_close($stmt);
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
        <h1 class="title">Create Data</h1>

        <form method="POST" action="create.php">
            <div class="form-group">
                <label for="username">Name:</label>
                <input type="text" id="username" name="username" placeholder="Your name" required>
            </div>

            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Your email" required>
            </div>

            <?php if (!empty($message)): ?>
                <div class="message <?php echo $messageType; ?>">
                    <?php echo htmlspecialchars($message); ?>
                </div>
            <?php endif; ?>

            <button type="submit" class="btn btn-insert">Insert</button>
        </form>

        <div class="nav-buttons">
            <a href="create.php" class="btn btn-nav">CREATE</a>
            <a href="read.php" class="btn btn-nav">READ</a>
        </div>
    </div>
</body>
</html>