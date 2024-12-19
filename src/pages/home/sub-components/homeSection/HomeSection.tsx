import { HOME_ID } from "@constants";
import * as Styles from "./HomeSection.styles";

export const HomeSection = () => {
  return (
    <Styles.AppContainer id={HOME_ID}>
      <Styles.Wrapper>
        <Styles.Title1>PRONTO PARA TREINAR</Styles.Title1>
        <Styles.Title2>SEU CORPO</Styles.Title2>
        <Styles.Subtitle>
          O treinamento na academia é uma abordagem estrutural e disciplinada ao
          exercício físico que se concentra na força, na resistência e na
          melhoria geral do condicionamento físico.
        </Styles.Subtitle>

        <Styles.FlexContainer>
          <Styles.FlexItem>
            <Styles.CountInfo>20+</Styles.CountInfo>
            <Styles.CountText>Anos de experiência</Styles.CountText>
          </Styles.FlexItem>
          <Styles.Divider />

          <Styles.FlexItem>
            <Styles.CountInfo>15K+</Styles.CountInfo>
            <Styles.CountText>Alunos</Styles.CountText>
          </Styles.FlexItem>
          <Styles.Divider />

          <Styles.FlexItem>
            <Styles.CountInfo>14K+</Styles.CountInfo>
            <Styles.CountText>Clientes satisfeitos</Styles.CountText>
          </Styles.FlexItem>
        </Styles.FlexContainer>
        <Styles.HourWrapper>
          <Styles.HourTitle>Horários</Styles.HourTitle>
          <Styles.HourText>
            Segunda a Sexta: <span>05:00 - 22:00</span>
          </Styles.HourText>
          <Styles.HourText>
            Sábado: <span>09:00 - 15:00</span>
          </Styles.HourText>
          <Styles.HourText>
            Domingos e Feriados: <span>08:00 - 11:00</span>
          </Styles.HourText>
        </Styles.HourWrapper>
      </Styles.Wrapper>
    </Styles.AppContainer>
  );
};
