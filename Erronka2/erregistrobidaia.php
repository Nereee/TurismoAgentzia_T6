<?php
    include 'server/konexioa.php';

    $queryKod_Mota = mysqli_query($conn, "SELECT Kod, Mota FROM bidaia_mota");

    $queryID_Herrialdeak = mysqli_query($conn, "SELECT ID, Izena FROM herrialdea");

    $queryAerolinea= mysqli_query($conn, "SELECT Kod, Izena FROM aerolinea");
?>

<!DOCTYPE html>
<html lang="eu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
    <meta name="keywords" content="DAM, ElorrietaErrekamari, ML, HTML5">
    <meta name="author" content="AGM">
    <!-- Kanpoko CSS fitxategi bat lotzen da, Style1.css, diseinu bisualerako. -->
    <link rel="stylesheet" href="css/style1.css">
    <link rel="icon" type="image/x-icon" href="img/logoa.ico">
    <script src="js/js1.js"></script>
    <title>Bidaia Erregistratu</title>
</head>
<body>
    <header>
        <abbr title="Orri Nagusia"><a href="orrinagusia.html"><img id="logoa" src="img/logoa.png" alt="Talde Logoa"></a></abbr>            
        <input type="button" id="btnAtzera" onclick="location.href='orrinagusia.html'" value="↩">
        <div id="agentziaBistaratu"></div>
    </header>
    <main>
        <form id="bidaiaForm" name="bidaiaForm" method="post">
            <fieldset>
                <legend>Bidaia Erregistratu</legend>
                <br>

                <!-- Izena -->
                <div class="blokea">
                    <label for="Izena">Izena:</label>
                    <input type="text" id="Izena" name="Izena" placeholder="Sartu zure izena" required>
                </div>

                <!-- Bidaia Mota -->
                <div class="blokea">
                    <label for="Kod_Mota">Bidaia Mota:</label>
                    <select name="Kod_Mota" id="Kod_Mota" required>
                        <option value="">--Aukeratu--</option>
                        <?php
                        while ($bidaia_mota = mysqli_fetch_array($queryKod_Mota)) {
                            echo "<option value='" . $bidaia_mota['Kod'] . "'>" . $bidaia_mota['Mota'] . "</option>";
                        }
                        ?>
                    </select>       
                </div>

                <!-- Hasiera Data -->
                <div>
                    <label for="Data_Hasiera">Hasiera Data:</label>
                    <input type="date" id="Data_Hasiera" name="Data_Hasiera" required>
                </div>

                <!-- Amaiera Data -->
                <div>
                    <label for="Data_Amaiera">Amaiera Data:</label>
                    <input type="date" id="Data_Amaiera" name="Data_Amaiera" required>
                </div>

                <!-- Egunak -->
                <div>
                    <label for="bidaiaegunak">Egunak:</label>
                    <input type="text" id="bidaiaegunak" name="bidaiaegunak" placeholder="Egunak hemen ageriko dira datak aukeratu eta gero" readonly>
                </div>

                <!-- Herrialdea -->
                <div class="blokea">
                    <label for="ID_Herrialdeak">Herrialdea:</label>
                    <select name="ID_Herrialdeak" id="ID_Herrialdeak" required>
                        <option value="">--Aukeratu--</option>
                        <?php
                        while ($herrialdea = mysqli_fetch_array($queryID_Herrialdeak)) {
                            echo "<option value='" . $herrialdea['ID'] . "'>" . $herrialdea['Izena'] . "</option>";
                        }
                        ?>
                    </select>
                </div>

                <!-- Deskribapena -->
                <div>
                    <label for="Deskribapena">Deskribapena:</label>
                    <textarea id="Deskribapena" name="Deskribapena" rows="4" cols="50" placeholder="Sartu zure bidaiaren deskribapena"></textarea>
                </div>

                <!-- Kanpo Zerbitzu -->
                <div>
                    <label for="Aerolinea">Aerolinea:</label>
                    <select name="Aerolinea" id="Aerolinea" required>
                        <option value="">--Aukeratu--</option>
                        <?php
                        while ($aerolinea = mysqli_fetch_array($queryAerolinea)) {
                            echo "<option value='" . $aerolinea['Kod'] . "'>" . $aerolinea['Izena'] . "</option>";
                        }
                        ?>
                    </select>                     
                <!-- Gorde botoia -->
                <div class="blokea">
                    <input type="submit" id="btnGorde" name="btnGorde" value="Gorde Bidaia">
                </div>
            </fieldset>
        </form>
        <div id="taula-container-bidaia" style="display: none;"> 
            <table id="laburpen-taula-bidaia">
                <thead>
                    <tr>
                        <th colspan="8">Bidaia Erregistratuen Laburpena</th>
                    </tr>
                    <tr>
                        <th>Izena</th>
                        <th>Bidaia Mota</th>
                        <th>Hasiera Data</th>
                        <th>Amaiera Data</th>
                        <th>Egunak</th>
                        <th>Herrialdea</th>
                        <th>Deskribapena</th>
                        <th>Aerolinea</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
    </main>
    <footer>
        <br>
        <p>Bidaia Erregistratu | Mugagabe</p>
        <br>
        <div class="sare-sozialak">
            <abbr title="Instagram"><a href="https://www.instagram.com/?hl=es" target="_blank"><img src="img/insta.png" alt="Insta logoa" height="35"></a></abbr> 
            <abbr title="Twitter"><a href="https://twitter.com/?lang=es" target="_blank"><img src="img/twitter.png" alt="X logoa" height="35"></a></abbr> 
            <abbr title="Facebook"><a href="https://www.facebook.com/?locale=es_ES" target="_blank"><img class="logo_f" src="img/facebook.png" alt="Facebook logoa" height="35"></a></abbr>   
        </div>
    </footer>
</body>
</html>

<?php
    // Cerrar la conexión a la base de datos
    mysqli_close($conn);
?>