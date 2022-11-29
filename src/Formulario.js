import React, {useState} from "react";
import { Formik } from "formik";
const Formulario = () => {
  const [formularioEnviado, setFormularioEnviado] = useState(false);
  return (
    <>
      <Formik
        initialValues={{ nombre: "", correo: "" }}
        validate={(valores) => {
          let errores ={};

          //validar el nombre del usuario
          if(!valores.nombre){
              errores.nombre = "El nombre es obligatorio test";
          }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
            errores.nombre = "el nombre no puede tener numeros";
          }

          //validar el correo
          if(!valores.correo){
            errores.correo = "El correo es obligatorio test";
        }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
          errores.correo = "el correo no es valido";
        }


          return errores;
        }}
        onSubmit={(valores, {resetForm}) => {
          resetForm();
          console.log(valores);
          setFormularioEnviado(true);
          setTimeout(() => setFormularioEnviado(false), 3000);
        }}
      >
        {({ handleSubmit, errors, touched, values, handleChange, handleBlur }) => (
          <form className="formulario" onSubmit={handleSubmit}>
  
            <div>
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="John Doe"
                value={values.nombre}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              
              {touched.nombre && errors.nombre && <div className="error">{errors.nombre}</div>}
            </div>
            <div>
              <label htmlFor="nombre">Correo</label>
              <input
                type="text"
                id="correo"
                name="correo"
                placeholder="correo@correo.com"
                value={values.correo}
                onChange={handleChange}
                onBlur={handleBlur}
              />
               {touched.correo && errors.correo && <div className="error">{errors.correo}</div>}
            </div>
            <button type="submit">Enviar</button>
            {formularioEnviado &&<p className="exito">Formulario enviado con exito</p>}
          </form>
        )}
      </Formik>
    </>
  );
};

export default Formulario;
