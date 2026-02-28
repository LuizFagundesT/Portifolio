import { useState } from "react";
import { useTranslation } from "react-i18next";
import styleEmailContact from "../EmailContact/EmailContact.module.css";

export default function EmailContact() {
    const { t } = useTranslation();
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: ""
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(form);
  }

  return (
    <form 
      className={styleEmailContact.form} 
      onSubmit={handleSubmit}
    >
      <h2> {t("email.enviaEmail")} </h2>

      <div className={styleEmailContact.box_name_email}>
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={form.nome}
          onChange={handleChange}
          className={styleEmailContact.input_form}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className={styleEmailContact.input_form}
        />
      </div>

      <input 
        type="tel"
        name="telefone"
        placeholder="Telefone"
        value={form.telefone}
        onChange={handleChange}
        className={styleEmailContact.input_form}
      />

      <textarea
        name="mensagem"
        placeholder="Mensagem"
        value={form.mensagem}
        onChange={handleChange}
        className={styleEmailContact.input_form}
      />

      <button 
        type="submit" 
        className={styleEmailContact.button}
      >
        Enviar
      </button>

    </form>
  );
}