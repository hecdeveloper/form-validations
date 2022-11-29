import React from "react";
import { Formik } from "formik";
const Formulario = () => {
  return (
    <>
      <Formik
        initialValues={{ nombre: "", correo: "" }}
        validate={(valores) => {
          let errores ={};
          if(!valores.nombre){
          errores.nombre = "El nombre es obligatorio";
          }
        }}
        onSubmit={(valores) => {
          console.log(valores);
        }}
      >
        {({ handleSubmit, errors, values, handleChange, handleBlur }) => (
          <form className="formulario" onSubmit={handleSubmit}>
            {console.log(errors)}
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
              {errors.nombre && <div className="error">{errors.nombre}</div>}
            </div>
            <div>
              <label htmlFor="nombre">Correo</label>
              <input
                type="text"
                id="correo"
                name="correo"
                placeholder="correo.@correo.com"
                value={values.correo}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <button type="submit">Enviar</button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default Formulario;
