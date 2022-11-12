import * as React from "react";

export default function SinglePost({ post }: any) {
  return (
    <>
      <h3>UserName {post.userName}</h3>
      <img style={''} src="https://placebear.com/300/300" {...post.imageURL} alt="" />
      <p>Description {post.description}</p>
    </>
  );
}