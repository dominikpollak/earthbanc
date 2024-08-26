"use client";

import Button from "@/src/components/global/Button";
import GoBack from "@/src/components/global/GoBack";
import { createTodo } from "@/src/services/todo";
import { PageHeading } from "@/src/styles/common";
import { DescriptionInput, HeaderInput } from "@/src/styles/inputs";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";
import styled from "styled-components";
import { colors } from "../constants/colors";

const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CreateTodo = () => {
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const taskName = formData.get("taskName") as string;
    const taskDescription = formData.get("taskDescription") as string;

    try {
      await createTodo({
        title: taskName,
        body: taskDescription,
      });
      router.push("/");
      toast.success("Task created successfully");
    } catch (error) {
      toast.error("Failed to create task");
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <GoBack href="/" style={{ marginRight: "auto" }} />
      <PageHeading>Create Task</PageHeading>
      <HeaderInput
        type="text"
        placeholder="Task Name"
        name="taskName"
        required
      />
      <DescriptionInput
        placeholder="Task Description"
        name="taskDescription"
        rows={8}
        required
      />
      <Button
        label="Create"
        type="submit"
        color={colors.secondary}
        style={{ marginTop: "10px" }}
      />
    </FormContainer>
  );
};

export default CreateTodo;
