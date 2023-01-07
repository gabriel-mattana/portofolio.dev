import React, {useState} from "react";


let PageDisplayerInstance;

class PageDisplayer extends React.Component {

    constructor()
    {
        super();
        console.log("Content displayer created");
        PageDisplayerInstance = PageDisplayerInstance || this; 
        this.state = {
            content:<h1>Empty</h1>,
        }
    }

    UpdateContent(props)
    {
        this.setState({content: props});
    }

   render() {

    return <main id="page-displayer">page Displayer 
            {this.state.content}
            </main>;
  }
}

export {PageDisplayerInstance as ContentDisplayerInstance};
export default PageDisplayer;
