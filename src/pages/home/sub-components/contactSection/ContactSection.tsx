import { AppContainer } from "@components";
import {
  CONTACT_ID,
  CONTACT_INFO,
  CONTACT_TITLE,
  contactInfo,
} from "@constants";
import * as Styles from "./ContactSection.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ContactForm } from "./ContactForm";

export const ContactSection = () => {
  return (
    <AppContainer id={CONTACT_ID} backgroundColor="#1e1e1e">
      <Styles.Title>{CONTACT_TITLE}</Styles.Title>

      <Styles.Content>
        <Styles.ContactInfo>
          <Styles.FormTitle>{CONTACT_INFO}</Styles.FormTitle>
          {contactInfo.map((info) => (
            <Styles.Box key={info.title}>
              <Styles.Icon>
                <FontAwesomeIcon icon={info.icon} />
              </Styles.Icon>
              <Styles.Text>
                <Styles.FormTitle>{info.title}</Styles.FormTitle>
                <p dangerouslySetInnerHTML={{ __html: info.description }} />
              </Styles.Text>
            </Styles.Box>
          ))}
        </Styles.ContactInfo>
        <ContactForm />
      </Styles.Content>
    </AppContainer>
  );
};
