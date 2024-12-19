import { AppContainer } from "@components";
import * as Styles from "./AboutUsSection.styles";
import {
  about_us_description,
  ABOUT_US_ID,
  about_us_mission,
  about_us_mission_description,
  ABOUT_US_TITLE,
  about_us_vision,
  about_us_vision_description,
} from "@constants";

export const AboutUsSection = () => (
  <AppContainer id={ABOUT_US_ID} backgroundColor="#101010">
    <Styles.Title>{ABOUT_US_TITLE}</Styles.Title>
    <Styles.Description
      dangerouslySetInnerHTML={{ __html: about_us_description }}
    />

    <Styles.Title>{about_us_mission}</Styles.Title>
    <Styles.Description>{about_us_mission_description}</Styles.Description>

    <Styles.Title>{about_us_vision}</Styles.Title>
    <Styles.Description>{about_us_vision_description}</Styles.Description>
  </AppContainer>
);
