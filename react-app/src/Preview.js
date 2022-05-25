import "./global.css"

import { marked } from "marked"

function Preview(props) {

  marked.setOptions({
    gfm: true,
    breaks: true
  })

  const htmlString = marked.parse(props.markdownText)
  return (
    <div
      id="preview"
      dangerouslySetInnerHTML={{ __html: htmlString }} 
      className="content-row w-100 border border-1 border-dark text-break p-3 overflow-scroll"
    />
  );
}

export default Preview;