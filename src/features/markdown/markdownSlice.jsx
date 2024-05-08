import { createSlice } from "@reduxjs/toolkit";

export const markdownSlice = createSlice({
  name: "markdown",
  initialState: {
    input: "",
    markdown: "",
  },
  reducers: {
    updateMarkdown: (state, action) => {
      state.markdown = action.payload;
    },
  },
});

export const { updateMarkdown } = markdownSlice.actions;

export default markdownSlice.reducer;
