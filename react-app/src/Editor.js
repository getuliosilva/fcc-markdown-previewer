import "./global.css"

function Editor(props) {
  return (
    <textarea id="editor" className="w-100 border border-1 border-dark text-break p-3" onChange={props.handleEditor}>
      {props.editorContent}
    </textarea>
  );
}

export default Editor;
