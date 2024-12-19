import {
  MEMBERSHIP_CARDS,
  MEMBERSHIP_ID,
  MEMBERSHIP_TITLE,
  MEMBERSHIP_SECTION_SUBTITLE_1,
  MEMBERSHIP_SECTION_SUBTITLE_2,
} from '@constants';
import * as Styles from './OurMembershipSection.styles';
import { AppContainer, CheckList } from '@components';

export const OurMembershipSection = () => {
  return (
    <AppContainer id={MEMBERSHIP_ID} backgroundColor="#000000">
      <Styles.Title>{MEMBERSHIP_TITLE}</Styles.Title>
      <Styles.Subtitle>
        {MEMBERSHIP_SECTION_SUBTITLE_1}
        <br />
        {MEMBERSHIP_SECTION_SUBTITLE_2}
      </Styles.Subtitle>
      <Styles.MembershipCardContainer>
        {MEMBERSHIP_CARDS.map((card) => (
          <Styles.MembershipCard key={card.title}>
            <Styles.MembershipCardTitle>{card.title}</Styles.MembershipCardTitle>
            <Styles.MembershipCardSubtitle>
              <Styles.MembershipCardSubtitlePrice>{card.price}</Styles.MembershipCardSubtitlePrice>
              <Styles.MembershipCardSubtitlePeriod>
                {card.period}
              </Styles.MembershipCardSubtitlePeriod>
            </Styles.MembershipCardSubtitle>
            <Styles.Divider />
            <Styles.List>
              {card.items.map((text) => (
                <CheckList key={text} text={text} />
              ))}
            </Styles.List>
          </Styles.MembershipCard>
        ))}
      </Styles.MembershipCardContainer>
    </AppContainer>
  );
};
