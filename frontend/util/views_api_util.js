export const createView = view => {
  return $.ajax({
    method: "POST",
    url: "/api/views",
    data: { view }
  });
};