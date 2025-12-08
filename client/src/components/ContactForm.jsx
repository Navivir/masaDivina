import { useState } from "react";
import "../styles/form.css";
import { Textarea, TextInput, Button } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Enviando...");


    const templateParams = {
      name: name,
      email: email,
      message: message,
      time: new Date().toLocaleString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };


    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then((response) => {
      console.log("Éxito:", response);
      setStatus("Correo enviado correctamente ✅");
      setEmail("");
      setMessage("");
      setName("");
    })
    .catch((err) => {
      console.error("Error completo:", err);
      setStatus("Error al enviar correo ❌");
    });
  };

  return (
    <div className="full-screen-form">
      <form
        className="w-full max-w-md flex flex-col items-center justify-center gap-4 backgroundHelp"
        onSubmit={handleSubmit}
      >
        <div className="w-full text-center">
          <TextInput
            id="name"
            name="name"
            type="text"
            placeholder="Tu nombre"
            required
            sizing="lg"
            className="input-cust"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="w-full text-center">
          <TextInput
            id="email4"
            name="email"
            type="email"
            icon={HiMail}
            placeholder="tucorreo@gmail.com"
            required
            sizing="lg"
            className="input-cust"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="w-full text-center">
          <Textarea
            id="comment"
            name="message"
            placeholder="Escribenos..."
            required
            rows={8}
            sizing="lg"
            className="textarea-cust"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <Button type="submit" className="button-cust">
          Enviar
        </Button>
        <p
          className={`mt-2 ${
            status.includes("Error") ? "text-red-500" : "text-white"
          }`}
        >
          {status}
        </p>
      </form>
    </div>
  );
}