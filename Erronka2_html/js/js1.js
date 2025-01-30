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

      /*Hautatutako button erradioaren IDaren arabera:
        Dagokion blokea bistaratzen da.
        Gainerako blokeak ezkutatzen dira.
        If-else erabiltzen da zein botoi hautatu den egiaztatzeko*/
      if (this.id === 'btnHegaldia') {
        hegaldiaBlokea.style.display = 'block';
        ostatuaBlokea.style.display = 'none';
        bestebatzukBlokea.style.display = 'none';
      } else if (this.id === 'btnOstatua') {
        hegaldiaBlokea.style.display = 'none';
        ostatuaBlokea.style.display = 'block';
        bestebatzukBlokea.style.display = 'none';
      } else {
        hegaldiaBlokea.style.display = 'none';
        ostatuaBlokea.style.display = 'none';
        bestebatzukBlokea.style.display = 'block';
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

/* Array users bat definitzen da, non erabiltzaile bakoitza bi balio dituen azpi-array bat den:
  Lehen balioa: erabiltzaile-izena.
  Bigarren balioa: pasahitza.*/
const users = [
  ['admin', 'admin'],
  ['agentzia1', 'password1'],
  ['agentzia2', 'password2']
];

// Login formularioaren datuak egiaztatzeko funtzioa
// DOMContentLoaded erabiltzen da script-a HTML dokumentua guztiz kargatuta dagoenean bakarrik exekutatzen dela ziurtatzeko.
document.addEventListener('DOMContentLoaded', function() {

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

      // .find() erabiltzen da array users-ean sartutako izen eta pasahitzekin bat datorren erabiltzaile bat bilatzeko.
      const user = users.find(function(user) {
        return user[0] === username && user[1] === password;
      });
      /*User badago:
        Ongietorriko mezua bistaratzen du.
        Honi birbideratzen dio orrinagusia.html.
        Erabiltzailea aurkitzen ez bada:
        Alerta bat bistaratzen du, eta erabiltzailearen edo pasahitzaren errorea adierazten du. */
      if (user) {
        alert('Ongi etorri, ' + username);
        window.location.href = 'orrinagusia.html';
      } else {
        alert('Erabiltzaile edo pasahitz okerra');
      }
    });
  }
});
