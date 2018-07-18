import React from "react";
import { shallow, mount } from "enzyme";
import Home from "./Home";

describe("Home", () => {
  const home = mount(<Home />);

  it("displays a h1 tag showing the page title", () => {
    expect(
      home
        .find("h1")
        .exists()
    ).toBeTruthy();
  });

  it("has a title with the text `Welcome to the trivia challenge`", () => {
    expect(
      home
        .find("h1")
        .text()
    ).toEqual("Welcome to the trivia challenge");
  });

  it("displays two paragraphs in the home screen", () => {
    expect(
      home
        .find("p").length
    ).toEqual(2);
  });

  it("has one pagaraph with the text `You will be presented with 10 true or false questions`", () => {
   
    expect(
      home
        .find("p")
        .first()
        .text()
    ).toEqual("You will be presented with 10 true or false questions");
  });

  it("has one pagaraph with the text `Can you score 100%?`", () => {
    expect(
      home
        .find("TextBox").find('div')
        .childAt(1)
        .text()
    ).toEqual("Can you score 100%?");
  });

  
});
