import React from "react";

import FetchMarkdown from "./FetchMarkdown";
import defaultMD from "../public/default.md";

export default class App extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      editor: defaultMD,
      convergedMD: null
    };
    this.editorUpdate = this.editorUpdate.bind(this);
  }

  editorUpdate(event) {
    this.setState({
      editor: event.target.value
    });
  }

  render() {
    return (
      <div>
        <div className="shadow-sm card ">
          <h4 className="text-center card-header">Markdown Editor</h4>
          <div>
            <textarea
              className="form-control"
              rows="8"
              id="editor"
              onChange={this.editorUpdate}
              value={this.state.editor}
            />
          </div>
        </div>
        <div className="shadow-sm card my-3">
          <h4 className="text-center card-header">Preview</h4>
          <div id="preview" className="card card-body">
            <FetchMarkdown input={this.state.editor} />
          </div>
        </div>
      </div>
    );
  }
}
