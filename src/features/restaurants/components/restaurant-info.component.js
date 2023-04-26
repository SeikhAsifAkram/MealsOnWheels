import React from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { Card } from "react-native-paper";

const Title = styled.Text`
  padding: 10px;
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
      <Card elevation={5} style={styles.card}>
        <Card.Cover
          key={name}
          style={styles.cover}
          source={{ uri: photos[0] }}
        />
        <Card.Content>
          <Title>{name}</Title>
        </Card.Content>
      </Card>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
  },
  cover: {
    padding: 15,
    backgroundColor: "white",
  },
});
