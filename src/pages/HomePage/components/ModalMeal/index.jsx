import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../../store/modal/actions";
import { ContainerModal, Modal } from "./style";
import { AnimatePresence, motion } from "framer-motion";

const ModalMeal = () => {
  const { content, isActive } = useSelector((state) => state.modal);
  const { name, price, img, description } = content;

  const dispatch = useDispatch();

  return (
    <AnimatePresence>
      {isActive && (
        <ContainerModal>
          <motion.div
            initial={{ opacity: 0, x: 500, scale: 0.5 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 500, scale: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <Modal>
              <button onClick={() => dispatch(closeModal())}>X</button>
              <h4>{name}</h4>
              <p>R$ {price}</p>
              <img src={img} alt="Image Meal" />
              <p>{description}</p>
            </Modal>
          </motion.div>
        </ContainerModal>
      )}
    </AnimatePresence>
  );
};

export default ModalMeal;
