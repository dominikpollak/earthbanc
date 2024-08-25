"use client";

import Button from "@/src/components/global/Button";
import GoBack from "@/src/components/global/GoBack";
import Modal from "@/src/components/global/Modal";
import LoadingSkeleton from "@/src/components/skeletons/LoadingSkeleton";
import { deleteTodo, useFetchTodoDetail } from "@/src/services/todo";
import { PageSubHeading, Row, RowBetween } from "@/src/styles/common";
import { Pencil, Trash2 } from "lucide-react";
import { notFound, useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
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
  const router = useRouter();
  const numId = parseInt(id);
  const query = useFetchTodoDetail(numId);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleDelete = async () => {
    setShowDeleteModal(false);
    try {
      await deleteTodo(numId);
      router.push("/");
      toast.success("Todo deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete todo");
    }
  };

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
        <Modal onClose={() => setShowDeleteModal(false)} minWidth="100%">
          <PageSubHeading>
            Are you sure you want to delete this todo?
          </PageSubHeading>
          <RowBetween>
            <Button
              onClick={() => setShowDeleteModal(false)}
              label="Cancel"
              size="sm"
              color={colors.secondary}
            />
            <Button
              onClick={handleDelete}
              label="Delete"
              size="sm"
              color={colors.error}
            />
          </RowBetween>
        </Modal>
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
