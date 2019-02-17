import React from 'react';
import Flex, { FlexItem } from 'styled-flex-component';
 
export default () => (
  <Flex center full>
    <FlexItem order="2">World</FlexItem>
    <FlexItem order="1">Hello</FlexItem>
  </Flex>
);