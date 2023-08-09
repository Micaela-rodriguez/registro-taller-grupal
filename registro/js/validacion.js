

document.addEventListener("DOMContentLoaded", function () {
    const regBtn = document.getElementById("regBtn");
  
    regBtn.addEventListener("click", function () {
      const data = {
        nombre: document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value,
        email: document.getElementById("email").value,
        password1: document.getElementById("password1").value,
        password2: document.getElementById("password2").value
      };
  
      for (var key in data) {
        if (data[key] === "") {
          showAlertError("El campo " + key + " no puede estar vacío");
          return;
        }
      }
  
      if (data.password1.length < 6) {
        showAlertError("La contraseña debe tener al menos 6 caracteres");
        return;
      }
  
      if (data.password1 !== data.password2) {
        showAlertError("Las contraseñas no coinciden");
        return;
      }
  
      if (!document.getElementById("terminos").checked) {
        showAlertError("Debe aceptar los términos y condiciones del servicio");
        return;
      }
  
      showAlertSuccess("Los datos son válidos");
    });
  
    function showAlertSuccess(message) {
      const alertSuccess = document.getElementById("alert-success");
      alertSuccess.textContent = message;
      alertSuccess.classList.add("show");
    }
  
    function showAlertError(message) {
      const alertError = document.getElementById("alert-danger");
      alertError.textContent = message;
      alertError.classList.add("show");
    }
  })