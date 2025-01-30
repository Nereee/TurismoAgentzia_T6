// Egunak kalkulatzejako funtzioa
// DOMContentLoaded erabiltzen da script-a HTML dokumentua guztiz kargatuta dagoenean bakarrik exekutatzen dela ziurtatzeko.
document.addEventListener("DOMContentLoaded", function() {
  // Funtzio honen bidez, sartutako egunen arteko aldea kalkulatzen da.
  function egunakKalkulatu() {

    // <input> elementuen balioa hasieradata eta amaieradata IDekin lortzen da.
    const hasieradataValue = document.getElementById("hasieradata").value;
    const amaieradataValue = document.getElementById("amaieradata").value;

    //Bi eremuek balioak dituztela egiaztatzen da, kalkuluekin jarraitu aurretik.
    if (hasieradataValue && amaieradataValue) {
      // Eremuetako balioak Date objektu bihurtzen dira.
      const hasieradata = new Date(hasieradataValue);
      const amaieradata = new Date(amaieradataValue);
      
      // Hasierako data finalaren ondorengoa bada, errore-mezu bat agertuko da eta funtzioaren exekuzioa geldituko da.
      if (hasieradata > amaieradata) {
        document.getElementById("bidaiaegunak").value = "Error: Fecha inicial mayor.";
        return;
      }
      // Hasierako data amaierakoari kentzen zaio, milisegundotan aldea lortuz.
      const denboraaldea = amaieradata - hasieradata;
      // Gero, 1000 * 60 * 60 * 24 zatitzen da diferentzia egunetara bihurtzeko.
      const egunaldea = denboraaldea / (1000 * 60 * 60 * 24);

      //"Bidaiaegunak" sarrera-eremuari kalkulatutako egun-kopurua esleituko zaio.
      document.getElementById("bidaiaegunak").value = egunaldea;
    } 
    // Balioak hutsik badaude, "bidaiaegunak" eremua garbitzen da.
    else {
      document.getElementById("bidaiaegunak").value = "";
    }
  }
  // Event listeners gehitzen dira erabiltzaileak data-eremuen balioa aldatzen duen bakoitzean (input event) automatikoki exekutatzen da funtzio hori.
  document.getElementById("hasieradata").addEventListener("input", egunakKalkulatu);
  document.getElementById("amaieradata").addEventListener("input", egunakKalkulatu);
});

// Blokeak erakusteko funtzioa
// DOMContentLoaded erabiltzen da script-a HTML dokumentua guztiz kargatuta dagoenean bakarrik exekutatzen dela ziurtatzeko.
document.addEventListener('DOMContentLoaded', function() {
  // Hiru bloke (div) hautatzen dira eta aukera-botoiak lortzen dira (radio buttons)
  const hegaldiaBlokea = document.getElementById('hegaldiaBlokea');
  const ostatuaBlokea = document.getElementById('ostatuaBlokea');
  const bestebatzukBlokea = document.getElementById('bestebatzukBlokea');
  const zerbitzumotaRadios = document.getElementsByName('zerbitzumota');

  // Orria kargatzean, bloke guztiak ezkutatuta daude
  hegaldiaBlokea.style.display = 'none';
  ostatuaBlokea.style.display = 'none';
  bestebatzukBlokea.style.display = 'none';

  // Aukera-botoi bakoitzak aldatzen denean, bloke egokia erakusten da.
  // Change event listener bat gehitzen zaio bakoitzari, erabiltzaileak bere hautaketa noiz aldatzen duen detektatzeko.
  for (var i = 0; i < zerbitzumotaRadios.length; i++) {
    zerbitzumotaRadios[i].addEventListener('change', function() {

      // Hautatutako button erradioaren IDaren arabera:
      // Dagokion blokea bistaratzen da.
      // Gainerako blokeak ezkutatzen dira.
      if (this.id === 'btnHegaldia') {
        hegaldiaBlokea.style.display = 'block';  // Hegaldia blokea erakutsi
        ostatuaBlokea.style.display = 'none';   // Ostatua blokea ezkutatu
        bestebatzukBlokea.style.display = 'none'; // Beste Batzuk blokea ezkutatu
      } else if (this.id === 'btnOstatua') {
        hegaldiaBlokea.style.display = 'none';   // Hegaldia blokea ezkutatu
        ostatuaBlokea.style.display = 'block';  // Ostatua blokea erakutsi
        bestebatzukBlokea.style.display = 'none'; // Beste Batzuk blokea ezkutatu
      } else {
        hegaldiaBlokea.style.display = 'none';   // Hegaldia blokea ezkutatu
        ostatuaBlokea.style.display = 'none';    // Ostatua blokea ezkutatu
        bestebatzukBlokea.style.display = 'block'; // Beste Batzuk blokea erakutsi
      }
    });
  }
});

