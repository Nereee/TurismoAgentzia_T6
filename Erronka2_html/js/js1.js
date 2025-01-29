//DOMContentLoaded JavaScript-eko gertaera bat da, eta HTML dokumentua guztiz kargatu eta parseatu denean jaurtitzen da.
document.addEventListener("DOMContentLoaded", function() {
  // Bi daten arteko egunak kalkulatzeko funtzioa
  function egunakKalkulatu() {
    // Daten balioak lortu    
    const hasieradataValue = document.getElementById("hasieradata").value;
    const amaieradataValue = document.getElementById("amaieradata").value;

    // Egiaztatu bi datak ospitaleratuta daudela    
    if (hasieradataValue && amaieradataValue) {
      // Bihurtu datak objektu Date
      const hasieradata = new Date(hasieradataValue);
      const amaieradata = new Date(amaieradataValue);

      // Balidatu hasierako data ez izatea azkena baino handiagoa
      if (hasieradata > amaieradata) {
        document.getElementById("bidaiaegunak").value = "Error: Fecha inicial mayor.";
        return;
      }

      // Kalkulatu aldea milisegundotan eta bihurtu egunetara
      const denboraaldea = amaieradata - hasieradata;
      const egunaldea = denboraaldea / (1000 * 60 * 60 * 24);

      // Erakutsi emaitza testu-inputean
      document.getElementById("bidaiaegunak").value = egunaldea;
    } 
    else {
      // Dataren bat falta bada, garbitu emaitza
      document.getElementById("bidaiaegunak").value = "";
    }
  }

  // Gehitu gertaerak automatikoki kalkulatzeko datak aldatzean
  document.getElementById("hasieradata").addEventListener("input", egunakKalkulatu);
  document.getElementById("amaieradata").addEventListener("input", egunakKalkulatu);
});

document.addEventListener('DOMContentLoaded', function () {
  const hegaldiaBlokea = document.getElementById('hegaldiaBlokea');
  const ostatuaBlokea = document.getElementById('ostatuaBlokea');
  const bestebatzukBlokea = document.getElementById('bestebatzukBlokea');
  const zerbitzumotaRadios = document.getElementsByName('zerbitzumota');

  // Lehenengoz, bloke guztiak ezkutatu
  hegaldiaBlokea.style.display = 'none';
  ostatuaBlokea.style.display = 'none';
  bestebatzukBlokea.style.display = 'none';

  zerbitzumotaRadios.forEach(radio => {
      radio.addEventListener('change', function () {
          if (radio.id === 'btnHegaldia') {
              // Erakutsi hegaldiaBlokea eta ezkutatu ostatuaBlokea eta bestebatzukBlokea
              hegaldiaBlokea.style.display = 'block';
              ostatuaBlokea.style.display = 'none';
              bestebatzukBlokea.style.display = 'none';
          } 
          else if (radio.id === 'btnOstatua') {
              // Erakutsi ostatuaBlokea eta hegaldiaBlokea eta bestebatzukBlokea ezkutatu
              hegaldiaBlokea.style.display = 'none';
              ostatuaBlokea.style.display = 'block';
              bestebatzukBlokea.style.display = 'none';
          } 
          else {
              // Erakutsi bestebatzukBlokea eta hegaldiaBlokea eta ostatuaBlokea ezkutatu
              hegaldiaBlokea.style.display = 'none';
              ostatuaBlokea.style.display = 'none';
              bestebatzukBlokea.style.display = 'block';
          }
      });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const joanBlokea = document.getElementById('joanBlokea');
  const joanetorriBlokea = document.getElementById('joanetorriBlokea');
  const hegaldiaRadios = document.getElementsByName('hegaldiMota');

  if (joanBlokea && joanetorriBlokea) {
    hegaldiaRadios.forEach(radio => {
        radio.addEventListener('change', function () {
            if (radio.id === 'btnJoan') {
              // Erakutsi joanBlokea eta joanetorriBlokea ezkutatu
              joanBlokea.style.display = 'block';
              joanetorriBlokea.style.display = 'none';
            } 
            else {
              // Erakutsi joanetorriBlokea y joanBlokea
              joanBlokea.style.display = 'block';
              joanetorriBlokea.style.display = 'block';
            } 
        });
    });
  }
});

 // Bi dataren arteko egunak kalkulatzeko funtzioa
 function kalkulatuEgunak() {
  const hasieraData = document.getElementById('hasieradata').value;
  const amaieraData = document.getElementById('amaieradata').value;

  if (hasieraData && amaieraData) {
      const hasiera = new Date(hasieraData);
      const amaiera = new Date(amaieraData);
      const egunak = Math.ceil((amaiera - hasiera) / (1000 * 60 * 60 * 24));

      if (egunak >= 0) {
          document.getElementById('bidaiaegunak').value = `${egunak} egun`;
      } 
      else {
          document.getElementById('bidaiaegunak').value = "Errorea: Amaiera data lehenago da";
      }
  }
}

// Inprimakiaren bidalketa maneiatzeko funtzioa (BIDAIA ERREGISTRATU)
function gordeFormulario(event) {
  event.preventDefault(); // Orrialdea ez kargatu

  // Formularioko datuak atzitu
  const izena = document.getElementById('izena').value;
  const bidaiamota = document.getElementById('bidaiamota').value;
  const hasieraData = document.getElementById('hasieradata').value;
  const amaieraData = document.getElementById('amaieradata').value;
  const egunak = document.getElementById('bidaiaegunak').value;
  const herrialdea = document.getElementById('herrialdea').value;
  const deskribapena = document.getElementById('deskribapena').value;

  // Taulan beste errenkada bat sortu
  const tableBody = document.getElementById('laburpen-taula');
  const row = document.createElement('tr');
  row.innerHTML = `
      <td>${izena}</td>
      <td>${bidaiamota}</td>
      <td>${hasieraData}</td>
      <td>${amaieraData}</td>
      <td>${egunak}</td>
      <td>${herrialdea}</td>
      <td>${deskribapena}</td>
  `;
  tableBody.appendChild(row);

  // Erakutsi taula eta izenburua
  const tablaContenedor = document.getElementById('taula-container');
  tablaContenedor.style.display = 'block';

  // Formularioa berrabiarazi
  document.getElementById('bidaiaForm').reset();
  document.getElementById('bidaiaegunak').value = '';
}

// Lotu gertaerak orria kargatzean
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('hasieradata').addEventListener('change', kalkulatuEgunak);
  document.getElementById('amaieradata').addEventListener('change', kalkulatuEgunak);
  document.getElementById('bidaiaForm').addEventListener('submit', gordeFormulario);
});



// Array-ak erabiltzaileen datuekin (administratzailea eta agentziak)
const users = [
  ['admin', 'admin'],  // [erabiltzailea, pasahitza]
  ['agentzia1', 'password1'],  // [erabiltzailea, pasahitza]
  ['agentzia2', 'password2']   // [erabiltzailea, pasahitza]
];

document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function (event) {
      event.preventDefault(); // Inprimakia ez bidaltzea

      const username = document.getElementById('erabiltzailea').value;
      const password = document.getElementById('pasahitza').value;

      // Egiaztatu erabiltzailea eta pasahitza zuzenak diren
      const user = users.find(user => user[0] === username && user[1] === password);
      if (user) {
        alert(`Ongi etorri, ${username}`);
        window.location.href = 'orrinagusia.html'; // Orri nagusira zuzendu
      } else {
        alert('Erabiltzaile edo pasahitz okerra');
      }
    });
  }
});





