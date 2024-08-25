"use client";

import GoBack from "@/src/components/global/GoBack";
import { updateTodo, useFetchTodoDetail } from "@/src/services/todo";
import { PageHeading } from "@/src/styles/common";
import { notFound, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import styled from "styled-components";
import { media } from "../../../constants/breakpoints";
import { colors } from "../../../constants/colors";

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

const UpdateTodo = ({ params: { id } }: { params: { id: string } }) => {
  const numId = parseInt(id);
  const router = useRouter();
  const query = useFetchTodoDetail(numId);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const taskName = formData.get("taskName") as string;
    const taskDescription = formData.get("taskDescription") as string;

    try {
      await updateTodo(numId, {
        title: taskName,
        body: taskDescription,
      });
      router.push("/");
      toast.success("Task updated successfully");
    } catch (error) {
      toast.error("Failed to update task");
    }
  };

  useEffect(() => {
    if (query.data) {
      setName(query.data.title);
      setDescription(query.data.body);
    }
  }, [query.data]);

  if (isNaN(numId) || query.error) {
    return notFound();
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <GoBack href="/" style={{ marginRight: "auto" }} />
      <PageHeading>Update Task</PageHeading>
      <HeaderInput
        type="text"
        placeholder="Task Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        name="taskName"
        required
      />
      <DescriptionInput
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        name="taskDescription"
        rows={8}
        required
      />
      <Button type="submit">Update</Button>
    </FormContainer>
  );
};

export default UpdateTodo;
