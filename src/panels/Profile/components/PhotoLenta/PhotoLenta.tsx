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
        {data.map(({ id, lowSrc, highSrc }) => (
          <PhotoPost key={id} id={id} lowSrc={lowSrc} highSrc={highSrc} />
        ))}
      </div>
    </Card>
  );
});
