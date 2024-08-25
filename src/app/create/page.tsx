"use client";

import GoBack from "@/src/components/global/GoBack";
import { createTodo } from "@/src/services/todo";
import { PageHeading } from "@/src/styles/common";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";
import styled from "styled-components";
import { media } from "../constants/breakpoints";
import { colors } from "../constants/colors";

const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: ${colors.secondary};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${colors.primary};
  }
`;

const HeaderInput = styled.input`
  margin: 10px 0;
  padding: 10px;
  width: 100%;
  max-width: 600px;
  border: 1px solid ${colors.neutralGrey};
  background-color: white;
  color: ${colors.text};
  border-radius: 4px;
  font-size: 1.2rem;
  ${media.tablet} {
    font-size: 1.5rem;
  }
`;

const DescriptionInput = styled.textarea`
  margin: 10px 0;
  padding: 10px;
  width: 100%;
  max-width: 600px;
  border: 1px solid ${colors.neutralGrey};
  background-color: white;
  color: ${colors.text};
  border-radius: 4px;
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
      <Button type="submit">Create</Button>
    </FormContainer>
  );
};

export default CreateTodo;
