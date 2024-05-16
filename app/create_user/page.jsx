import FormCreateUser from "@/components/FormCreateUser";
import React, { Suspense } from "react";

const CreateUserPage = () => {
  return (
    <div className="max-w-lg mx-auto p-4">
      <p className="p-4 text-center">Create User</p>
      <Suspense fallback={null}>
        <FormCreateUser />
      </Suspense>
    </div>
  );
};

export default CreateUserPage;
