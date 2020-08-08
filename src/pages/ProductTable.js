import React from 'react';
import {ProductCategoryRow} from "./ProductCategoryRow";
import {ProductRow} from "./ProductRow";
import _ from 'lodash';

export const ProductTable = (props) => {
  const category = _.groupBy(props.products, 'category');
  console.log(category);
  const categoryList = [];
  for(let key in category) {
    categoryList.push(
      <ProductCategoryRow category={key} key={key}></ProductCategoryRow>
    )
    category[key].forEach(item =>
      categoryList.push(
        <ProductRow name={item.name}
                    price={item.price}
                    stocked={item.stocked}
                    key={item.name}></ProductRow>
      )

    )
  }
  return (
    <table>
      <thead>
      <tr>
        <th>Name</th>
        <th>Price</th>
      </tr>
      </thead>
      <tbody>
      {categoryList}
      {/*
      <ProductCategoryRow></ProductCategoryRow>
      <ProductRow></ProductRow>
      <ProductRow></ProductRow>
      <ProductRow></ProductRow>

      <ProductCategoryRow></ProductCategoryRow>
      <ProductRow></ProductRow>
      <ProductRow></ProductRow>
      <ProductRow></ProductRow>
      */}
      </tbody>
    </table>
  );
}