import "./global.css"

import Container from 'react-bootstrap/Container'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Editor from './Editor.js'
import Preview from './Preview.js'
import { useState } from "react"

function App() {

  const initialState = `# Markdown editor\n
## Edit this text on the left panel\n
## See the preview on the right panel\n
This editor uses GitHub markdown, to learn more check [the documentation](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax).\n
\`this is inline code\`\n
\`\`\`
this
is
a
code
block
\`\`\`
- This is a list item\n
> This is a quote\n
![This is an image](https://myoctocat.com/assets/images/base-octocat.svg)\n
**This is bold text**`
  const [editorContent, setEditorContent] = useState(initialState)

  function handleEditor(event){
    setEditorContent(event.target.value)
  }

  return (
    <Container fluid className="vh-100">
      <Row className="title-row text-center align-items-center">
        <Col>
          <h1>Markdown Previewer</h1>
        </Col>
      </Row>
      <Row className="content-row">
        <Col className="mx-1 h-100">
          <h2 className="title-row m-0 border text-center p-3">editor</h2>
          <Editor editorContent={editorContent} handleEditor={handleEditor}/>
        </Col>
        <Col className=" mx-1 h-100">
          <h2 className="title-row m-0 border text-center p-3">preview</h2>
          <Preview markdownText={editorContent}/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
