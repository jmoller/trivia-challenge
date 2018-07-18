import React from "react";
import { shallow, mount } from "enzyme";
import configureStore from "redux-mock-store";

import App from "./App";
import Home from "../components/Home/Home";
import Quiz from "../components/Quiz/Quiz";
import Results from "../components/Results/Results";


const questions = [
  {
    category: "General Knowledge",
    type: "boolean",
    difficulty: "hard",
    question:
      "Unturned originally started as a Roblox game.",
    correct_answer: "True",
    incorrect_answers: ["False"]
  },
  {
    category: "Entertainment: Comics",
    type: "boolean",
    difficulty: "hard",
    question:
      "In the comic book &quot;Archie&quot;, Betty is friends with Veronica because she is rich.",
    correct_answer: "False",
    incorrect_answers: ["True"]
  }
]
const mockStore = configureStore();
const store = mockStore({TriviaReducer:{
  results: questions
}});

describe("App", () => {
  const mockFn = jest.fn();
  const props = { fetchTriviaQuestions: mockFn, questions, error: "" };
  const app = mount(<App {...props} store={store}  />);
  

  it("renders correctly", () => {
    expect(app).toMatchSnapshot();
  });

  it("should have questions are being passed bya props", () => {
    expect(app.instance().props.questions.length).toEqual(2);
  });

  describe("There is no current question to show", () => {
    it("displays Home component", () => {
      expect(app.find(Home).exists()).toBeTruthy();
    });
  });

  describe("User clicks on the begin button", () => {
    let wrapper = "";
    let instance = '';
    let appComponent = '';
    beforeEach(() => {
      wrapper = mount(<App store={store}  questions={questions} error={""} />);
      appComponent = wrapper.find("App");
      wrapper.find("Button").simulate("click");
      
    });

    it("updates the current screen in app state", () => {
      expect(appComponent.instance().state.currentScreen).toEqual("Quiz");
    });
    
    it("updates the current question to the first question", () => {
      expect(appComponent.instance().state.currentQuestion).toEqual(questions[0]);
    });

    it("renders the quiz component", () => {
      expect(wrapper.find(Quiz).exists()).toBeTruthy();
    });

    describe("user answers a question incorrectly", () => {
      let quiz = '';
      beforeEach(() => {
        wrapper.find('.btn-false').at(1).simulate('click');
      });

      it("saves the result in the state", () => {
        const answerObj = {
          question: "Unturned originally started as a Roblox game.",
          isCorrect: false
        };
        expect(appComponent.instance().state.results[0]).toEqual(answerObj);
      });

      it("updates the current question to the next question", () => {
        expect(appComponent.instance().state.currentQuestion).toEqual(questions[1]);
      });
    });

    describe("user answers a question correctly", () => {
      beforeEach(() => {
        wrapper.find('.btn-true').at(1).simulate('click');
      });

      it("saves the result in the state", () => {
        const answerObj = {
          question: "Unturned originally started as a Roblox game.",
          isCorrect: true
        };
        expect(appComponent.instance().state.results[0]).toEqual(answerObj);
      });

      it("updates the current question to the next question", () => {
        expect(appComponent.instance().state.currentQuestion).toEqual(questions[1]);
      });
    });

    describe("user answers last question", () => {
      beforeEach(() => {
        
        wrapper
          .find(Quiz)
          .find(".btn-false")
          .at(1)
          .simulate("click");
        wrapper
          .find(Quiz)
          .find(".btn-false")
          .at(1)
          .simulate("click");
      });

      it("changes the screen in the state to `result` screen", () => {
        expect(appComponent.instance().state.currentScreen).toEqual("Results");
      });

      it("displays the results component", () => {
        expect(wrapper.find(Results).exists()).toBeTruthy();
      });
    });

    describe("user click on the play again button", () => {
      beforeEach(() => {
        wrapper
          .find(Quiz)
          .find(".btn-false")
          .at(1)
          .simulate("click");
        wrapper
          .find(Quiz)
          .find(".btn-false")
          .at(1)
          .simulate("click");
        wrapper
          .find(Results)
          .find("button")
          .simulate("click");
      });

      it("changes the screen in the state to `Home`", () => {
        expect(appComponent.instance().state.currentScreen).toEqual("Home");
      });

      it("displays the home screen", () => {
        expect(wrapper.find(Home).exists()).toBeTruthy();
      });

      it("returns the state to its origin phase", () => {
        const initialState = {
          currentQuestion: {question: '', correct_answer: '', category: ''},
          currentQuestionNumber: 0,
          currentScreen: "Home",
          results: [],
          backgroundColor: '#F03969'
        };

        expect(appComponent.instance().state).toEqual(initialState);
      });
    });
  });
  
});

