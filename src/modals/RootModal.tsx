import { FC, memo } from "react";
import { useSelector } from "react-redux";

import { ModalRoot } from "@vkontakte/vkui";
import { selectActiveModal } from "store/router/selectors/selectActiveModal";

import router from "init/router";
import { ModalIds } from "init/routerEnums";

import { PhotoPostModal } from "./PhotoPostModal/PhotoPostModal";

export const RootModal: FC = memo(() => {
  const activeModal = useSelector(selectActiveModal);
  const modalBack = () => router.closeModal();

  return (
    <ModalRoot activeModal={activeModal}>
      <PhotoPostModal id={ModalIds.PhotoPostModal} onClose={modalBack} />
    </ModalRoot>
  );
});
