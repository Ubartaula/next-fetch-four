"use client";
import { createPost } from "@/actions/createPost";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const FormCreatePost = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();
  const userId = "6645993dbb5ba37bce9f2ad6";
  return (
    <>
      <div aria-live="assertive">{errorMessage}</div>
      <form
        action={async (formData) => {
          const response = await createPost(formData);
          if (response?.error) {
            setErrorMessage(response.error);
          } else {
            setErrorMessage("");
            router.push("/posts");
          }
        }}
      >
        <input
          type="text"
          name="userId"
          placeholder="UserId"
          value={userId}
          readOnly
          className="p-2 m-2 border border-gray-500"
        />
        <input
          type="text"
          name="title"
          placeholder="post title"
          className="p-2 m-2 border border-gray-500"
        />
        <button className="p-2 m-2  border border-gray-400 rounded-lg text-center">
          Submit
        </button>
      </form>
    </>
  );
};

export default FormCreatePost;
