import { CONTACT_PHONE } from '@constants';
import type { IContactForm } from 'pages/home/sub-components/contactSection/ContactForm';

export const mountWhatsappUrl = (values: IContactForm) => {
  let whatsappUrl = `https://wa.me/${CONTACT_PHONE}/?text=`;
  const message = encodeURIComponent(
    `Nome: ${values.name}\nE-mail: ${values.email}\nMensagem: ${values.message}`,
  );

  whatsappUrl += message;

  return whatsappUrl;
};
