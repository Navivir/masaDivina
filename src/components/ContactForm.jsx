import "../styles/form.css";

import { Label, Textarea, TextInput, Button } from "flowbite-react";
import { HiMail } from "react-icons/hi";

export default function ContactForm() {
  return (
    <div className="full-screen-form">
      <form className="w-full max-w-md flex flex-col items-center justify-center gap-4 backgroundHelp">
        <div className="w-full text-center">
          <Label htmlFor="email4" className="input-label">
            Tu email
          </Label>
          <TextInput
            id="email4"
            type="email"
            icon={HiMail}
            placeholder="tucorreo@gmail.com"
            required
            sizing="lg"
            className="input-cust"
            
          />
        </div>

        <div className="w-full text-center">
          <Label htmlFor="comment" className="input-label">
            Tu mensaje
          </Label>
          <Textarea
            id="comment"
            placeholder="Escribenos..."
            required
            rows={5}
            sizing="lg"
            className="textarea-cust"
          />
        </div>

        <Button type="submit" className="button-cust">
          Send Message
        </Button>
      </form>
    </div>
  );
}
