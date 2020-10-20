//import fragment for have the posibility of use more the one component in the return
import React, { Fragment, useState } from "react";
import shortid from 'shortid';
const Formulario = ({crearCita}) => {
  //create the state citas
  const [cita, actualizarCita] = useState({
    paciente: '',
    sexo: '',
    fecha: '',
    hora: '',
    sintomas: ''
  });
  //create the state to evaluate the error
  const [error, actualizarError] = useState(false);
  //function execute when the user write in the form
  const actualizarState = f => {
    actualizarCita({
        ...cita,             
                [f.target.name]:f.target.value
    })
  }
  //get the values to make the validation
  const { paciente, sexo, fecha, hora, sintomas } = cita;
  //this is the function when the user press the button "agregar cita"
  const submitCita = (e) => {
    //for make possible rewrite the event is necessary cancel the default even using this sentence
    e.preventDefault();
    //validation is the first step
    if (
      paciente.trim() === '' ||
      sexo.trim() === '' ||
      fecha.trim() === '' ||
      hora.trim() === '' ||
      sintomas.trim() === ''
    ) {
        console.log(error);
      actualizarError(true);
      console.log(error);
      console.log(cita);
      //this function is to remake the validation and don't execute the next line
      return;
    }
    actualizarError(false);
    //asign ID
    cita.id = shortid();
    //create cita
    crearCita(cita);
    //finally restatr the form
    actualizarCita({
      paciente: '',
      sexo: '',
      fecha: '',
      hora: '',
      sintomas: '' 
    })
  }
  return (
    <Fragment>
      <h2>Crear cita</h2>
      
      {
      //make the validation if all the fields have the information 
      //error is the variable to evaluate if is false or true if is true put in the screen the text
      error ? <p className="alerta-error">Todos los campos deben ser llenados</p>:null}
         
        <form
        //this event is to send the values, calling the function submitCita
        onSubmit={submitCita}
      >
        <label>Nombre del paciente</label>
        <input //For read the dates
          type="text"
          name="paciente"
          //usign skeleton framework this
          //property take all the space available
          className="u-full-width"
          //write the default text
          placeholder="Nombre paciente"
          onChange={actualizarState}
          value={paciente}
        />

        <label>Sexo del paciente</label>

        <input //For read the dates
          type="text"
          name="sexo"
          //usign skeleton framework this
          //property take all the space available
          className="u-full-width"
          //write the default text
          placeholder="Masculino o Femenino"
          onChange={actualizarState}
          value={sexo}
        />

        <label>Fecha de la cita</label>
        <input //For read the dates
          type="date"
          name="fecha"
          //usign skeleton framework this
          //property take all the space available
          className="u-full-width"
          onChange={actualizarState}
          value={fecha}
        />

        <label>Hora de la cita</label>
        <input //For read the dates
          type="time"
          name="hora"
          //usign skeleton framework this
          //property take all the space available for this row
          className="u-full-width"
          onChange={actualizarState}
          value={hora}
        />

        <label>Sintomas</label>
        <textarea
          className="u-full-width"
          name="sintomas"
          onChange={actualizarState}
          value={sintomas}
        ></textarea>

        <button type="submit" className="u-full-width button-primary">
          Agregar cita
        </button>
      </form>
    </Fragment>
  );
};

export default Formulario;
