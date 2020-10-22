export const createCommentVote = commentVote => {
  return $.ajax({
    method: "POST",
    url: "/api/comment_votes",
    data: { comment_vote: commentVote }
  });
};

export const destroyCommentVote = commentVote => {
  return $.ajax({
    method: "DELETE",
    url: "/api/comment_votes",
    data: { comment_vote: commentVote }
  });
};