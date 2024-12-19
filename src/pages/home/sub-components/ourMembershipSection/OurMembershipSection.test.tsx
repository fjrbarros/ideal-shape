import { screen } from '@testing-library/react';
import { OurMembershipSection } from './OurMembershipSection';
import { MEMBERSHIP_CARDS, MEMBERSHIP_TITLE } from '@constants';
import { customRender } from '@utils';

describe('OurMembershipSection', () => {
  it('renders the section title', () => {
    customRender(<OurMembershipSection />);
    expect(screen.getByText(MEMBERSHIP_TITLE)).toBeInTheDocument();
  });

  it('renders the section subtitles', () => {
    customRender(<OurMembershipSection />);
    expect(
      screen.getByText(
        /oferecemos uma variedade de planos de associação para atender às suas necessidades e orçamento\.escolha o plano que melhor se adapta a você e aproveite\./i,
      ),
    ).toBeInTheDocument();
  });

  it('renders all membership cards', () => {
    customRender(<OurMembershipSection />);
    for (const card of MEMBERSHIP_CARDS) {
      expect(screen.getAllByText(card.title)[0]).toBeInTheDocument();
      expect(screen.getAllByText(card.price)[0]).toBeInTheDocument();
      expect(screen.getAllByText(card.period)[0]).toBeInTheDocument();
      for (const item of card.items) {
        expect(screen.getAllByText(item)[0]).toBeInTheDocument();
      }
    }
  });
});
