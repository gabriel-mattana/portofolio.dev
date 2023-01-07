import React, {useState} from "react";


let ContentDisplayerInstance;

class ContentDisplayer extends React.Component {

    constructor()
    {
        super();
        console.log("Content displayer created");
        ContentDisplayerInstance = ContentDisplayerInstance || this; 
        this.state = {content:<h1>Empty</h1>}
    }

    UpdateContent(props)
    {
        this.setState({content: <h1>{props}</h1>});
    }

   render() {

    return <main id="content-displayer">Content Displayer 
            {this.state.content}
            </main>;
  }
}

export {ContentDisplayerInstance};
export default ContentDisplayer;
