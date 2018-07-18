//@flow
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTrivia } from "../redux/trivia/actions";

//Sylte
import AppHolder from "./App.style";
import TextBox from "../components/uielements/textbox";

// Components
import Home from "../components/Home/Home";
import Quiz from "../components/Quiz/Quiz";
import Results from "../components/Results/Results";
import Loader from "react-loader-spinner";

// Utilities
import functions from "../helpers/functions";
const Entities = require("html-entities").XmlEntities;
const entities = new Entities();

type State = {
  // The current question being displayed
  currentQuestion:
    | { question: string, correct_answer: boolean, category: string }
    | any,
  //  The current question number being displayed
  currentQuestionNumber: number,
  // The current screen, can be `Home`, `Quiz`, `Results`
  currentScreen: string,
  // Array with the results of the user answers
  results: Array<{ isCorrect: boolean, question: string }>,
  // Background color being displayed
  backgroundColor: string
};

type Props = {
  /** action to start the fetch process*/
  fetchTrivia: () => {},
  /** object that holds the questions to display*/
  questions: {},
  /** error variable to store any posible error message */
  error: string,
  /** loading flag, true if it's loading, false otherwise */
  _loading: boolean
};

class App extends Component<Props, State> {
  state = {
    currentQuestion: { question: "", correct_answer: "", category: "" },
    currentQuestionNumber: 0,
    currentScreen: "Home",
    results: [],
    backgroundColor: "#F03969"
  };

  componentDidMount() {
    this.props.fetchTrivia();
  }

  /**
   * Handler for the begin button -
   * Sets the current question in the state to the first question in the questions object
   * @public
   */
  onBeginClick = () => {
    let { questions } = this.props;
    const currentQuestion = questions[0];
    const currentQuestionNumber = this.state.currentQuestionNumber + 1;
    this.setState({
      currentQuestion,
      currentScreen: 'Quiz',
      backgroundColor: '#2693d1',
      currentQuestionNumber 
    });
  };

  /**
   * Handler for the true and false button
   * If there are questions, sets the current question to the next in the state
   * Sets the current screen to Results otherwise
   * @param {answer} - boolean
   * @public
   */
  onTrueFalseClickHandler = (answer, event) => {
    let { currentQuestion, currentQuestionNumber } = this.state;
    const { questions } = this.props;
    const answerObj = {
      question: entities.decode(currentQuestion.question),
      isCorrect: functions.toBool(currentQuestion.correct_answer) === answer
    };
    if (currentQuestionNumber >= Object.keys(questions).length) {
      // We reach the end of the questions
      this.setState({
        currentScreen: "Results",
        results: [...this.state.results, answerObj],
        backgroundColor: "#FFD749"
      });
    } else {
      const nextQuestion = questions[currentQuestionNumber];

      this.setState({
        results: [...this.state.results, answerObj],
        currentQuestion: nextQuestion,
        currentQuestionNumber: currentQuestionNumber + 1
      });
    }
  };

  /**
   * Handler for the play again button
   * Sets the state to its initial phase
   * @public
   */
  playAgainHandler = () => {
    this.setState({
      currentQuestion: { question: "", correct_answer: "", category: "" },
      currentQuestionNumber: 0,
      currentScreen: "Home",
      results: [],
      backgroundColor: "#F03969"
    });
  };

  render() {
    const { currentScreen, results } = this.state;
    let { error, _loading } = this.props;
    let screen;

    if (!error) {
      if (!_loading) {
        if (currentScreen === "Home") {
          screen = <Home onBeginClick={this.onBeginClick} />;
        } else if (currentScreen === "Quiz") {
          screen = (
            <Quiz
              onTrueFalseClickHandler={this.onTrueFalseClickHandler}
              currentQuestion={this.state.currentQuestion}
              currentQuestionNumber={this.state.currentQuestionNumber}
            />
          );
        } else {
          screen = (
            <Results
              correctAnswers={
                this.state.results.filter(r => r.isCorrect).length
              }
              playAgainHandler={this.playAgainHandler}
              results={results}
            />
          );
        }
      } else {
        screen = (
          <Loader type="TailSpin" color="#FFD749" height="100" width="100" />
        );
      }
    } else {
      screen = (
        <TextBox>
          <p>Ops! There seems to be an error: {error}</p>
        </TextBox>
      );
    }
    return (
      <AppHolder backgroundColor={this.state.backgroundColor}>
        {screen}
      </AppHolder>
    );
  }
}

const mapStateToProps = state => {
  return {
    questions: state.TriviaReducer.results,
    error: state.TriviaReducer.error,
    _loading: state.TriviaReducer._loading
  };
};

export default connect(
  mapStateToProps,
  { fetchTrivia }
)(App);
