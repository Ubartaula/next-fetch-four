"use client";

import { createUser } from "@/actions/createUser";
import { useRouter } from "next/navigation";
import { useState } from "react";

const FormCreateUser = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();
  return (
    <>
      <div aria-live="assertive">{errorMessage}</div>
      <form
        action={async (formData) => {
          const response = await createUser(formData);
          if (response?.error) {
            setErrorMessage(response.error);
          } else {
            setErrorMessage("");
            router.push("/users");
          }
        }}
      >
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="p-2 m-2 border border-gray-500"
        />
        <input
          type="text"
          name="email"
          placeholder="Email address"
          className="p-2 m-2 border border-gray-500"
        />
        <button className="p-2 m-2 border border-gray-400 rounded-lg text-center">
          Submit
        </button>
      </form>
    </>
  );
};

export default FormCreateUser;