// HegaldiaBlokeak erakusteko funtzioa
// DOMContentLoaded erabiltzen da script-a HTML dokumentua guztiz kargatuta dagoenean bakarrik exekutatzen dela ziurtatzeko.
document.addEventListener('DOMContentLoaded', function() {
  // Bi bloke (div) hautatzen dira eta aukera-botoiak lortzen dira (radio buttons)
  const joanBlokea = document.getElementById('joanBlokea');
  const joanetorriBlokea = document.getElementById('joanetorriBlokea');
  const hegaldiaRadios = document.getElementsByName('hegaldiMota');

  /*Hautatutako button erradioaren IDaren arabera:
    Dagokion blokea bistaratzen da.
    Gainerako blokeak ezkutatzen dira.
    If-else erabiltzen da zein botoi hautatu den egiaztatzeko*/
  if (joanBlokea && joanetorriBlokea) {
    for (var i = 0; i < hegaldiaRadios.length; i++) {
      hegaldiaRadios[i].addEventListener('change', function() {

        /*Aukeratutako button erradioak ID="btnJoan" (joaneko hegaldia bakarrik) baldin badu, 
          joanBlokea bakarrik agertuko da, joanezkoBlokea ezkutatuz.
          Beste edozein kasutan, bi blokeak erakusten dira.*/
        if (this.id === 'btnJoan') {
          joanBlokea.style.display = 'block';
          joanetorriBlokea.style.display = 'none';
        } else {
          joanBlokea.style.display = 'block';
          joanetorriBlokea.style.display = 'block';
        }
      });
    }
  }
});

// DOMContentLoaded erabiltzen da script-a HTML dokumentua guztiz kargatuta dagoenean bakarrik exekutatzen dela ziurtatzeko.
/*Itxaron HTML dokumentua erabat kargatuta egon arte JavaScript kodea exekutatu aurretik.
  Ondoren, aukeratu inprimakia id="bidaiaForm" aukerarekin, eta gehitu submit ekitaldi bat, 
  erabiltzaileak formularioa bidaltzen duenean "Gorde formularioa" funtzioa beteko duena.*/
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('bidaiaForm').addEventListener('submit', gordeFormulario);
});

// Bidaia formularioaren datuak taulan erakusteko funtzioa
function gordeFormulario(event) {
  // Ez bidali formularioa eta ez kargatu orria.
  event.preventDefault(); 

  // Formularioan sartutako datuak lortzen dira.
  const izena = document.getElementById('izena').value;
  const bidaiamota = document.getElementById('bidaiamota').value;
  const hasieraData = document.getElementById('hasieradata').value;
  const amaieraData = document.getElementById('amaieradata').value;
  const egunak = document.getElementById('bidaiaegunak').value;
  const herrialdea = document.getElementById('herrialdea').value;
  const deskribapena = document.getElementById('deskribapena').value;

  // Taularen gorputza lortzen da, eta lerro bat gehitzen da.
  const tableBody = document.getElementById('laburpen-taula');
  const row = tableBody.insertRow();

  // Lerro berri batean zutabeak gehitzen dira, eta formularioan sartutako datuak sartzen dira.
  row.insertCell(0).textContent = izena;
  row.insertCell(1).textContent = bidaiamota;
  row.insertCell(2).textContent = hasieraData;
  row.insertCell(3).textContent = amaieraData;
  row.insertCell(4).textContent = egunak;
  row.insertCell(5).textContent = herrialdea;
  row.insertCell(6).textContent = deskribapena;

  // Taula erakusten da.
  document.getElementById('taula-container').style.display = 'block';

  // Formularioa garbitzen da
  document.getElementById('bidaiaForm').reset();
  document.getElementById('bidaiaegunak').value = '';
}

