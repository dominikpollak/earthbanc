"use client";

import Button from "@/src/components/global/Button";
import GoBack from "@/src/components/global/GoBack";
import LoadingSkeleton from "@/src/components/skeletons/LoadingSkeleton";
import DeleteTodoModal from "@/src/components/todo/DeleteTodoModal";
import { useFetchTodoDetail } from "@/src/services/todo";
import { Row, RowBetween } from "@/src/styles/common";
import { Pencil, Trash2 } from "lucide-react";
import { notFound } from "next/navigation";
import { useState } from "react";
import styled from "styled-components";
import { colors } from "../../constants/colors";

const Header = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.2rem;
`;

const TodoDetailPage = ({ params: { id } }: { params: { id: string } }) => {
  const numId = parseInt(id);
  const query = useFetchTodoDetail(numId);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  if (isNaN(numId) || query.error) {
    return notFound();
  }

  if (query.isLoading) {
    return (
      <div>
        <RowBetween>
          <GoBack href="/" />
          <Row gap={10}>
            <LoadingSkeleton width="40px" height="34px" borderRadius="5px" />
            <LoadingSkeleton width="40px" height="34px" borderRadius="5px" />
          </Row>
        </RowBetween>
        <LoadingSkeleton
          height="2.5rem"
          width="80%"
          margin="30px 0"
          borderRadius="25px"
        />
        <LoadingSkeleton height="1.2rem" margin="0 0 0.6rem 0" />
        <LoadingSkeleton height="1.2rem" margin="0 0 0.6rem 0" />
        <LoadingSkeleton height="1.2rem" width="50%" />
      </div>
    );
  }

  return (
    <div>
      {showDeleteModal && (
        <DeleteTodoModal onClose={() => setShowDeleteModal(false)} id={numId} />
      )}
      <RowBetween>
        <GoBack href="/" />
        <Row gap={10}>
          <Button
            href={`/todo/${numId}/update`}
            label={<Pencil size={20} />}
            size="sm"
            color={colors.secondary}
          />
          <Button
            onClick={() => setShowDeleteModal(true)}
            label={<Trash2 size={20} />}
            size="sm"
            color={colors.error}
          />
        </Row>
      </RowBetween>
      <Header>{query.data?.title}</Header>
      <Description>{query.data?.body}</Description>
    </div>
  );
};

export default TodoDetailPage;
