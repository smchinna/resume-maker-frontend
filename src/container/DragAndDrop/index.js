import React from 'react';
import Dropzone from "react-dropzone";

import { DragUI, FullWidth, PreviewUI } from './styles';

class Draggable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
    };
  }

  updateFile = (file) => {
    let dupFile = this.state.files;
    dupFile.push(file);
    this.setState({
      files: dupFile
    });
  }

  onPreviewDrop = (files) => {
    for(let i=0; i<files.length;i++) {
      let reader = new FileReader();
      reader.readAsDataURL(files[i]);
      reader.onloadend = () => {
        let obj = {
          name: files[i].name,
          src: reader.result
        }
        this.updateFile(obj)
      };
    }
  }

  DraggableUIFunc = () => {
    return (
      <Dropzone onDrop={acceptedFiles => this.onPreviewDrop(acceptedFiles)} accept={"image/*"} >
        {({ getRootProps, getInputProps }) => (
          <DragUI {...getRootProps()} className="dragUI">
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
          </DragUI>
        )}
      </Dropzone>
    )
  }

  previewUIFunc = () => {
    const { files } = this.state;
    return (
      <div className="previewUI">
        {files.map((file) => (
          <PreviewUI>
            <div className="title">
              {file.name}
            </div>
            <img
              alt="Preview"
              key={file.name}
              src={file.src}
            />
          </PreviewUI>
        ))}
      </div>
    )
  }

  clearState = () => {
    this.setState({
      files: []
    })
  }

  render() {
    return (
      <FullWidth>
        <button onClick={() => this.clearState()}>Clear</button>
        {this.DraggableUIFunc()}
        {this.previewUIFunc()}
      </FullWidth>
    );
  }
}

export default Draggable