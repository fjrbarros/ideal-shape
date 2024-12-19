import * as Styles from "./OurSpaceSection.styles";
import IdeadSpace1 from "../../../../assets/ideal-space-1.jpg";
import IdeadSpace2 from "../../../../assets/ideal-space-2.jpg";
import IdeadSpace3 from "../../../../assets/ideal-space-3.jpg";
import { OUR_SPACE_ID, OUR_SPACE_TITLE, ourSpaceItems } from "@constants";
import { AppContainer, CheckList } from "@components";

export const OurSpaceSection = () => {
  return (
    <AppContainer id={OUR_SPACE_ID} backgroundColor="#1e1e1e">
      <Styles.Title>{OUR_SPACE_TITLE}</Styles.Title>
      <Styles.ContainerFlex>
        <Styles.ImageContainer>
          <Styles.Image src={IdeadSpace3} alt="space1" />
          <Styles.Image2 src={IdeadSpace2} alt="space2" />
          <Styles.Image3 src={IdeadSpace1} alt="space3" />
        </Styles.ImageContainer>
        <Styles.ListContainer>
          <Styles.List>
            {ourSpaceItems.map((text) => (
              <CheckList key={text} text={text} />
            ))}
          </Styles.List>
        </Styles.ListContainer>
      </Styles.ContainerFlex>
    </AppContainer>
  );
};
