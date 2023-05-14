import React from "react";
import styled from "styled-components/native";
import { Card } from "react-native-paper";

const RestaurantCard = styled(Card)`
  background-color: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
  background-color: white;
  padding: 16px;
`;

const Title = styled.Text`
  padding: 16px;
  color: ${(props) => props.theme.colors.ui.primary};
`;

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Random Restaurant",
    icon,
    photos = ["https://picsum.photos/700"],
    address = "Some Random Address",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <>
      <RestaurantCard elevation={5}>
        <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
        <Title>{name}</Title>
      </RestaurantCard>
    </>
  );
};
