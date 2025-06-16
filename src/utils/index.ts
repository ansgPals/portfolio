export const getFileName = (src: string) => {
  const file = src.split("/").pop() || "";
  return file.replace(/\.(png|jpg|jpeg|gif|svg)$/i, "");
};
