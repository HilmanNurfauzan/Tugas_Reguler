<?php
include 'db/database.php';

$query = "SELECT * FROM users ORDER BY id ASC";
$result = mysqli_query($conn, $query);
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
        <h1 class="title">Read Data</h1>

        <?php if (mysqli_num_rows($result) > 0): ?>
            <?php while ($row = mysqli_fetch_assoc($result)): ?>
                <div class="data-row">
                    <div class="data-info">
                        <strong><?php echo htmlspecialchars($row['username']); ?></strong><br>
                        <span class="email-text"><?php echo htmlspecialchars($row['email']); ?></span>
                    </div>
                    <div class="data-actions">
                        <a href="update.php?id=<?php echo (int)$row['id']; ?>" class="btn btn-edit">Edit</a>
                        <a href="delete.php?id=<?php echo (int)$row['id']; ?>" class="btn btn-delete" onclick="return confirm('Are you sure?');">Delete</a>
                    </div>
                </div>
            <?php endwhile; ?>
        <?php else: ?>
            <p>No data found.</p>
        <?php endif; ?>

        <div class="nav-buttons">
            <a href="create.php" class="btn btn-nav">CREATE</a>
            <a href="read.php" class="btn btn-nav">READ</a>
        </div>
    </div>
</body>
</html>