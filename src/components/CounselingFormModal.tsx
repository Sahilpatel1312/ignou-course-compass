import CounselingForm from "./CounselingForm";

interface CounselingFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedCourse?: string;
  onFormSubmitted?: () => void;
}

const CounselingFormModal = ({ isOpen, onClose, preSelectedCourse, onFormSubmitted }: CounselingFormModalProps) => {
  return (
    <>
      <CounselingForm
        isOpen={isOpen}
        onClose={onClose}
        preSelectedCourse={preSelectedCourse}
        onFormSubmitted={onFormSubmitted}
      />
    </>
  );
};

export default CounselingFormModal;