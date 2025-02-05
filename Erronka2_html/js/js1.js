document.addEventListener('DOMContentLoaded', function() {
  // Egunak kalkulatzejako funtzioa
  function egunakKalkulatu() {
    const hasieradataValue = document.getElementById("Data_Hasiera")?.value;
    const amaieradataValue = document.getElementById("Data_Amaiera")?.value;

    if (hasieradataValue && amaieradataValue) {
      const hasieradata = new Date(hasieradataValue);
      const amaieradata = new Date(amaieradataValue);

      if (hasieradata > amaieradata) {
        document.getElementById("bidaiaegunak").value = "Error: Fecha inicial mayor.";
        return;
      }

      const denboraaldea = amaieradata - hasieradata;
      const egunaldea = denboraaldea / (1000 * 60 * 60 * 24);

      document.getElementById("bidaiaegunak").value = egunaldea;
    } else {
      document.getElementById("bidaiaegunak").value = "";
    }
  }

  const hasieradataElement = document.getElementById("Data_Hasiera");
  const amaieradataElement = document.getElementById("Data_Amaiera");

  if (hasieradataElement) {
    hasieradataElement.addEventListener("input", egunakKalkulatu);
  }

  if (amaieradataElement) {
    amaieradataElement.addEventListener("input", egunakKalkulatu);
  }
  // Blokeak erakusteko funtzioa
  function zerbitzuMotaEguneratu() {
    const hegaldiaBlokea = document.getElementById('hegaldiaBlokea');
    const ostatuaBlokea = document.getElementById('ostatuaBlokea');
    const bestebatzukBlokea = document.getElementById('bestebatzukBlokea');
    const hautatua = document.querySelector('input[name="ID_Bidaiak"]:checked')?.id;

    //if-else bezalako funtzio bat da
    hegaldiaBlokea.style.display = (hautatua === 'btnHegaldia') ? 'block' : 'none';
    ostatuaBlokea.style.display = (hautatua === 'btnOstatua') ? 'block' : 'none';
    bestebatzukBlokea.style.display = (!hautatua || hautatua === 'btnBestebatzuk') ? 'block' : 'none';
  }

  document.getElementsByName('ID_Bidaiak').forEach(function(radio) {
    radio.addEventListener('change', zerbitzuMotaEguneratu);
  });

  // Hegaldi mota (joan edo joan-etorri) aukeratu eta bistaratu
  function hegaldiaEguneratu() {
    const joanBlokea = document.getElementById('joanBlokea');
    const joanetorriBlokea = document.getElementById('joanetorriBlokea');
    const hautatua = document.querySelector('input[name="hegaldiMota"]:checked')?.id;

    if (hautatua === 'btnJoan') {
      joanBlokea.style.display = 'block';
      joanetorriBlokea.style.display = 'none';
    } else {
      joanBlokea.style.display = 'block';
      joanetorriBlokea.style.display = 'block';
    }
  }

  document.getElementsByName('hegaldiMota').forEach(function(radio) {
    radio.addEventListener('change', hegaldiaEguneratu);
  });

  // Gorde formularioa funtzioa
  function gordeFormularioBidaia(event) {
    event.preventDefault();

    const izena = document.getElementById('Izena').value;
    const bidaiamota = document.getElementById('Kod_Mota').value;
    const hasieraData = document.getElementById('Data_Hasiera').value;
    const amaieraData = document.getElementById('Data_Amaiera').value;
    const egunak = document.getElementById('bidaiaegunak').value;
    const herrialdea = document.getElementById('ID_Herrialdeak').value;
    const deskribapena = document.getElementById('Deskribapena').value;
    const aerolinea = document.getElementById('Aerolinea').value;

    const tableBody = document.getElementById('laburpen-taula-bidaia');
    const row = tableBody.insertRow();

    row.insertCell(0).textContent = izena;
    row.insertCell(1).textContent = bidaiamota;
    row.insertCell(2).textContent = hasieraData;
    row.insertCell(3).textContent = amaieraData;
    row.insertCell(4).textContent = egunak;
    row.insertCell(5).textContent = herrialdea;
    row.insertCell(6).textContent = deskribapena;
    row.insertCell(7).textContent = aerolinea;

    document.getElementById('taula-container-bidaia').style.display = 'block';

    document.getElementById('bidaiaForm').reset();
    document.getElementById('bidaiaegunak').value = '';

  }
  const bidaiaForm = document.getElementById('bidaiaForm');
  if (bidaiaForm) {
    bidaiaForm.addEventListener('submit', gordeFormularioBidaia);
  }


  // Zerbitzu hegaldiaren formularioa gorde funtzioa
  function gordeFormularioHegaldia(event) {
    event.preventDefault();

    const bidaiamota = document.getElementById('Kod_Mota').value;
    const zerbitzua = document.querySelector('input[name="ID_Bidaiak"]:checked').value;
    const hegaldiMota = document.querySelector('input[name="hegaldiMota"]:checked').value;
    const jatorrizkoAireportua = document.getElementById('Jatorrizko').value;
    const helmugakoAireportua = document.getElementById('Helmuga').value;
    const hegaldiKodea = document.getElementById('Hegaldi_Kod').value;
    const airelinea = document.getElementById('Aerolinea').value;
    const hegaldiPrezioa = document.getElementById('Prezioa').value;
    const irteeraData = document.getElementById('Irteera_Data').value;
    const irteeraOrdua = document.getElementById('Irteera_Ordua').value;
    const bidaiIraupena = document.getElementById('Iraupena').value;

    const tableBody = document.getElementById('laburpen-taula-hegaldia');
    const row = tableBody.insertRow();

    row.insertCell(0).textContent = bidaiamota;
    row.insertCell(1).textContent = zerbitzua;
    row.insertCell(2).textContent = hegaldiMota;
    row.insertCell(3).textContent = jatorrizkoAireportua;
    row.insertCell(4).textContent = helmugakoAireportua;
    row.insertCell(5).textContent = hegaldiKodea;
    row.insertCell(6).textContent = airelinea;
    row.insertCell(7).textContent = hegaldiPrezioa;
    row.insertCell(8).textContent = irteeraData;
    row.insertCell(9).textContent = irteeraOrdua;
    row.insertCell(10).textContent = bidaiIraupena;

    document.getElementById('taula-container-hegaldia').style.display = 'block';
    document.getElementById('zerbitzuForm').reset();
    
  }
  const zerbitzuFormHegaldia = document.getElementById('zerbitzuForm');
  if (zerbitzuFormHegaldia) {
    zerbitzuFormHegaldia.addEventListener('submit', gordeFormularioHegaldia);
  }

  // Zerbitzu hegaldia bueltaren formularioa gorde funtzioa
  function gordeFormularioHegaldiaBuelta(event) {
    event.preventDefault();

    const bidaiamota = document.getElementById('Kod_Mota').value;
    const zerbitzua = document.querySelector('input[name="ID_Bidaiak"]:checked').value;
    const hegaldiMota = document.querySelector('input[name="hegaldiMota"]:checked').value;
    const jatorrizkoAireportua = document.getElementById('Jatorrizko').value;
    const helmugakoAireportua = document.getElementById('Helmuga').value;
    const hegaldiKodea = document.getElementById('Hegaldi_Kod').value;
    const airelinea = document.getElementById('Aerolinea').value;
    const hegaldiPrezioa = document.getElementById('Prezioa').value;
    const irteeraData = document.getElementById('Irteera_Data').value;
    const irteeraOrdua = document.getElementById('Irteera_Ordua').value;
    const bidaiIraupena = document.getElementById('Iraupena').value;
    const itzuleraData = document.getElementById('itzuleraData').value;
    const itzuleraOrdua = document.getElementById('itzuleraOrdua').value;
    const itzulerabidaiIraupena = document.getElementById('itzulerabidaiIraupena').value;
    const itzulerabidaiKodea = document.getElementById('itzulerabidaiKodea').value;
    const itzuleraAirelinea = document.getElementById('itzuleraAerolinea').value;

    const tableBody = document.getElementById('laburpen-taula-hegaldiaBuelta');
    const row = tableBody.insertRow();

    row.insertCell(0).textContent = bidaiamota;
    row.insertCell(1).textContent = zerbitzua;
    row.insertCell(2).textContent = hegaldiMota;
    row.insertCell(3).textContent = jatorrizkoAireportua;
    row.insertCell(4).textContent = helmugakoAireportua;
    row.insertCell(5).textContent = hegaldiKodea;
    row.insertCell(6).textContent = airelinea;
    row.insertCell(7).textContent = hegaldiPrezioa;
    row.insertCell(8).textContent = irteeraData;
    row.insertCell(9).textContent = irteeraOrdua;
    row.insertCell(10).textContent = bidaiIraupena;
    row.insertCell(11).textContent = itzuleraData;
    row.insertCell(12).textContent = itzuleraOrdua;
    row.insertCell(13).textContent = itzulerabidaiIraupena;
    row.insertCell(14).textContent = itzulerabidaiKodea;
    row.insertCell(15).textContent = itzuleraAirelinea;

    document.getElementById('taula-container-hegaldiaBuelta').style.display = 'block';
    document.getElementById('zerbitzuForm').reset();
    
  }
  const zerbitzuFormHegaldiaBuelta = document.getElementById('zerbitzuForm');
  if (zerbitzuFormHegaldiaBuelta) {
    zerbitzuFormHegaldiaBuelta.addEventListener('submit', gordeFormularioHegaldiaBuelta);
  }

  // Zerbitzu ostatuaren formularioa gorde funtzioa
  function gordeFormularioOstatua(event) {
    event.preventDefault();

    const bidaiamota = document.getElementById('Kod_Mota').value;
    const zerbitzua = document.querySelector('input[name="ID_Bidaiak"]:checked').value;
    const hotelIzena = document.getElementById('Hotelaren_Izena').value;
    const hiriaOstatua = document.getElementById('Hiria').value;
    const ostatuaPrezioa = document.getElementById('ostatuaPrezioa').value;
    const ostatuaSarrera = document.getElementById('Sarrera_Eguna').value;
    const ostatuaIrteera = document.getElementById('Irteera_Eguna').value;
    const ostatuaLogelea = document.getElementById('Logela_Mota').value;

    const tableBody = document.getElementById('laburpen-taula-ostatua');
    const row = tableBody.insertRow();

    row.insertCell(0).textContent = bidaiamota; 
    row.insertCell(1).textContent = zerbitzua;
    row.insertCell(2).textContent = hotelIzena;
    row.insertCell(3).textContent = hiriaOstatua;
    row.insertCell(4).textContent = ostatuaPrezioa;
    row.insertCell(5).textContent = ostatuaSarrera;
    row.insertCell(6).textContent = ostatuaIrteera;
    row.insertCell(7).textContent = ostatuaLogelea;

    document.getElementById('taula-container-ostatua').style.display = 'block';
    document.getElementById('zerbitzuForm').reset();
    
  }
  const zerbitzuFormOstatua = document.getElementById('zerbitzuForm');
  if (zerbitzuFormOstatua) {
    zerbitzuFormOstatua.addEventListener('submit', gordeFormularioOstatua);
  }

  // Zerbitzu beste batzuen formularioa gorde funtzioa
  function gordeFormularioBestebatzuk(event) {
    event.preventDefault();

    const bidaiamota = document.getElementById('Kod_Mota').value;
    const zerbitzua = document.querySelector('input[name="ID_Bidaiak"]:checked').value;
    const bestebatzukIzena = document.getElementById('IzenaBesteBatzuk').value;
    const zerbitzuData = document.getElementById('Eguna').value;
    const zerbitzuDeskribapena = document.getElementById('zerbitzuDeskribapena').value;
    const zerbitzuPrezioa = document.getElementById('zerbitzuPrezioa').value;

    const tableBody = document.getElementById('laburpen-taula-bestebatzuk');
    const row = tableBody.insertRow();

    row.insertCell(0).textContent = bidaiamota; 
    row.insertCell(1).textContent = zerbitzua;
    row.insertCell(2).textContent = bestebatzukIzena;
    row.insertCell(3).textContent = zerbitzuData;
    row.insertCell(4).textContent = zerbitzuDeskribapena;
    row.insertCell(5).textContent = zerbitzuPrezioa;

    document.getElementById('taula-container-bestebatzuk').style.display = 'block';
    document.getElementById('zerbitzuForm').reset();
    
  }
  const zerbitzuFormbestebatzuk = document.getElementById('zerbitzuForm');
  if (zerbitzuFormbestebatzuk) {
    zerbitzuFormbestebatzuk.addEventListener('submit', gordeFormularioBestebatzuk);
  }

  // Login formularioaren datuak egiaztatzeko funtzioa
  const users = [
    ['admin', 'admin'],
    ['agentzia1', 'password1'],
    ['agentzia2', 'password2']
  ];

  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();

      const username = document.getElementById('erabiltzailea').value;
      const password = document.getElementById('pasahitza').value;

      let userFound = false;

      for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if (user[0] === username && user[1] === password) {
          userFound = true;
          break;
        }
      }

      if (userFound) {
        window.location.href = 'orrinagusia.html';
      } 
      else {
          document.getElementById("errore_mezua").style.display = "block"; 
      }
    });
  }
});