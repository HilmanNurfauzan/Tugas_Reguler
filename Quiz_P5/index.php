<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tabel 5x5</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <p>162023023 - Hilman Nurfauzan</p>
    <p> Quiz Week 5 - Membuat Tabel 5x5 dengan PHP</p>
    <table>
        <?php
        for ($row = 1; $row <= 5; $row++) {
            echo "<tr class=\"baris-{$row}\">\n";
            for ($kol = 1; $kol <= 5; $kol++) {
                echo "<td>{$row},{$kol}</td>\n";
            }
            echo "</tr>\n";
        }
        ?>
    </table>
</body>

</html>