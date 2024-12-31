import { AppContainer } from "@components";
import * as Styles from "./OurProductsSection.styles";
import {
  products,
  PRODUCTS_ID,
  PRODUCTS_SUBTITLE,
  PRODUCTS_TITLE,
} from "@constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrazilianRealSign } from "@fortawesome/free-solid-svg-icons";

interface IProductProps {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPrice: number;
  imageUrl: string;
}

const ProductCard = ({
  title,
  description,
  price,
  discountPrice,
  imageUrl,
}: IProductProps) => {
  return (
    <Styles.Card>
      <Styles.CardImage>
        <img src={imageUrl} alt={title} />
      </Styles.CardImage>
      <Styles.CardInfo>
        <Styles.CardTitle>{title}</Styles.CardTitle>
        <Styles.CardDescription>{description}</Styles.CardDescription>
        <Styles.CardPriceRow>
          <Styles.PriceContainer>
            <Styles.CardPrice>
              <FontAwesomeIcon icon={faBrazilianRealSign} />
              {price}
            </Styles.CardPrice>
            <Styles.CardPrice $isDiscount>
              <FontAwesomeIcon icon={faBrazilianRealSign} />
              {discountPrice}
            </Styles.CardPrice>
          </Styles.PriceContainer>
          <Styles.CardButton>Nos contate</Styles.CardButton>
        </Styles.CardPriceRow>
      </Styles.CardInfo>
    </Styles.Card>
  );
};

export const OurProductsSection = () => {
  return (
    <AppContainer id={PRODUCTS_ID} backgroundColor="#000000">
      <Styles.Title>{PRODUCTS_TITLE}</Styles.Title>
      <Styles.Subtitle>{PRODUCTS_SUBTITLE}</Styles.Subtitle>
      <Styles.CardGrid data-testid="product-cards">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </Styles.CardGrid>
    </AppContainer>
  );
};
