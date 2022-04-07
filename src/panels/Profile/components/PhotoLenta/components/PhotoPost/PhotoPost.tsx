import { FC, memo } from "react";

type TProps = {
  src: string;
};

export const PhotoPost: FC<TProps> = memo(({ src }) => {
  return (
    <div className="PhotoLenta__postBox">
      <img className="PhotoLenta__postPhoto" src={src} alt="" />
    </div>
  );
});
