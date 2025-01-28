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
  const herrialdea = document.getElementById('herrilaldea').value;
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





document.addEventListener('DOMContentLoaded', () => {
    // Maneja la selección del tipo de servicio
    const serviceRadios = document.getElementsByName('zerbitzumota');
    serviceRadios.forEach(radio => {
        radio.addEventListener('change', handleServiceTypeChange);
    });

    // Maneja el envío del formulario
    document.getElementById('zerbitzuForm').addEventListener('submit', saveServiceForm);

    // Muestra el bloque correspondiente al tipo de servicio seleccionado
    function handleServiceTypeChange() {
        const hegaldiaBlock = document.getElementById('hegaldiaBlokea');
        const ostatuaBlock = document.getElementById('ostatuaBlokea');
        const bestebatzukBlock = document.getElementById('bestebatzukBlokea');

        hegaldiaBlock.style.display = 'none';
        ostatuaBlock.style.display = 'none';
        bestebatzukBlock.style.display = 'none';

        if (this.value === 'hegaldia') {
            hegaldiaBlock.style.display = 'block';
        } else if (this.value === 'ostatua') {
            ostatuaBlock.style.display = 'block';
        } else if (this.value === 'bestebatzuk') {
            bestebatzukBlock.style.display = 'block';
        }
    }

    // Guarda el formulario en la tabla
    function saveServiceForm(event) {
        event.preventDefault();

        // Variables comunes
        const bidaiamota = document.getElementById('bidaiamota').value;
        const serviceType = document.querySelector('input[name="zerbitzumota"]:checked').value;

        let rowData = `<td>${bidaiamota}</td><td>${serviceType}</td>`;

        // Datos específicos del tipo de servicio
        if (serviceType === 'hegaldia') {
            const hegaldiMota = document.querySelector('input[name="hegaldiMota"]:checked').value;
            const jatorrizkoAireportua = document.getElementById('jatorrizkoAireportua').value;
            const helmugakoAireportua = document.getElementById('helmugakoAireportua').value;
            const hegaldiKodea = document.getElementById('hegaldiKodea').value;
            const airelinea = document.getElementById('airelinea').value;
            const hegaldiPrezioa = document.getElementById('hegaldiPrezioa').value;
            const irteeraData = document.getElementById('irteeraData').value;
            const irteeraOrdua = document.getElementById('irteeraOrdua').value;
            const bidaiIraupena = document.getElementById('bidaiIraupena').value;

            rowData += `
                <td>${hegaldiMota}</td>
                <td>${jatorrizkoAireportua}</td>
                <td>${helmugakoAireportua}</td>
                <td>${hegaldiKodea}</td>
                <td>${airelinea}</td>
                <td>${hegaldiPrezioa}€</td>
                <td>${irteeraData}</td>
                <td>${irteeraOrdua}</td>
                <td>${bidaiIraupena}</td>`;
        } else if (serviceType === 'ostatua') {
            const hotelIzena = document.getElementById('hotelIzena').value;
            const hiriaOstatua = document.getElementById('hiriaOstatua').value;
            const ostatuaPrezioa = document.getElementById('ostatuaPrezioa').value;
            const ostatuaSarrera = document.getElementById('ostatuaSarrera').value;
            const ostatuaIrteera = document.getElementById('ostatuaIrteera').value;
            const ostatuaLogelea = document.getElementById('ostatuaLogelea').value;

            rowData += `
                <td>${hotelIzena}</td>
                <td>${hiriaOstatua}</td>
                <td>${ostatuaPrezioa}€</td>
                <td>${ostatuaSarrera}</td>
                <td>${ostatuaIrteera}</td>
                <td>${ostatuaLogelea}</td>`;
        } else if (serviceType === 'bestebatuk') {
            const bestebatukIzena = document.getElementById('bestebatukIzena').value;
            const zerbitzuData = document.getElementById('zerbitzuData').value;
            const zerbitzuDeskribapena = document.getElementById('zerbitzuDeskribapena').value;
            const zerbitzuPrezioa = document.getElementById('zerbitzuPrezioa').value;

            rowData += `
                <td>${bestebatukIzena}</td>
                <td>${zerbitzuData}</td>
                <td>${zerbitzuDeskribapena}</td>
                <td>${zerbitzuPrezioa}€</td>`;
        }

        // Añadir fila a la tabla
        const tableBody = document.getElementById('laburpen-taula');
        const row = document.createElement('tr');
        row.innerHTML = rowData;
        tableBody.appendChild(row);

        // Resetear formulario
        document.getElementById('zerbitzuForm').reset();

        // Ocultar bloques
        document.getElementById('hegaldiaBlokea').style.display = 'none';
        document.getElementById('ostatuaBlokea').style.display = 'none';
        document.getElementById('bestebatzukBlokea').style.display = 'none';
    }
});