// DOMContentLoaded erabiltzen da script-a HTML dokumentua guztiz kargatuta dagoenean bakarrik exekutatzen dela ziurtatzeko.
/*Itxaron HTML dokumentua erabat kargatuta egon arte JavaScript kodea exekutatu aurretik.
  Ondoren, aukeratu inprimakia id="zerbitzuForm" aukerarekin, eta gehitu submit ekitaldi bat, 
  erabiltzaileak formularioa bidaltzen duenean "Gorde formularioa" funtzioa beteko duena.*/
  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('zerbitzuForm').addEventListener('submit', gordeFormulario2);
});

function gordeFormulario2(event) {
    event.preventDefault(); 

    const zerbitzua = document.getElementById('zerbitzumota').value;
    const hegaldiMota = document.getElementById('hegaldiMota').value;
    const jatorrizkoAireportua = document.getElementById('jatorrizkoAireportua').value;
    const helmugakoAireportua = document.getElementById('helmugakoAireportua').value;
    const hegaldiKodea = document.getElementById('hegaldiKodea').value;
    const airelinea = document.getElementById('airelinea').value;
    const hegaldiPrezioa = document.getElementById('hegaldiPrezioa').value;
    const irteeraData = document.getElementById('irteeraData').value;
    const irteeraOrdua = document.getElementById('irteeraOrdua').value;
    const bidaiIraupena = document.getElementById('bidaiIraupena').value;

    const tableBody = document.getElementById('laburpen-taula2');
    const row = tableBody.insertRow();

    row.insertCell(0).textContent = zerbitzua;
    row.insertCell(1).textContent = hegaldiMota;
    row.insertCell(2).textContent = jatorrizkoAireportua;
    row.insertCell(3).textContent = helmugakoAireportua;
    row.insertCell(4).textContent = hegaldiKodea;
    row.insertCell(5).textContent = airelinea;
    row.insertCell(6).textContent = hegaldiPrezioa;
    row.insertCell(7).textContent = irteeraData;
    row.insertCell(8).textContent = irteeraOrdua;
    row.insertCell(9).textContent = bidaiIraupena;

    document.getElementById('taula-container2').style.display = 'block';
    document.getElementById('zerbitzuForm').reset();
}




// Login formularioaren datuak egiaztatzeko funtzioa
// DOMContentLoaded erabiltzen da script-a HTML dokumentua guztiz kargatuta dagoenean bakarrik exekutatzen dela ziurtatzeko.
document.addEventListener('DOMContentLoaded', function() {
  /* Array users bat definitzen da, non erabiltzaile bakoitza bi balio dituen azpi-array bat den:
  Lehen balioa: erabiltzaile-izena.
  Bigarren balioa: pasahitza.*/
  const users = [
    ['admin', 'admin'],
    ['agentzia1', 'password1'],
    ['agentzia2', 'password2']
  ];

  /*getElementById('loginForm') duen formularioa lortzen da.
    Event listener bat gehitzen zaio formularioko submit ekitaldiari.
    event.preventDefault() erabiltzen da, orria berriz karga ez dadin.*/ 
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();

      // Erabiltzaile-izena eta pasahitza lortzen dira.
      const username = document.getElementById('erabiltzailea').value;
      const password = document.getElementById('pasahitza').value;

      let userFound = false; // Aldagai bat erabiltzailea aurkitu den adierazteko.

      // users array-a for loop erabiliz pasatzen dugu
      for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if (user[0] === username && user[1] === password) {
          userFound = true;
          break; // Erabiltzailea aurkitu duzunean, loop-a gelditu
        }
      }

      // Erabiltzailea aurkitu den egiaztatzen da
      if (userFound) {
        alert('Ongi etorri, ' + username);
        window.location.href = 'orrinagusia.html';
      } else {
        alert('Erabiltzaile edo pasahitz okerra');
      }
    });
  }
});

