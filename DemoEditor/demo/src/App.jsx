import { useRef } from 'react'
import Editor from '@monaco-editor/react';
import './App.css'

function App() {
  return (
    <>
      <CodeEditor></CodeEditor>
    </>
  )
};

const CodeEditor = () => {
  const editorRef = useRef(null);

  function handleEditorDidMount(editor) {
    editorRef.current = editor;
    console.log('Editor mount succeeded');
  }

  function getEditorValue() {
    const value = editorRef.current?.getValue();
    console.log('Editor content:', value);
    return value;
  }

  const sendCodeSample = async () => {
    const code = getEditorValue()
    try {
      const response = await fetch('http://localhost:9000/api/submitCode', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ codeSample: {code}}),
      });
      const result = await response.json();
      console.log('PUT request (submitCode) returned:', result.status);
      if (result.status == "received") {
        console.log("out", result.out, "err", result.err);
      }

    } catch(error) {
      console.error('PUT request (submitCode) failed:', error);
    }
  };
  
  return (
    <>
      <Editor
        height='500px'
        width='500px'
        defaultLanguage='python'
        defaultValue='// Start coding here!'
        theme='vs-dark'
        onMount={handleEditorDidMount}
      />
      <button onClick={sendCodeSample}>Run!</button>
    </>
  );
};

export default App
