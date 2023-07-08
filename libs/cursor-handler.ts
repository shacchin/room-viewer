// NOTE 必要に応じて追加していく
type CursorStyle = "grabbing";

export const addCursorStyle = (cursorStyle: CursorStyle) => {
  document.body.style.cursor = `${cursorStyle}`;
};

export const removeCursorStyle = () => {
  document.body.style.cursor = "";
};
