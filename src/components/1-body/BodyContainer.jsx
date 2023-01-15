import React from "react";

let Body_Instance;

class BodyContainer extends React.Component {

    constructor()
    {
        super();
        console.log("main container created");
        Body_Instance = Body_Instance || this; 

        this.state = {
            content:<h1>Empty</h1>,
        }
    }

    UpdateContent(props)
    {
        this.setState({content: props});
    }

   render() {

    return <main id="main-container">
            {this.state.content}
            </main>;
  }
}

export {Body_Instance};
export default BodyContainer;
