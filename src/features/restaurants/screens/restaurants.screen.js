import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../components/restaurant-info.component";
import styled from "styled-components";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

const SearchBar = styled(Searchbar)`
  border-radius: ${(props) => props.theme.sizes[0]};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export default function RestaurantsScreen() {
  return (
    <SafeArea>
      <SearchContainer>
        {/* <Text style={styles.text}>Search</Text> */}
        <SearchBar />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantInfo />
      </RestaurantListContainer>
    </SafeArea>
  );
}
