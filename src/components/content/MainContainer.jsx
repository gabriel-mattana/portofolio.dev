import React from "react";


let MainContainerInstance;

class MainContainer extends React.Component {

    constructor()
    {
        super();
        console.log("main container created");
        MainContainerInstance = MainContainerInstance || this; 

        this.state = {
            content:<h1>Empty</h1>,
        }
    }

    UpdateContent(props)
    {
        this.setState({content: props});
    }

   render() {

    return <main id="main-container">page Displayer 
            {this.state.content}
            </main>;
  }
}

export {MainContainerInstance};
export default MainContainer;
