<?php
    include 'server/konexioa.php';

    $queryKod_Mota = mysqli_query($conn, "SELECT Kod, Mota FROM bidaia_mota");

    $queryJatorrizkoAireportua = mysqli_query($conn, "SELECT Aireportu, Hiria FROM aireportuak");
  
    $queryHelmugakoAireportua = mysqli_query($conn, "SELECT Aireportu, Hiria FROM aireportuak");

    $queryAerolinea= mysqli_query($conn, "SELECT Kod, Izena FROM aerolinea");

    $queryBueltakoAerolinea= mysqli_query($conn, "SELECT Kod, Izena FROM aerolinea");

    $queryLogelaMota= mysqli_query($conn, "SELECT Kod, Mota FROM logela_mota");

?>


<!-- HTML5 Dokumentu mota bezala definitzen du. -->
<!DOCTYPE html>
<!--Orriko hizkuntza nagusia euskaratzat jotzen du (eu). -->
<html lang="eu">
    <head>
        <!-- Karaktereen kodetze mota UTF-8 gisa definitzen du. -->
        <meta charset="UTF-8">
        <!-- Edukia gailuaren pantailara egokitzeko aukera ematen du. -->
        <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
        <!-- Gako-hitzak zehazten duen metaetiketa. -->
        <meta name="keywords" content="DAM, ElorrietaErrekamari, ML, HTML5">
        <!-- Orriaren egilea zehazten duen metaetiketa. -->
        <meta name="author" content="AGM">
        <!-- Kanpoko bi CSS fitxategi lotzen dira, Style1.css eta Style2.css, diseinu bisualerako. -->
        <link rel="stylesheet" href="css/style1.css">
        <link rel="stylesheet" href="css/style2.css">
        <!-- Nabigatzailearen fitxan agertzen den ikonoa -->
        <link rel="icon" type="image/x-icon" href="img/logoa.ico">
        <!-- Honela definitzen du orrialdearen izenburua: "Zerbitzua Erregistratu" -->
        <title>Zerbitzua Erregistratu</title>
    </head>
    <body>
        <!-- Orrialdearen goiburua definitzen du. -->
        <header>
            <!-- Talde logotipoa -->
            <abbr title="Orri Nagusia"><a href="orrinagusia.html"><img id="logoa" src="img/logoa.png" alt="Talde Logoa"></a></abbr>            <!-- Saioa amaitzeko botoia -->
            <button type="button" id="btnAtzera" onclick="location.href='orrinagusia.html'">↩</button>
        </header>
        <!-- Zerbitzua erregistratzeko formularioa -->
        <main>
            <form id="zerbitzuForm" name="zerbitzuForm" method="post">
                <fieldset>
                    <!-- Formularioaren izenburua definitzen du -->
                    <legend>Zerbitzua Erregistratu</legend>
                    <br>
                    <!-- Bidaia mota sartzeko blokea -->
                    <div class="blokea">
                        <label for="Kod_Mota">Bidaia Mota:</label>
                        <select name="Kod_Mota" id="Kod_Mota">
                            <option value="--Aukeratu--">--Aukeratu--</option>
                            <?php
                            while ($bidaia_mota = mysqli_fetch_array($queryKod_Mota)) {
                                echo "<option value='" . $bidaia_mota['Kod'] . "'>" . $bidaia_mota['Mota'] . "</option>";
                            }
                            ?>
                        </select>
                    </div>
                    <!-- Zerbitzua sartzeko blokea -->
                    <div class="blokea" id="zerbitzuamota">
                        <label>Zein zerbitzu mota erregistratu nahi duzu?</label>
                        <br>
                        <input type="radio" id="btnHegaldia" name="ID_Bidaiak" value="hegaldia">
                        <label for="btnHegaldia">Hegaldia</label>
                        <input type="radio" id="btnOstatua" name="ID_Bidaiak" value="ostatua">
                        <label for="btnOstatua">Ostatua</label>
                        <input type="radio" id="btnBestebatzuk" name="ID_Bidaiak" value="bestebatzuk">
                        <label for="btnBestebatzuk">Beste Batzuk</label>
                    </div> 
                    <!-- Zerbitzua "Hegaldia" izanez gero, bloke hau ageriko da -->
                    <div class="blokea" id="hegaldiaBlokea" style="display: none;">        
                        <label>Zein hegaldi mota da?</label>
                        <br>
                        <input type="radio" name="hegaldiMota" id="btnJoan" value="joan">
                        <label for="btnJoan">Joan</label>
                        <input type="radio" name="hegaldiMota" id="btnJoanetorri" value="joanetorri">
                        <label for="btnJoanetorri">Joan/Etorri</label>
                        <br>
                        <br>
                        <!-- Hegaldia "Joan" izanez gero, bloke hau ageriko da -->
                        <div class="blokea" id="joanBlokea" style="display: none;">
                            <!-- Jatorrizko aireportua hautatzeko blokea -->
                            <label for="Jatorrizko">Jatorrizko Aireportua:</label>
                            <select name="Jatorrizko" id="Jatorrizko">
                                <option value="--Aukeratu--">--Aukeratu--</option>
                                <?php
                                while ($aireportuak = mysqli_fetch_array($queryJatorrizkoAireportua)) {
                                    echo "<option value='" . $aireportuak['Aireportu'] . "'>" . $aireportuak['Hiria'] . "</option>";
                                }
                                ?>
                            </select>
                            <!-- Helmugako aireportua hautatzeko blokea -->
                            <div class="blokea">
                                <label for="Helmuga">Helmugako Aireportua:</label>
                                <select name="Helmuga" id="Helmuga">
                                    <option value="--Aukeratu--">--Aukeratu--</option>
                                    <?php
                                    while ($aireportuak = mysqli_fetch_array($queryHelmugakoAireportua)) {
                                        echo "<option value='" . $aireportuak['Aireportu'] . "'>" . $aireportuak['Hiria'] . "</option>";
                                    }
                                    ?>    
                                </select>
                            </div>
                            <!-- Hegaldi kodea adierazteko blookea -->
                            <div class="blokea">
                                <label for="Hegaldi_Kod">Hegaldi Kodea:</label>
                                <input type="text" name="Hegaldi_Kod" id="Hegaldi_Kod" placeholder="Sartu hegaldiaren kodea">
                            </div>
                            <!-- Airelinea hautatzeko blokea -->
                            <div class="blokea">
                                <label for="Aerolinea">Aerolinea:</label>
                                <select name="Aerolinea" id="Aerolinea" >
                                    <option value="--Aukeratu--">--Aukeratu--</option>
                                    <?php
                                    while ($aerolinea = mysqli_fetch_array($queryAerolinea)) {
                                        echo "<option value='" . $aerolinea['Kod'] . "'>" . $aerolinea['Izena'] . "</option>";
                                    }
                                    ?>   
                                </select>
                            </div>
                            <!-- Hegaldiaren prezioa adierazteko blokea -->
                            <div class="blokea">
                                <label for="Prezioa">Prezioa (€):</label>
                                <input type="number" name="Prezioa" id="Prezioa" placeholder="Sartu hegaldiaren prezioa">
                            </div>
                            <!-- Hegaldiaren irteera data adierazteko blokea -->
                            <div class="blokea">
                                <label for="Irteera_Data">Irteera Data:</label>
                                <input type="date" name="Irteera_Data" id="Irteera_Data">
                            </div>
                            <!-- Hegaldiaren irteera ordua adierazteko blokea -->
                            <div class="blokea">
                                <label for="Irteera_Ordua">Irteera Ordua:</label>
                                <input type="time" name="Irteera_Ordua" id="Irteera_Ordua">
                            </div>
                            <!-- Hegaldiaren iraupena -->
                            <div class="blokea">
                                <label for="Iraupena">Bidaiaren Iraupena (Orduetan):</label>
                                <input type="text" name="Iraupena" id="Iraupena" placeholder="Sartu hegaldiaren iraupena">
                            </div>
                            <!-- Hegaldia "Joan/Etorri" izanez gero, bloke hau ageriko da -->
                            <div class="blokea" id="joanetorriBlokea" style="display: none;">
                                <!-- Hegaldiaren itzulera data adierazteko blokea -->
                                <label for="itzuleraData">Iztulera Data:</label>
                                <input type="date" name="itzuleraData" id="itzuleraData">
                                <!-- Hegaldiaren itzulera ordua adierazteko blokea -->
                                <div class="blokea">
                                    <label for="itzuleraOrdua">Irteera Ordua:</label>
                                    <input type="time" name="itzuleraOrdua" id="itzuleraOrdua">
                                </div>
                                <!-- Hegaldiaren itzulera iraupena adierazteko blokea -->
                                <div class="blokea">
                                    <label for="itzulerabidaiIraupena">Bueltako Bidaiaren Iraupena (Orduetan)</label>
                                    <input type="text" name="itzulerabidaiIraupena" id="itzulerabidaiIraupena" placeholder="Sartu bueltako hegaldiaren iraupena">
                                </div>
                                <!-- Bueltako hegaldiaren kodea adierazteko blokea -->
                                <div class="blokea">
                                    <label for="itzulerabidaiKodea">Bueltako Hegaldi Kodea:</label>
                                    <input type="text" name="itzulerabidaiKodea" id="itzulerabidaiKodea" placeholder="Sartu bueltako hegaldiaren kodea">
                                </div>
                                <!-- Bueltako airelinea hautatzeko blokea -->
                                <div class="blokea">
                                    <label for="itzuleraAerolinea">Bueltako Aerolinea:</label>
                                    <select name="itzuleraAerolinea" id="itzuleraAerolinea">
                                        <option value="--Aukeratu--">--Aukeratu--</option>
                                        <?php
                                        while ($aerolinea = mysqli_fetch_array($queryBueltakoAerolinea)) {
                                            echo "<option value='" . $aerolinea['Kod'] . "'>" . $aerolinea['Izena'] . "</option>";
                                        }
                                        ?>   
                                    </select>
                                </div>
                            </div>
                            <!-- Gordetzeko botoia -->
                            <input type="submit" class="btnGorde" name="btnGorde" value="Gorde Zerbitzua">
                        </div>
                    </div>
                    <!-- Zerbitzua "Ostatua" izanez gero, bloke hau ageriko da -->
                    <div class="blokea" id="ostatuaBlokea" style="display: none;">
                        <!-- Ostatuaren izena adierazteko blokea -->
                        <label for="Hotelaren_Izena">Hotelaren Izena:</label>
                        <input type="text" name="Hotelaren_Izena" id="Hotelaren_Izena" placeholder="Sartu hotelaren izena">
                        <!-- Ostatua dagoen hirian adierazteko blokea -->
                        <div class="blokea">
                            <label for="Hiria">Hiria:</label>
                            <input type="text" name="Hiria" id="Hiria" placeholder="Sartu hiriaren izena">
                        </div>
                        <!-- Ostatuaren prezioa adierazteko blokea -->
                        <div class="blokea">
                            <label for="ostatuaPrezioa">Prezioa (€):</label>
                            <input type="number" name="ostatuaPrezioa" id="ostatuaPrezioa" placeholder="Sartu ostatuaren prezioa">
                        </div>
                        <!-- Ostatuan sarrera eguna adierazteko blokea -->
                        <div class="blokea">
                            <label for="Sarrera_Eguna">Sarrera Eguna:</label>
                            <input type="date" name="Sarrera_Eguna" id="Sarrera_Eguna">
                        </div>
                        <!-- Ostatuan irteera eguna adierazteko blokea -->
                        <div class="blokea">
                            <label for="Irteera_Eguna">Irteera Eguna:</label>
                            <input type="date" name="Irteera_Eguna" id="Irteera_Eguna">
                        </div>
                        <!-- Logela mota adierazteko blokea -->  
                        <div class="blokea">
                            <label for="Logela_Mota">Logela Mota:</label>
                            <select name="Logela_Mota" id="Logela_Mota">
                                <option value="--Aukeratu--">--Aukeratu--</option>
                                <?php
                                while ($logela_mota = mysqli_fetch_array($queryLogelaMota)) {
                                    echo "<option value='" . $logela_mota['Kod'] . "'>" . $logela_mota['Mota'] . "</option>";
                                }
                                ?>   
                            </select>
                        </div>
                        <!-- Gordetzeko botoia -->
                        <input type="submit" class="btnGorde" name="btnGorde" value="Gorde Zerbitzua">
                    </div>
                    <!-- Zerbitzua "Beste Batzuk" izanez gero, bloke hau ageriko da -->
                    <div class="blokea" id="bestebatzukBlokea" style="display: none;">
                        <!-- Zerbitzuaren izena adierazteko blokea -->
                        <label for="IzenaBesteBatzuk">Izena:</label>
                        <input type="text" name="IzenaBesteBatzuk" id="IzenaBesteBatzuk" placeholder="Sartu zerbitzuaren izena">
                        <!-- Zerbitzuaren data -->
                        <div class="blokea">
                            <label for="Eguna">Data:</label>
                            <input type="date" name="Eguna" id="Eguna">
                        </div>
                        <!-- Zerbitzuaren deskribapena adierazteko blokea -->
                        <div class="blokea">
                            <label for="zerbitzuDeskribapena">Deskribapena:</label>
                            <textarea name="zerbitzuDeskribapena" id="zerbitzuDeskribapena" rows="4" cols="50" placeholder="Sartu zerbitzuaren deskribapena"></textarea>
                        </div>
                        <!-- Zerbitzuaren prezioa adierazteko blokea -->
                        <div class="blokea">
                            <label for="zerbitzuPrezioa">Prezioa (€):</label>
                            <input type="number" name="zerbitzuPrezioa" id="zerbitzuPrezioa" placeholder="Sartu zerbitzuaren prezioa">
                        </div>
                        <!-- Gordetzeko botoia -->
                        <input type="submit" class="btnGorde" name="btnGorde" value="Gorde Zerbitzua">
                    </div>
                </fieldset>
            </form>
            <!-- Laburpen taula -->
            <div id="taula-container-hegaldia">
                <table>
                    <thead>
                        <tr>
                            <th colspan="11">Zerbitzu Erregistratuen Laburpena</th>
                        </tr>
                        <tr>
                            <th>Bidaia Mota</th>
                            <th>Zerbitzua</th>
                            <th>Hegaldi Mota</th>
                            <th>Jatorrizko Aireportua</th>
                            <th>Helmugako Aireportua</th>
                            <th>Hegaldi Kodea</th>
                            <th>Airelinea</th>
                            <th>Hegaldi Prezioa</th>
                            <th>Irteera Data</th>
                            <th>Irteera Ordua</th>
                            <th>Bidai Iraupena</th>
                        </tr>
                    </thead>
                    <tbody id="laburpen-taula-hegaldia">
                    </tbody>
                </table>
            </div>
            <div id="taula-container-hegaldiaBuelta">
                <table>
                    <thead>
                        <tr>
                            <th colspan="16">Zerbitzu Erregistratuen Laburpena</th>
                        </tr>
                        <tr>
                            <th>Bidaia Mota</th>
                            <th>Zerbitzua</th>
                            <th>Hegaldi Mota</th>
                            <th>Jatorrizko Aireportua</th>
                            <th>Helmugako Aireportua</th>
                            <th>Hegaldi Kodea</th>
                            <th>Airelinea</th>
                            <th>Hegaldi Prezioa</th>
                            <th>Irteera Data</th>
                            <th>Irteera Ordua</th>
                            <th>Bidai Iraupena</th>
                            <th>Itzulera Data</th>
                            <th>Itzulera Ordua</th>
                            <th>Bueltako Bidaiaren Iraupena</th>
                            <th>Bueltako Hegaldi Kodea</th>
                            <th>Bueltako Airelinea</th>
                        </tr>
                    </thead>
                    <tbody id="laburpen-taula-hegaldiaBuelta">
                    </tbody>
                </table>
            </div>
            <div id="taula-container-ostatua">
                <table>
                    <thead>
                        <tr>
                            <th colspan="8">Zerbitzu Erregistratuen Laburpena</th>
                        </tr>
                        <tr>
                            <th>Bidaia Mota</th>
                            <th>Zerbitzua</th>
                            <th>Hotel Izena</th>
                            <th>Hiria</th>
                            <th>Prezioa</th>
                            <th>Sarrera Eguna</th>
                            <th>Irteera Eguna</th>
                            <th>Logela Mota</th>
                        </tr>
                    </thead>
                    <tbody id="laburpen-taula-ostatua">
                    </tbody>
                </table>
            </div>
            <div id="taula-container-bestebatzuk">
                <table>
                    <thead>
                        <tr>
                            <th colspan="8">Zerbitzu Erregistratuen Laburpena</th>
                        </tr>
                        <tr>
                            <th>Bidaia Mota</th>
                            <th>Zerbitzua</th>
                            <th>Zerbitzu Izena</th>
                            <th>Zerbitzu Data</th>
                            <th>Deskribapena</th>
                            <th>Prezioa</th>
                        </tr>
                    </thead>
                    <tbody id="laburpen-taula-bestebatzuk">
                    </tbody>
                </table>
            </div>
        </main>    
        <footer>
            <br>
            <p>Zerbitzua Erregistratu | Mugagabe</p>
            <br>
            <div class="sare-sozialak">
                <!-- Sare sozialetarako estekak (Instagram, Twitter/X eta Facebook) plataforma bakoitzeko ikonoekin etiketa batean bilduta, kurtsorea gainean jartzen denean deskribapena erakusteko. -->
                <abbr title="Instagram"><a href="https://www.instagram.com/?hl=es" target="_blank"><img src="img/insta.png" alt="Insta logoa" height="35"></a></abbr> 
                <abbr title="Twitter"><a href="https://twitter.com/?lang=es" target="_blank"><img src="img/twitter.png" alt="X logoa" height="35"></a></abbr> 
                <abbr title="Facebook"><a href="https://www.facebook.com/?locale=es_ES" target="_blank"><img class="logo_f" src="img/facebook.png" alt="Facebook logoa" height="35"></a></abbr>   
            </div>
        </footer>
        <script src="js/js1.js"></script>
    </body>
</html>

<?php
// Cerrar la conexión a la base de datos
mysqli_close($conn);
?>
