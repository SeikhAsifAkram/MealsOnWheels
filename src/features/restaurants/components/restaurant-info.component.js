import React from "react";
import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Image } from "react-native";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[1]};
  padding-bottom: ${(props) => props.theme.space[1]};
  margin-right: ${(props) => props.theme.space[1]};
  flex: 1;
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const SectionEnd = styled.View`
  flex-direction: row;
  align-items: center;
  gap: ${(props) => props.theme.space[3]};
`;

const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const TempoClosed = styled.Text`
  color: ${(props) => props.theme.colors.ui.red};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Flexbox = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = ["https://picsum.photos/700"],
    address = "Some Random Address",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.ceil(rating)));

  return (
    <>
      <RestaurantCard elevation={5}>
        <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
        <Info>
          <Title>{name}</Title>
          <Flexbox>
            <Rating>
              {ratingArray.map(() => (
                <SvgXml xml={star} width={16} height={16} />
              ))}
            </Rating>
            <SectionEnd>
              {isClosedTemporarily && (
                <TempoClosed>Closed Temporarily</TempoClosed>
              )}
              {isOpenNow && <SvgXml xml={open} height={20} width={20} />}
              <Image source={{ uri: icon }} height={20} width={20} />
            </SectionEnd>
          </Flexbox>
          <Address>{address}</Address>
        </Info>
      </RestaurantCard>
    </>
  );
};
