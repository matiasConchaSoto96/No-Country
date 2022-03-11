import React, {useState} from 'react';
import "./userDisplay.css";

export default function UserDisplay({ user }) {
  const [userEdit, setUserEdit] = useState(false);

  return(
    <div className="user-display">
      {/* Este div user-editable, podría ser un componente */}
      <div className="user-editable">
        {/* Aquí podría haber una img del perfil, de momento los dejo pendiente */}
        {/* <img src="" alt="" /> */}
        <p className="user-name">{ user.name }</p>
        {/* El nickname de momento sera solo el nombre, sin el apellido */}
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
          <input 
          id="name" 
          name="name" 
          type="text" 
          value={ user.name }
          required />
        </div>
        <div className="uef-name-container">
          <label htmlFor="email">Email</label>
          <input 
          id="email" 
          name="email" 
          type="email" 
          value={ user.email }
          required />
        </div>
        <div className="uef-password-container">
          <div className="uef-password">
            <label htmlFor="password">Contraseña</label>
            <input 
            id="password" 
            name="password" 
            type="password" 
            
            value={ user.password }
            required />
          </div>
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
          <p>{ user.name }</p>
        </div>
        <div className="info-content">
          <small>Email</small>
          <p>{ user.email }</p>
        </div>
      </div>
      )}
    </div>
  );
}