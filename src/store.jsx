import { configureStore } from "@reduxjs/toolkit";
import markdownReducer from "./features/markdown/markdownSlice";

export default configureStore({
  reducer: {
    markdown: markdownReducer,
  },
});
