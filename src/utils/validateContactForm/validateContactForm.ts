import type { IContactForm } from 'pages/home/sub-components/contactSection/ContactForm';

export const validateContactForm = (
  values: IContactForm,
  errorFn: (field: keyof typeof values, text: string) => void,
) => {
  const { name, email, message } = values;

  if (Object.prototype.hasOwnProperty.call(values, 'name')) {
    const regexFullName = /\w+\s+\w/;

    if (!name.trim()) {
      errorFn('name', 'Campo nome é obrigatório');
    } else if (!regexFullName.test(name)) {
      errorFn('name', 'Nome e sobrenome são obrigatórios');
    }
  }

  if (Object.prototype.hasOwnProperty.call(values, 'email')) {
    const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    if (!email.trim()) {
      errorFn('email', 'Campo e-mail é obrigatório');
    } else if (!regexEmail.test(email)) {
      errorFn('email', 'E-mail inválido');
    }
  }

  if (Object.prototype.hasOwnProperty.call(values, 'message')) {
    if (!message.trim()) {
      errorFn('message', 'Campo mensagem é obrigatório');
    }
  }
};
