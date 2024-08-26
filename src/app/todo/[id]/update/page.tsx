"use client";

import Button from "@/src/components/global/Button";
import GoBack from "@/src/components/global/GoBack";
import LoadingSkeleton from "@/src/components/skeletons/LoadingSkeleton";
import { updateTodo, useFetchTodoDetail } from "@/src/services/todo";
import { PageHeading } from "@/src/styles/common";
import { DescriptionInput, HeaderInput } from "@/src/styles/inputs";
import { notFound, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import styled from "styled-components";
import { colors } from "../../../constants/colors";

const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const UpdateTodo = ({ params: { id } }: { params: { id: string } }) => {
  const numId = parseInt(id);
  const router = useRouter();
  const query = useFetchTodoDetail(numId);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await updateTodo(numId, {
        title: name,
        body: description,
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
      {query.isLoading ? (
        <>
          <LoadingSkeleton width="622px" height="50px" margin="10px 0" />
          <LoadingSkeleton width="622px" height="198px" margin="10px 0" />
          <LoadingSkeleton
            width="105px"
            height="42px"
            margin="10px 0 0 0"
            borderRadius="4px"
          />
        </>
      ) : (
        <>
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
          <Button
            label="Update"
            type="submit"
            color={colors.secondary}
            style={{ marginTop: "10px" }}
          />
        </>
      )}
    </FormContainer>
  );
};

export default UpdateTodo;
