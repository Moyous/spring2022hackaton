import { FC, memo, useState } from "react";
import { TDefaultModal } from "../TDefaultModal";
import { Div, ModalCard, Text } from "@vkontakte/vkui";
import { useDispatch, useSelector } from "react-redux";
import { selectActivePhotoPost } from "../../store/lenta/selectors/selectActivePhotoPost";
import "./PhotoPostModal.css";
import {
  Icon28Like,
  Icon28LikeOutline,
  Icon36LikeOutline,
} from "@vkontakte/icons";
import { removeLike } from "../../store/lenta/sets/removeLike";
import { addLike } from "../../store/lenta/sets/addLike";
import { DateTime } from "luxon";
import bridge from "@vkontakte/vk-bridge";

export const PhotoPostModal: FC<TDefaultModal> = memo(({ id, onClose }) => {
  const activePhotoPost = useSelector(selectActivePhotoPost);
  const dispatch = useDispatch();
  const [animatedClasses, setAnimatedClasses] = useState("");
  const [bigAnimatedClasses, setBigAnimatedClasses] = useState("");
  const showBigAnimation = () => {
    setBigAnimatedClasses("PhotoPostModal_bigLike--animated");

    setTimeout(() => {
      setBigAnimatedClasses("");
    }, 300);
  };
  const showAnimation = () => {
    setAnimatedClasses("PhotoPostModal_like--animated");

    setTimeout(() => {
      setAnimatedClasses("");
    }, 500);
  };

  const triggerHaptic = () => {
    void bridge.send("VKWebAppTapticNotificationOccurred", { type: "success" });
  };

  const onClickRemoveLike = () => {
    if (activePhotoPost) {
      dispatch(removeLike(activePhotoPost.id));
    }
  };
  const onClickAddLike = () => {
    if (activePhotoPost && !activePhotoPost.isLiked) {
      dispatch(addLike(activePhotoPost.id));
    }
  };

  return (
    <ModalCard id={id} onClose={onClose}>
      {activePhotoPost && (
        <>
          <Div className="PhotoPostModal_box">
            <div className="PhotoPostModal_imgBox">
              <img
                className="PhotoPostModal_img"
                onDoubleClick={() => {
                  triggerHaptic();
                  onClickAddLike();
                  showBigAnimation();
                }}
                src={activePhotoPost.highSrc}
                alt=""
              />
              <Icon36LikeOutline
                className={"PhotoPostModal_bigLike " + bigAnimatedClasses}
              />
            </div>
          </Div>
          <Div className="PhotoPostModal_metaRow">
            {activePhotoPost.isLiked ? (
              <Icon28Like
                className={"PhotoPostModal_icon " + animatedClasses}
                onClick={() => {
                  showAnimation();
                  onClickRemoveLike();
                }}
              />
            ) : (
              <Icon28LikeOutline
                className={"PhotoPostModal_icon " + animatedClasses}
                onClick={() => {
                  showAnimation();
                  onClickAddLike();
                  triggerHaptic();
                }}
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
    </ModalCard>
  );
});
