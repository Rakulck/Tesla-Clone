import React from "react";
import styled from "styled-components";
import Section from "./Section";
function Home() {
  return (
    <Container>
      <Section
        model="Model S"
        backgroundImg="model-s.jpg"
        description="Order Online for Touchless Delivery"
        leftbtnText="Custom Order"
        rightbtnText="Existing Inventory"
      />
      <Section
        model="Model Y"
        backgroundImg="model-y.jpg"
        description="Order Online for Touchless Delivery"
        leftbtnText="Custom Order"
        rightbtnText="Existing Inventory"
      />
      <Section
        model="Model 3"
        backgroundImg="model-3.jpg"
        description="Order Online for Touchless Delivery"
        leftbtnText="Custom Order"
        rightbtnText="Existing Inventory"
      />
      <Section
        model="Model X"
        backgroundImg="model-x.jpg"
        description="Order Online for Touchless Delivery"
        leftbtnText="Custom Order"
        rightbtnText="Existing Inventory"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
