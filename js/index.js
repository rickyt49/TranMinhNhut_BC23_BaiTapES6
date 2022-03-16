document.querySelector("#signup-form .actions ul li:last-child a").onclick =
  function () {
    let btn = document.querySelector(
      "#signup-form .actions ul li:last-child a"
    );
    if (btn.innerHTML.toLowerCase().trim() === "finish") {
      var arrInput = document.querySelectorAll(
        ".fieldset-content input, .fieldset-content select"
      );
      console.log("arrInput", arrInput);
      let patient = {};
      for (let input of arrInput) {
        let { id, value } = input;
        patient = { ...patient, [id]: value };
      }

      let contentHTML = "";
      for (let key in patient) {
        contentHTML += `
            <tr>
                <td>${key}</td>
                <td>${patient[key]}</td>
            </tr>
            
          `;
      }
      console.log(contentHTML);
      document.querySelector("#tblPatient").innerHTML = contentHTML;
    }
  };
