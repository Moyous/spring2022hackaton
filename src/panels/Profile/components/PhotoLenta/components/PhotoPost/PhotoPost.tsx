import { FC, memo, useState } from "react";
import { useDispatch } from "react-redux";
import { setActivePhotoPost } from "../../../../../../store/lenta/sets/setActivePhotoPost";
import router from "../../../../../../init/router";
import { ModalIds } from "../../../../../../init/routerEnums";

type TProps = {
  id: number;
  highSrc: string;
  lowSrc: string;
};

// TODO load 3 in a row. Load top first. Then push next row.
export const PhotoPost: FC<TProps> = memo(({ id, lowSrc, highSrc }) => {
  const [isHighLoaded, setIsHighLoaded] = useState(false);
  const dispatch = useDispatch();
  const onClickPost = () => {
    dispatch(setActivePhotoPost(id));
    requestAnimationFrame(() => {
      router.openModal(ModalIds.PhotoPostModal);
    });
  };

  return (
    <div className="PhotoLenta__postBox" onClick={onClickPost}>
      <img
        className={`PhotoLenta__postPhoto PhotoLenta__postPhoto--high ${
          isHighLoaded && "PhotoLenta__postPhoto--loaded"
        }`}
        src={highSrc}
        alt=""
        onLoad={() => setIsHighLoaded(true)}
      />
      <img
        className="PhotoLenta__postPhoto PhotoLenta__postPhoto--low"
        src={lowSrc}
        alt=""
      />
    </div>
  );
});
