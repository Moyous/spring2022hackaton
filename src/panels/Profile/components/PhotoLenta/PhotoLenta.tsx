import { FC, memo } from "react";
import { Card } from "@vkontakte/vkui";
import "./PhotoLenta.css";
import { PhotoPost } from "./components/PhotoPost/PhotoPost";
import { useSelector } from "react-redux";
import { selectPhotosState } from "../../../../store/lenta/selectors/selectPhotosState";

export const PhotoLenta: FC = memo(() => {
  const { data } = useSelector(selectPhotosState);

  return (
    <Card className="PhotoLenta">
      <div className="PhotoLenta__grid">
        {data.map(({ id, highSrc }) => (
          <PhotoPost key={id} src={highSrc} />
        ))}
      </div>
    </Card>
  );
});
