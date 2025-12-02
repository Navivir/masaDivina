import { useState } from "react";
import "../styles/form.css";
import { Label, Textarea, TextInput, Button } from "flowbite-react";
import { HiMail } from "react-icons/hi";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Enviando...");

    try {
      const res = await fetch("http://localhost:3001/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();
      if (data.ok) {
        setStatus("Correo enviado correctamente ✅");
        setEmail("");
        setMessage("");
        setName("");
      } else {
        setStatus("Error al enviar correo: " + data.error);
      }
    } catch (err) {
      setStatus("Error de conexión: " + err.message);
    }
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
