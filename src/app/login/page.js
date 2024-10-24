import Link from "next/link";
import "./login.css"

export default function HomeSchool() {
  return (
    <div className="modal-login">
      <form className="form-modal-login">
      <div className="title-form-modal-login">
        <label className="text-form-modal-login">Iniciar Sesión</label>
      </div>
      <div className="email-form-modal-login">
        <input id="email" className="input-email-form-modal-login" name="Correo-electrónico" placeholder="Correo electrónico" required></input>
      </div>
      <div className="password-form-modal-login">
      <input id="password" className="input-password-form-modal-login" type="password" name="password-correo-electrónico" placeholder="Contraseña" required></input>
      </div>
      <div className="link-register-form-modal-login">
        <Link href={"/register"} className="text-link-register-form-modal-login">¿No tienes cuenta?</Link>
      </div>
      <button className="btn-login-form-modal-login" type="submit">
        Ingresar
      </button>
      </form>
    </div>
  );
}
