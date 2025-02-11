//----------------- Dena (div, etab...) kargatu ondoren funtzioak exekutatuko dira -----------------//
document.addEventListener('DOMContentLoaded', function() {

  //----------------- Egunak kalkulatzejako funtzioa -----------------//
  
    function egunakKalkulatu() {
      // Elementuak hautatzen dira
      const hasieradataValue = document.getElementById("Data_Hasiera").value;
      const amaieradataValue = document.getElementById("Data_Amaiera").value;
      // Elementuak existitzen badira, hasieradataValue balioa erabiliz, Date objektu bat sortzen du. Gauza bera gertatzen da adamaieratarekin.
      if (hasieradataValue && amaieradataValue) {
        const hasieradata = new Date(hasieradataValue);
        const amaieradata = new Date(amaieradataValue);
        // Hasieradata, amaieradata baino handiagoa da, errore bat ageriko da
        if (hasieradata > amaieradata) {
          document.getElementById("bidaiaegunak").value = "Error: Fecha inicial mayor.";
          return;
        }
        // Datak baliozkoak badira, bi daten arteko aldea kalkulatzen da milisegundotan
        const denboraaldea = amaieradata - hasieradata;
        // Milisegundotan dagoen alde hori egunetara aldatzen da zati 1000 * 60 * 60 * 24 eginez.
        const egunaldea = denboraaldea / (1000 * 60 * 60 * 24);
  
        // Emaitza input batean gordetzen eta erakusten da
        document.getElementById("bidaiaegunak").value = egunaldea;
      } 
    }
    // Event listener bat esleitzen da, datak aldatzen diren bakoitzean egunak kalkulatzeko
    const hasieradataElement = document.getElementById("Data_Hasiera");
    const amaieradataElement = document.getElementById("Data_Amaiera");
    if (hasieradataElement) {
      hasieradataElement.addEventListener("input", egunakKalkulatu);
    }
    if (amaieradataElement) {
      amaieradataElement.addEventListener("input", egunakKalkulatu);
    }
  
  //----------------- Blokeak erakusteko funtzioa -----------------//
  
    function zerbitzuBlokeakErakutsi() {
      // Elementuak hautatzen dira
      const hegaldiaBlokea = document.getElementById('hegaldiaBlokea');
      const ostatuaBlokea = document.getElementById('ostatuaBlokea');
      const bestebatzukBlokea = document.getElementById('bestebatzukBlokea');
      // Hautatutako button erradioaren ID-a lortzen du
      const hautatua = document.querySelector('input[name="ID_Bidaiak"]:checked').id;
  
      // Bloke bakoitza bistaratzeko estiloa hautatzen den aukeraren arabera esleitzen da
      if (hautatua === 'btnHegaldia') {
        hegaldiaBlokea.style.display = 'block';
      } 
      else {
          hegaldiaBlokea.style.display = 'none';
      }
      if (hautatua === 'btnOstatua') {
          ostatuaBlokea.style.display = 'block';
      } 
      else {
          ostatuaBlokea.style.display = 'none';
      }
      if (!hautatua || hautatua === 'btnBestebatzuk') {
          bestebatzukBlokea.style.display = 'block';
      } 
      else {
          bestebatzukBlokea.style.display = 'none';
      }
    }
    // Input elementu guztiei aldaketa-gertaera (change) esleitzen zaie ID_Bidaiak izenarekin. Aukera berri bat hautatzen den bakoitzean, funtzioa exekutatuko da.
    document.getElementsByName('ID_Bidaiak').forEach(function(radio) {
      radio.addEventListener('change', zerbitzuBlokeakErakutsi);
    });
  
  //----------------- Hegaldi mota blokeak erakusteko funtzioa -----------------//
  
    function hegaldiBlokeakErakutsi() {
      // Elementuak hautatzen dira
      const joanBlokea = document.getElementById('joanBlokea');
      const joanetorriBlokea = document.getElementById('joanetorriBlokea');
      // Hautatutako button erradioaren ID-a lortzen du
      const hautatua = document.querySelector('input[name="hegaldiMota"]:checked').id;
      // Erabiltzaileak ID="btnJoan" marka duen radio button aukeratu duen ebaluatzen du
      if (hautatua === 'btnJoan') {
        joanBlokea.style.display = 'block';
        joanetorriBlokea.style.display = 'none';
      } else {
        joanBlokea.style.display = 'block';
        joanetorriBlokea.style.display = 'block';
      }
    }  
    // Input elementu guztiei aldaketa-gertaera (change) esleitzen zaie ID_Bidaiak izenarekin. Aukera berri bat hautatzen den bakoitzean, funtzioa exekutatuko da.
    document.getElementsByName('hegaldiMota').forEach(function(radio) {
      radio.addEventListener('change', hegaldiBlokeakErakutsi);
    });
  
  //----------------- Hegaldi (Joan) gordetzeko botoia ezkutatzeko funtzioa -----------------//
  
    function hegaldiaBotoiaEzkutatu() {
      // Elementuak hautatzen dira
      const btnJoanetorri = document.getElementById('btnJoanetorri');
      const hegaldiaGordeJoan = document.getElementById('hegaldiaGordeJoan');
    
      if (btnJoanetorri && hegaldiaGordeJoan) {
        if (btnJoanetorri.checked) {
          // Hautatuta badago, botoia ezkutatuko da
          hegaldiaGordeJoan.style.display = 'none';
        } 
        else {
          // Hautatuta ez badago, erakutsiko dugu
          hegaldiaGordeJoan.style.display = 'block';
        }
      }
    }
    // Input elementu guztiei aldaketa-gertaera (change) esleitzen zaie ID_Bidaiak izenarekin. Aukera berri bat hautatzen den bakoitzean, funtzioa exekutatuko da.
    document.querySelectorAll('input[name="hegaldiMota"]').forEach(function(radio) {
      radio.addEventListener('change', hegaldiaBotoiaEzkutatu);
    });
  
  //----------------- Bidaia formularioa gordetzeko funtzioa -----------------//
  
    function gordeFormularioBidaia(event) {
      // Formularioan aurrez zehaztutako ekintza prebenitzen da (orria berriz kargatzea).
      event.preventDefault();
      // Sartutako balioak jasotzen dira
      const izena = document.getElementById('Izena').value;
      const bidaiamota = document.getElementById('Kod_Mota').value;
      const hasieraData = document.getElementById('Data_Hasiera').value;
      const amaieraData = document.getElementById('Data_Amaiera').value;
      const egunak = document.getElementById('bidaiaegunak').value;
      const herrialdea = document.getElementById('ID_Herrialdeak').value;
      const deskribapena = document.getElementById('Deskribapena').value;
      const aerolinea = document.getElementById('Aerolinea').value;
  
      //Taulako tbody-a hautatu eta lerro berri bat sortzen da
      const tableBody = document.getElementById('laburpen-taula-bidaia');
      const row = tableBody.insertRow();
  
      // Formulariotik lortutako balio bakoitzerako, gelaxka bat txertatzen da
      row.insertCell(0).textContent = izena;
      row.insertCell(1).textContent = bidaiamota;
      row.insertCell(2).textContent = hasieraData;
      row.insertCell(3).textContent = amaieraData;
      row.insertCell(4).textContent = egunak;
      row.insertCell(5).textContent = herrialdea;
      row.insertCell(6).textContent = deskribapena;
      row.insertCell(7).textContent = aerolinea;
  
      // Errenkada berria gehitu ondoren, ikusgai jartzen da bere estiloa ezarriz
      document.getElementById('taula-container-bidaia').style.display = 'block';
      // Taulari datuak gehitu ondoren, sarrera-formularioa berrezarri egiten da
      document.getElementById('bidaiaForm').reset();
      // Egun-kopurua kalkulatzeko erabiltzen den eremua garbitu behar da, hondar-baliorik gera ez dadin.
      document.getElementById('bidaiaegunak').value = '';
    }
    const bidaiaForm = document.getElementById('bidaiaForm');
    if (bidaiaForm) {
      bidaiaForm.addEventListener('submit', gordeFormularioBidaia);
    }
  
  //----------------- Hegaldia (Joan) formularioa gordetzeko funtzioa -----------------//
  
    function gordeFormularioHegaldia(event) {
      // Formularioan aurrez zehaztutako ekintza prebenitzen da (orria berriz kargatzea).
      event.preventDefault();
      // Sartutako balioak jasotzen dira
      const bidaiamota = document.getElementById('Kod_Mota').value;
      const zerbitzua = document.querySelector('input[name="ID_Bidaiak"]:checked').id;
      const jatorrizkoAireportua = document.getElementById('Jatorrizko').value;
      const helmugakoAireportua = document.getElementById('Helmuga').value;
      const hegaldiKodea = document.getElementById('Hegaldi_Kod').value;
      const airelinea = document.getElementById('Aerolinea').value;
      const hegaldiPrezioa = document.getElementById('Prezioa').value;
      const irteeraData = document.getElementById('Irteera_Data').value;
      const irteeraOrdua = document.getElementById('Irteera_Ordua').value;
      const bidaiIraupena = document.getElementById('Iraupena').value;
  
      //Taulako tbody-a hautatu eta lerro berri bat sortzen da
      const tableBody = document.getElementById('laburpen-taula-hegaldia');
      const row = tableBody.insertRow();
  
      // Formulariotik lortutako balio bakoitzerako, gelaxka bat txertatzen da
      row.insertCell(0).textContent = bidaiamota;
      row.insertCell(1).textContent = zerbitzua;
      row.insertCell(2).textContent = jatorrizkoAireportua;
      row.insertCell(3).textContent = helmugakoAireportua;
      row.insertCell(4).textContent = hegaldiKodea;
      row.insertCell(5).textContent = airelinea;
      row.insertCell(6).textContent = hegaldiPrezioa;
      row.insertCell(7).textContent = irteeraData;
      row.insertCell(8).textContent = irteeraOrdua;
      row.insertCell(9).textContent = bidaiIraupena;
  
      // Errenkada berria gehitu ondoren, ikusgai jartzen da bere estiloa ezarriz
      document.getElementById('taula-container-hegaldia').style.display = 'block';
      // Taulari datuak gehitu ondoren, sarrera-formularioa berrezarri egiten da
      document.getElementById('zerbitzuForm').reset();
    }
   
  //----------------- Hegaldia (Joan/Etorri) formularioa gordetzeko funtzioa -----------------//
  
    function gordeFormularioHegaldiaBuelta(event) {
      // Formularioan aurrez zehaztutako ekintza prebenitzen da (orria berriz kargatzea).
      event.preventDefault();
      // Sartutako balioak jasotzen dira
      const bidaiamota = document.getElementById('Kod_Mota').value;
      const zerbitzua = document.querySelector('input[name="ID_Bidaiak"]:checked').id;
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
  
      //Taulako tbody-a hautatu eta lerro berri bat sortzen da
      const tableBody = document.getElementById('laburpen-taula-hegaldiaBuelta');
      const row = tableBody.insertRow();
  
      // Formulariotik lortutako balio bakoitzerako, gelaxka bat txertatzen da
      row.insertCell(0).textContent = bidaiamota;
      row.insertCell(1).textContent = zerbitzua;
      row.insertCell(2).textContent = jatorrizkoAireportua;
      row.insertCell(3).textContent = helmugakoAireportua;
      row.insertCell(4).textContent = hegaldiKodea;
      row.insertCell(5).textContent = airelinea;
      row.insertCell(6).textContent = hegaldiPrezioa;
      row.insertCell(7).textContent = irteeraData;
      row.insertCell(8).textContent = irteeraOrdua;
      row.insertCell(9).textContent = bidaiIraupena;
      row.insertCell(10).textContent = itzuleraData;
      row.insertCell(11).textContent = itzuleraOrdua;
      row.insertCell(12).textContent = itzulerabidaiIraupena;
      row.insertCell(13).textContent = itzulerabidaiKodea;
      row.insertCell(14).textContent = itzuleraAirelinea;
  
      // Errenkada berria gehitu ondoren, ikusgai jartzen da bere estiloa ezarriz
      document.getElementById('taula-container-hegaldiaBuelta').style.display = 'block';
      // Taulari datuak gehitu ondoren, sarrera-formularioa berrezarri egiten da
      document.getElementById('zerbitzuForm').reset();
    }
  
  //----------------- Ostatua formularioa gordetzeko funtzioa -----------------//
  
    function gordeFormularioOstatua(event) {
      // Formularioan aurrez zehaztutako ekintza prebenitzen da (orria berriz kargatzea).
      event.preventDefault();
      // Sartutako balioak jasotzen dira
      const bidaiamota = document.getElementById('Kod_Mota').value;
      const zerbitzua = document.querySelector('input[name="ID_Bidaiak"]:checked').id;
      const hotelIzena = document.getElementById('Hotelaren_Izena').value;
      const hiriaOstatua = document.getElementById('Hiria').value;
      const ostatuaPrezioa = document.getElementById('ostatuaPrezioa').value;
      const ostatuaSarrera = document.getElementById('Sarrera_Eguna').value;
      const ostatuaIrteera = document.getElementById('Irteera_Eguna').value;
      const ostatuaLogelea = document.getElementById('Logela_Mota').value;
  
      //Taulako tbody-a hautatu eta lerro berri bat sortzen da
      const tableBody = document.getElementById('laburpen-taula-ostatua');
      const row = tableBody.insertRow();
  
      // Formulariotik lortutako balio bakoitzerako, gelaxka bat txertatzen da
      row.insertCell(0).textContent = bidaiamota; 
      row.insertCell(1).textContent = zerbitzua;
      row.insertCell(2).textContent = hotelIzena;
      row.insertCell(3).textContent = hiriaOstatua;
      row.insertCell(4).textContent = ostatuaPrezioa;
      row.insertCell(5).textContent = ostatuaSarrera;
      row.insertCell(6).textContent = ostatuaIrteera;
      row.insertCell(7).textContent = ostatuaLogelea;
  
      // Errenkada berria gehitu ondoren, ikusgai jartzen da bere estiloa ezarriz
      document.getElementById('taula-container-ostatua').style.display = 'block';
      // Taulari datuak gehitu ondoren, sarrera-formularioa berrezarri egiten da
      document.getElementById('zerbitzuForm').reset();
    }
  
  //----------------- Beste Batzuk formularioa gordetzeko funtzioa -----------------//
  
    function gordeFormularioBestebatzuk(event) {
      // Formularioan aurrez zehaztutako ekintza prebenitzen da (orria berriz kargatzea).s
      event.preventDefault();
      // Sartutako balioak jasotzen dira
      const bidaiamota = document.getElementById('Kod_Mota').value;
      const zerbitzua = document.querySelector('input[name="ID_Bidaiak"]:checked').id;
      const bestebatzukIzena = document.getElementById('IzenaBesteBatzuk').value;
      const zerbitzuData = document.getElementById('Eguna').value;
      const zerbitzuDeskribapena = document.getElementById('zerbitzuDeskribapena').value;
      const zerbitzuPrezioa = document.getElementById('zerbitzuPrezioa').value;
  
      //Taulako tbody-a hautatu eta lerro berri bat sortzen da
      const tableBody = document.getElementById('laburpen-taula-bestebatzuk');
      const row = tableBody.insertRow();
  
      // Formulariotik lortutako balio bakoitzerako, gelaxka bat txertatzen da 
      row.insertCell(0).textContent = bidaiamota; 
      row.insertCell(1).textContent = zerbitzua;
      row.insertCell(2).textContent = bestebatzukIzena;
      row.insertCell(3).textContent = zerbitzuData;
      row.insertCell(4).textContent = zerbitzuDeskribapena;
      row.insertCell(5).textContent = zerbitzuPrezioa;
  
      // Errenkada berria gehitu ondoren, ikusgai jartzen da bere estiloa ezarriz
      document.getElementById('taula-container-bestebatzuk').style.display = 'block';
      // Taulari datuak gehitu ondoren, sarrera-formularioa berrezarri egiten da
      document.getElementById('zerbitzuForm').reset();
    }
  
    //----------------- Formularioaren datuak gordetzeko funtzioa-----------------//
  
    //Formularioa lortzen da bere ID-a bilatuz.
    const zerbitzuForm = document.getElementById('zerbitzuForm');
    // Formularioa badago, funtzioa exekutatuko duen submit ekitaldirako event listener bat gehitzen da.
    if (zerbitzuForm) {
      zerbitzuForm.addEventListener('submit', function(event) {
        // Formularioan aurrez zehaztutako ekintza prebenitzen da (orria berriz kargatzea).s
        event.preventDefault();
        
        // Aukeratutako zerbitzua eskuratu (hegaldia, ostatua edo bestekideak)
        const zerbitzuHautatuta = document.querySelector('input[name="ID_Bidaiak"]:checked');
  
        //Zerbitzu bat hautatu dela egiaztatzen da
        if (!zerbitzuHautatuta) {
          alert('Mesedez, hautatu zerbitzu mota bat.');
          return;
        }
        
        // Hautatutako zerbitzuaren arabera, dagokion funtziora deitu
        if (zerbitzuHautatuta.value === 'hegaldia') {
          // Hegaldietarako, gainera, hegaldi mota egiaztatu behar da (Joan edo Joan/Etorri)
          const hegaldiMota = document.querySelector('input[name="hegaldiMota"]:checked');
          //Hegaldi mota bat hautatu dela egiaztatzen da
          if (!hegaldiMota) {
            alert('Mesedez, hegaldi mota hautatu.');
            return;
          }
          // Balioa "joan" bada, funtzioari deitzen zaio joaneko hegaldia prozesatzeko.
          if (hegaldiMota.value === 'joan') {
            gordeFormularioHegaldia(event);
          } 
          // Balioa "joanetorri" bada, funtzioari deitzen zaio joaneko hegaldia prozesatzeko.
          else if (hegaldiMota.value === 'joanetorri') {
            gordeFormularioHegaldiaBuelta(event);
          }
        } 
        // Balioa "ostatua" bada, funtzioari deitzen zaio joaneko hegaldia prozesatzeko.
        else if (zerbitzuHautatuta.value === 'ostatua') {
          gordeFormularioOstatua(event);
        } 
        // Balioa "bestebatzuk" bada, funtzioari deitzen zaio joaneko hegaldia prozesatzeko.
        else if (zerbitzuHautatuta.value === 'bestebatzuk') {
          gordeFormularioBestebatzuk(event);
        }
      });
    } 
  
    //----------------- Login formularioaren datuak egiaztatzeko funtzioa-----------------//
  
    // Erabiltzaileen array-a izenarekin eta pasahitzekin
    const users = [
      ['admin', 'admin', 'MUGAGABE'],
      ['agentzia1', 'agentzia1', 'CEIBO'],
      ['agentzia2', 'agentzia2', 'QUALIA']
    ];
  
    //Formularioa lortzen da bere ID-a bilatuz.
    const loginForm = document.getElementById('loginForm');
    
    //Formularioa existitzen bada, funtzioa exekutatzen da.
    if (loginForm) {
      loginForm.addEventListener('submit', function(event) {
        // Formularioan aurrez zehaztutako ekintza prebenitzen da (orria berriz kargatzea).
        event.preventDefault(); 
  
        // Elementuak hautatzen dira
        const erabiltzailea = document.getElementById('erabiltzailea').value;
        const pasahitza = document.getElementById('pasahitza').value;
  
        //Erabiltzailea baliozkoa den egiaztatzeko aldagai bat abiaraziko dugu
        let erabiltzaileAurkitu = false;
        let agentziaLogeatuta = '';
  
        //Array-en array-a zeharkatzen duen "for bukle" bat, eta erabiltzaileak sartu duena konparatzen da. Bat badator, "userFound" aldatu eta true bihurtzen da.
        for (let i = 0; i < users.length; i++) {
          const user = users[i];
          // Egiaztatu erabiltzailea, pasahitza eta agentzia bat datozela
          if (user[0] === erabiltzailea && user[1] === pasahitza) {
            erabiltzaileAurkitu = true;
            // Agentziaren izena hartzen du
            agentziaLogeatuta = user[2]; 
            break;
          }
        }
        //Erabiltzailea aurkitzen bada, orri nagusira birbideratuko da
        if (erabiltzaileAurkitu) {
          // Agentziaren izena localStorage-en gorde beste orri batzuetan erabiltzeko
          localStorage.setItem('agentziaIzena', agentziaLogeatuta);
          // Birbideratu orri nagusira
          window.location.href = 'orrinagusia.html';
        } 
        //Erabiltzailea aurkitzen ez bada, errore mezu bat ageriko da
        else {
          // Errore-mezua erakutsi datuak zuzenak ez badira
          document.getElementById("errore_mezua").style.display = "block";
        }
      });
    }
  
    //----------------- Agentziaren izena errakusteko funtzioa -----------------//
  
    function erakutsiAgentziaIzena() {
      // LocalStorage-n gordetako agentziaren izena lortu
      const agentziaIzena = localStorage.getItem('agentziaIzena');
      
      if (agentziaIzena) {
        // Bistaratu agentziaren izena "agentziaBistaratu" IDa duen elementuan
        const agentziaBistaratu = document.getElementById('agentziaBistaratu');
        if (agentziaBistaratu) {
          agentziaBistaratu.textContent = agentziaIzena;
        }
      }
    }
  
    // Deitu funtziora agentziaren izena bistaratzeko
    erakutsiAgentziaIzena();
  
  });