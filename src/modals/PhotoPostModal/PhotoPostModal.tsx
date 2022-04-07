import { FC, memo } from "react";
import { TDefaultModal } from "../TDefaultModal";
import {
  Div,
  ModalPage,
  ModalPageHeader,
  PanelHeaderButton,
} from "@vkontakte/vkui";
import { Icon24DoneOutline } from "@vkontakte/icons";
import { useSelector } from "react-redux";
import { selectActivePhotoPost } from "../../store/lenta/selectors/selectActivePhotoPost";

export const PhotoPostModal: FC<TDefaultModal> = memo(({ id, onClose }) => {
  const activePhotoPost = useSelector(selectActivePhotoPost);
  console.log(activePhotoPost);

  return (
    <ModalPage id={id} onClose={onClose}>
      <ModalPageHeader
        right={
          <PanelHeaderButton>
            <Icon24DoneOutline onClick={onClose} />
          </PanelHeaderButton>
        }
      >
        Test VKUI Modal
      </ModalPageHeader>
      <Div>
        Some content
        <br />
        Some big content
      </Div>
    </ModalPage>
  );
});
