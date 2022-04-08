import { FC, memo } from "react";
import { TDefaultModal } from "../TDefaultModal";
import { Div, ModalPage, Text } from "@vkontakte/vkui";
import { useDispatch, useSelector } from "react-redux";
import { selectActivePhotoPost } from "../../store/lenta/selectors/selectActivePhotoPost";
import "./PhotoPostModal.css";
import { Icon28Like, Icon28LikeOutline } from "@vkontakte/icons";
import { removeLike } from "../../store/lenta/sets/removeLike";
import { addLike } from "../../store/lenta/sets/addLike";
import { DateTime } from "luxon";

export const PhotoPostModal: FC<TDefaultModal> = memo(({ id, onClose }) => {
  const activePhotoPost = useSelector(selectActivePhotoPost);
  const dispatch = useDispatch();
  const onClickRemoveLike = () => {
    if (activePhotoPost) {
      dispatch(removeLike(activePhotoPost.id));
    }
  };
  const onClickAddLike = () => {
    if (activePhotoPost) {
      dispatch(addLike(activePhotoPost.id));
    }
  };

  return (
    <ModalPage
      id={id}
      onClose={onClose}
      settlingHeight={90}
      dynamicContentHeight
    >
      {activePhotoPost && (
        <>
          <Div className="PhotoPostModal_box">
            <img
              className="PhotoPostModal_img"
              src={activePhotoPost.highSrc}
              alt=""
            />
          </Div>
          <Div className="PhotoPostModal_metaRow">
            {activePhotoPost.isLiked ? (
              <Icon28Like
                className="PhotoPostModal_icon"
                onClick={onClickRemoveLike}
              />
            ) : (
              <Icon28LikeOutline
                className="PhotoPostModal_icon"
                onClick={onClickAddLike}
              />
            )}
            <Text className="PhotoPostModal_likesCount" weight="semibold">
              {activePhotoPost.likesCount}
            </Text>
          </Div>
          <Div className="PhotoPostModal_dateRow">
            <Text className="PhotoPostModal_dateText" weight="regular">
              {DateTime.fromSeconds(activePhotoPost.date).toRelativeCalendar()}
            </Text>
          </Div>
        </>
      )}
    </ModalPage>
  );
});
