import { useState } from 'react'
import Editor from '@monaco-editor/react';
import './App.css'

function App() {
  const [editorText, setEditorText] = useState("hello");

  return (
    <>
      <CodeEditor getInput={setEditorText}></CodeEditor>
    </>
  )
}

const CodeEditor = ({getInput}) => {
  const codeInput = (value) => {
    getInput(value);
  };
  const runCode = (e) => {
    
  }
  return (
    <>
      <Editor
        height="500px"
        width="1000px"
        defaultLanguage="python"
        defaultValue="// Start coding here!"
        theme="vs-dark"
        onChange={codeInput}
      />
      <button onChange={runCode}></button>
    </>
  );
};

export default App
