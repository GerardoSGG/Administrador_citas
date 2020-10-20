import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";
function App() {
  //Citas in local storage
  //Get all the local storage converted in JSON because is a string and I need a array
  let citasIniciales = JSON.parse(localStorage.getItem("citas"));
  if (!citasIniciales) {
    citasIniciales = [];
  }

  //array the citas
  //next in the useState put the result the get the storage
  const [citas, guardarCitas] = useState(citasIniciales);
  //use effect is to make tasks when the state change is a listener
  useEffect(() => {
    if (citasIniciales) {
      localStorage.setItem("citas", JSON.stringify(citas));
    } else {
      localStorage.setItem("citas", JSON.stringify([]));
    }
  }, [citas,citasIniciales]);
  //next the } put the variable to evalue in the change

  //function to take the actuality citas and add the new cita
  const crearCita = (cita) => {
    guardarCitas([...citas, cita]);
  };

  //funtion to delete a cita accord with the id
  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter((cita) => cita.id !== id);
    guardarCitas(nuevasCitas);
  };

  //conditional mesagge to the title the second row
  const titulo =
    citas.length === 0 ? "No hay citas pendientes" : "Administra tus citas";
  return (
    <Fragment>
      <h1 align="center">Administrador pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map((cita) => (
              <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
