const isFetchComments = (target) => {
  const scrollHeight = Math.max(
    document.documentElement.scrollHeight,
    target.scrollHeight
  );
  const scrollTop = Math.max(
    document.documentElement.scrollTop,
    target.scrollTop
  );
  const clientHeight = document.documentElement.clientHeight;
  return scrollTop + clientHeight > scrollHeight - 100;
};

export { isFetchComments };
