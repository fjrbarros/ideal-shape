import { AppContainer, Carousel } from "@components";
import { trainers, TEAM_ID, TEAM_SECTION } from "@constants";
import * as Styles from "./OurTrainersSection.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

interface ISocialLink {
  type: "facebook" | "twitter" | "instagram" | "linkedin";
  iconUrl: string;
}

interface ITranerCardProps {
  name: string;
  job: string;
  imageUrl: string;
  socialLinks: ISocialLink[];
}

const getSocialIcon = (type: string) => {
  switch (type) {
    case "facebook":
      return faFacebook;
    case "twitter":
      return faTwitter;
    case "instagram":
      return faInstagram;
    case "linkedin":
      return faLinkedin;
    default:
      return faFacebook;
  }
};

const Card = ({ name, job, imageUrl, socialLinks }: ITranerCardProps) => (
  <Styles.CardWrapper>
    <Styles.CardContainer>
      <Styles.ImageContainer>
        <Styles.CardImg $imageUrl={imageUrl} />
      </Styles.ImageContainer>
      <Styles.CardInfo>
        <Styles.CardTrainerName>{name}</Styles.CardTrainerName>
        <Styles.CardTrainerFuncion>{job}</Styles.CardTrainerFuncion>
        <Styles.CardTrainerDescription>
          Atua no perido das 14:00 - 18:00
        </Styles.CardTrainerDescription>
        <Styles.CardIcons>
          {socialLinks.map(({ type, iconUrl }) => (
            <Styles.CardIcon key={type}>
              <Styles.CardIconLink href={iconUrl} target="_blank">
                <FontAwesomeIcon icon={getSocialIcon(type)} />
              </Styles.CardIconLink>
            </Styles.CardIcon>
          ))}
        </Styles.CardIcons>
      </Styles.CardInfo>
    </Styles.CardContainer>
  </Styles.CardWrapper>
);

const items = trainers.map((trainer) => (
  <Card
    key={trainer.name}
    name={trainer.name}
    job={trainer.job}
    imageUrl={trainer.imageUrl}
    socialLinks={trainer.socialLinks as ISocialLink[]}
  />
));

export const OurTrainersSection = () => {
  return (
    <AppContainer id={TEAM_ID} backgroundColor="#1e1e1e">
      <Styles.Title>{TEAM_SECTION}</Styles.Title>
      <Carousel items={items} />
    </AppContainer>
  );
};
