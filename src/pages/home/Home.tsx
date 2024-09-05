import { Header, ScrollToTopButton } from "@components";
import { HomeSection, OurSpaceSection } from "./sub-components";

export const HomePage = () => {
  return (
    <>
      <Header />
      <HomeSection />
      <OurSpaceSection />
      <ScrollToTopButton />
    </>
  );
};
