import { useState } from "react";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Styles from "./ContactSection.styles";
import { mountWhatsappUrl, validateContactForm } from "@utils";
import { CONTACT_FORM_TITLE } from "@constants";

export interface IContactForm {
  name: string;
  email: string;
  message: string;
}

const defaultValues: IContactForm = {
  name: "",
  email: "",
  message: "",
};

interface ICustomInput {
  type?: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const CustomInput = ({
  type = "text",
  name,
  placeholder,
  value,
  onChange,
}: ICustomInput) => (
  <Styles.FormGroup>
    <Styles.FormField
      autoComplete="one-time-code"
      type={type}
      id={name}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
    <Styles.FormLabel htmlFor={name}>{placeholder}</Styles.FormLabel>
  </Styles.FormGroup>
);

export const ContactForm = () => {
  const [values, setValues] = useState(defaultValues);
  const [errors, setErrors] = useState(defaultValues);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const _errors: any = {};
    validateContactForm(values, (field, text) => {
      _errors[field] = text;
    });
    setErrors(_errors);
    if (Object.keys(_errors).length) return;
    const whatsappUrl = mountWhatsappUrl(values);
    window.open(whatsappUrl, "_blank");
    setValues(defaultValues);
  };

  return (
    <Styles.FormBox id="contact-form">
      <Styles.Form onSubmit={handleSubmit}>
        <Styles.FormTitle>{CONTACT_FORM_TITLE}</Styles.FormTitle>
        <Styles.InputBox>
          <CustomInput
            name="name"
            placeholder="Nome"
            onChange={handleChange}
            value={values.name}
          />
          {!!errors.name && (
            <Styles.InputError>{errors.name}</Styles.InputError>
          )}
        </Styles.InputBox>
        <Styles.InputBox>
          <CustomInput
            name="email"
            placeholder="E-mail"
            onChange={handleChange}
            value={values.email}
          />
          {!!errors.email && (
            <Styles.InputError>{errors.email}</Styles.InputError>
          )}
        </Styles.InputBox>
        <Styles.InputBox>
          <CustomInput
            name="message"
            placeholder="Sua mensagem"
            onChange={handleChange}
            value={values.message}
          />
          {!!errors.message && (
            <Styles.InputError>{errors.message}</Styles.InputError>
          )}
        </Styles.InputBox>
        <Styles.Submit type="submit">
          <span>Enviar</span>
          <FontAwesomeIcon icon={faWhatsapp} />
        </Styles.Submit>
      </Styles.Form>
    </Styles.FormBox>
  );
};
