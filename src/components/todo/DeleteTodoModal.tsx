import { deleteTodo } from "@/src/services/todo";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Modal from "../global/Modal";
import { PageSubHeading, RowBetween } from "@/src/styles/common";
import Button from "../global/Button";
import { colors } from "@/src/app/constants/colors";

interface Props {
  onClose: () => void;
  id: number;
}

const DeleteTodoModal = ({ onClose, id }: Props) => {
  const router = useRouter();
  const handleDelete = async () => {
    onClose();
    try {
      await deleteTodo(id);
      router.push("/");
      toast.success("Todo deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete todo");
    }
  };

  return (
    <Modal onClose={onClose} minWidth="100%">
      <PageSubHeading>
        Are you sure you want to delete this todo?
      </PageSubHeading>
      <RowBetween>
        <Button
          onClick={onClose}
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
  );
};

export default DeleteTodoModal;
