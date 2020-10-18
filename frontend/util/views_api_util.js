export const createView = view => {
  // debugger
  return $.ajax({
    method: "POST",
    url: "/api/views",
    data: { view }
  });
};