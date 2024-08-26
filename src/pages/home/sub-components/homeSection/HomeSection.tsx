import * as Styles from "./HomeSection.styles";

export const HomeSection = () => {
  return (
    <Styles.HomeContainer>
      <Styles.AppContainer>
        <Styles.Wrapper>
          <Styles.Title1>PRONTO PARA TREINAR</Styles.Title1>
          <Styles.Title2>SEU CORPO</Styles.Title2>
          <Styles.Subtitle>
            O treinamento na academia é uma abordagem estrutural e disciplinada
            ao exercício físico que se concentra na força, na resistência e na
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
        </Styles.Wrapper>
      </Styles.AppContainer>
    </Styles.HomeContainer>
  );
};
