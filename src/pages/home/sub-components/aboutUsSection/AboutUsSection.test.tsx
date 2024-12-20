import { screen } from '@testing-library/react';
import { AboutUsSection } from './AboutUsSection';
import {
  about_us_mission,
  about_us_mission_description,
  ABOUT_US_TITLE,
  about_us_vision,
  about_us_vision_description,
} from '@constants';
import { customRender } from '@utils';

describe('AboutUsSection', () => {
  it('renders the About Us title', () => {
    customRender(<AboutUsSection />);
    const title = screen.getByText(ABOUT_US_TITLE);
    expect(title).toBeInTheDocument();
  });

  it('renders the About Us description', () => {
    customRender(<AboutUsSection />);

    const description = screen.getByText(
      /bem\-vindo à somos mais do que uma academia; somos um espaço dedicado ao seu bem\-estar, saúde e qualidade de vida\. localizados no centro de içara \- sc, estamos comprometidos em oferecer um ambiente acolhedor, com infraestrutura moderna e profissionais qualificados para atender às suas necessidades\. desde a nossa fundação, há 8 anos atrás, buscamos inspirar nossos alunos a superarem seus limites e alcançarem seus objetivos, sejam eles relacionados à saúde, condicionamento físico ou estilo de vida\. nosso time de profissionais é formado por especialistas em educação física e áreas correlatas, prontos para orientar você em cada etapa da sua jornada\./i,
    );

    expect(description).toBeInTheDocument();
  });

  it('renders the mission title and description', () => {
    customRender(<AboutUsSection />);
    const missionTitle = screen.getByText(about_us_mission);
    const missionDescription = screen.getByText(about_us_mission_description);
    expect(missionTitle).toBeInTheDocument();
    expect(missionDescription).toBeInTheDocument();
  });

  it('renders the vision title and description', () => {
    customRender(<AboutUsSection />);
    const visionTitle = screen.getByText(about_us_vision);
    const visionDescription = screen.getByText(about_us_vision_description);
    expect(visionTitle).toBeInTheDocument();
    expect(visionDescription).toBeInTheDocument();
  });
});
