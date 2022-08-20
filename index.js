let mytable = document.querySelector("#table");
fetch("products.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (products) {
    let table = document.createElement("table");
    //console.log("yo");
     for (i = 0; i < products.length; i++) {
      let headerRow = document.createElement("tr");
      let row1 = document.createElement("tr");
      label: for (j = 0; j < products[i].length; j++) {
        //console.log(`j= ${products[i].indexOf("daily_energy")}`);
        let heading = document.createElement("th");
        //console.log(`i=${i} and j=${j}`);
        if (i === 0 && j === products[0].indexOf("daily_energy")) {
          // console.log("loop");
          // console.log(`index =${j}`);
          console.log(products[i][j]);
          let colSpan = document.createElement("th");
          colSpan.setAttribute("colspan", "3");
          colSpanData = document.createTextNode("Power Factor");
          colSpan.appendChild(colSpanData);
          headerRow.appendChild(colSpan);
          for (k = j; k < j + 3; k++) {
            subSec = document.createElement("th");
            subSecData = document.createTextNode(products[i][j]);
            subSec.appendChild(subSecData);
            row1.appendChild(subSec);
            //console.log(`before removing ${products[i][j]}`);
            products[i].splice(j, 1);
            // console.log(`after removing ${products[i][j]}`);
          }
        }
        if (i == 0 && j == products[i].indexOf("idle_daily")) {
          console.log(`$ yo=${products[i][j]}`);
          let colSpan = document.createElement("th");
          colSpan.setAttribute("colspan", "3");
          colSpanData = document.createTextNode("IDLE TIME");
          colSpan.appendChild(colSpanData);
          headerRow.appendChild(colSpan);

          for (k = j; k < j + 3; k++) {
            subSec = document.createElement("th");
            subSecData = document.createTextNode(products[i][j]);
            subSec.appendChild(subSecData);
            row1.appendChild(subSec);
            console.log(`before removing ${products[i][j]}`);
            products[i].splice(j, 1);
            console.log(`after removing ${products[i][j]}`);
          }

          break label;
        }
        if(i==0){
          
            console.log(`i==0 ${products[i][j]}`);
            let header = document.createElement("th");
            header.setAttribute("rowspan", "2");
            let headerData = document.createTextNode(products[i][j]);
            header.appendChild(headerData);
            headerRow.appendChild(header);
            table.appendChild(headerRow);
            table.appendChild(row1);
        }
        else{
        headingdata = document.createTextNode(products[i][j]);
        heading.appendChild(headingdata);
        headerRow.appendChild(heading);}
      }
      table.appendChild(headerRow);
      table.appendChild(row1);
    }
    mytable.appendChild(table);
  })
  .catch((err) => {
    console.log(err);
    alert(err);
  });
