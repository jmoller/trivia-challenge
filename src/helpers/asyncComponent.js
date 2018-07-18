import React, {Component} from 'react';

/**
   * HOC
   * Function that takes a function and returns a component
   * The async part happends in the importComponent() function that gets passed in the initial call of the
   * asyncComponent function
   * 
   * @param {importComponent} function - this function is the one that loads our component
   * @public
   */
const asyncComponent = (importComponent) => {
    return class extends Component {
        state = {
            component: null
        }

        componentDidMount() {
            importComponent()
                .then(cmp => {
                    this.setState({component: cmp.default});
                });
        }

        render() {
            const Cmp = this.state.component;
            return Cmp ? <Cmp {...this.props}/> : null;
        }
    }
};

export default asyncComponent;