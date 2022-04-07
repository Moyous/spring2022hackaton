import { FC, memo, useState } from "react";

type TProps = {
  highSrc: string;
  lowSrc: string;
};

export const PhotoPost: FC<TProps> = memo(({ lowSrc, highSrc }) => {
  const [isHighLoaded, setIsHighLoaded] = useState(false);

  return (
    <div className="PhotoLenta__postBox">
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
