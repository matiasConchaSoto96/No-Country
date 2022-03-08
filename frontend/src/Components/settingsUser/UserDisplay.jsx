import React, {useState} from 'react';
import "./userDisplay.css";

export default function UserDisplay() {
  const [userEdit, setUserEdit] = useState(false);

  return(
    <div className="user-display">
      {/* Este div user-editable, podría ser un componente */}
      <div className="user-editable">
        {/* Aquí podría haber una img del perfil, de momento los dejo pendiente */}
        {/* <img src="" alt="" /> */}
        <p className="user-name">Nombre Completo</p>
        {/* El nickname de momento sera solo el nombre, sin el apellido */}
        <p className="user-nickname">Nickname</p> 
        {/* <div className="btn-editable-container">
          <p className="pencil-svg">✏</p>
          
        </div> */}
        <button className="btn-editable-container btn-render" onClick={() => setUserEdit(true)}>
          {/* <small className="pencil-svg">Svg</small> */}
          <p className="pencil-svg">✏</p>
          <hr />
          <small className="align-self">Editar</small>
        </button>
      </div>
      {userEdit ? (
        <form className="user-edit-form">
        {/* uef = user edit form */}
        {/* <div className="uef-userName-container">
          <small>Nombre de usuario</small>
          <input name="userName" type="text" value="Nombre de usuario" />
        </div> */}
        <div className="uef-name-container">
          <label htmlFor="name">Nombre</label>
          <input id="name" name="name" type="text" required />
        </div>
        <div className="uef-lastName-container">
          <label htmlFor="lastName">Apellidos</label>
          <input id="lastName" name="lastName" type="text" required />
        </div>
        <div className="uef-name-container">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required />
        </div>
        <div className="uef-password-container">
          <div className="uef-password">
            <label htmlFor="password">Contraseña</label>
            <input id="password" name="password" type="password" required />
          </div>
          <div className="uef-confirm-password">
            <label htmlFor="confirm">Confirmar</label>
            <input id="confirm" name="confirmPassword" type="password" required />
          </div>
        </div>
        <div className="uef-show-password flex-center">
          <input id="uef-checkbox" name="showPassword" type="checkbox" required />
          <label htmlFor="uef-checkbox">Mostrar contraseña</label>
        </div>
        <div className="uef-btn-container">
          <input name="uef-btnSubmit" type="button" value="Confirmar" onClick={() => setUserEdit(false)} />
          <input name="uef-btnCancel" type="button" value="Cancelar" onClick={() => setUserEdit(false)} />
        </div>
      </form>
      ) : (
        <div className="user-info">
        {/* Posibilidad a futuro */}
        {/* <div className="info-content">
          <small>Nombre de usuario</small>
          <p>Nombre de usuario</p>
        </div> */}
        <div className="info-content">
          <small>Nombre</small>
          <p>Nombre</p>
        </div>
        <div className="info-content">
          <small>Apellidos</small>
          <p>Apellido</p>
        </div>
        <div className="info-content">
          <small>Email</small>
          <p>Email</p>
        </div>
      </div>
      )}
    </div>
  );
}