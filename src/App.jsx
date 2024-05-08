import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { updateMarkdown } from "./features/markdown/markdownSlice";
import { marked } from "marked";

function App() {
  const markdown = useSelector((state) =>
    marked.parse(state.markdown.markdown)
  );
  const dispatch = useDispatch();

  const handleUpdateMarkdown = (e) => {
    // console.log(e.target.value);
    dispatch(updateMarkdown(e.target.value));
  };

  return (
    <div id="body">
      <div>
        <textarea id="input-area" onChange={handleUpdateMarkdown} />
      </div>
      <div id="markdown-area" dangerouslySetInnerHTML={{ __html: markdown }} />
    </div>
  );
}

export default App;
