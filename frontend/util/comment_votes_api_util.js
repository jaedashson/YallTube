export const createCommentVote = commentVote => {
  // debugger
  return $.ajax({
    method: "POST",
    url: "/api/comment_votes",
    data: { comment_vote: commentVote }
  });
};

export const destroyCommentVote = commentVote => {
  // debugger
  return $.ajax({
    method: "DELETE",
    url: "/api/comment_votes",
    data: { comment_vote: commentVote }
  });
};