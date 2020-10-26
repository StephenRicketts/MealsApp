import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          {
            props.navigation.navigate({
              routeName: "CategoryMeals",
              params: {
                categoryId: itemData.item.id,
              },
            });
          }
        }}
      />
    );
  };

  CategoriesScreen.navigationOptions = {
    headerTitle: "Meal Categories",
  };

  return (
    <View>
      <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoriesScreen;
