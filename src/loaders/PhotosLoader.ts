import { FC, memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fireGetPhotos } from "../store/lenta/sets/fireGetPhotos";
import { selectPhotosState } from "../store/lenta/selectors/selectPhotosState";
import { selectToken } from "../store/lenta/selectors/selectToken";

export const PhotosLoader: FC = memo(() => {
  const dispatch = useDispatch();
  const accessToken = useSelector(selectToken);
  const [localLoading, setLocalLoading] = useState(false);
  const { error, isLoaded, isLoading } = useSelector(selectPhotosState);

  useEffect(() => {
    if (!isLoaded && !isLoading && !error && accessToken && !localLoading) {
      setLocalLoading(true);
      dispatch(fireGetPhotos());
    }
  }, [error, isLoaded, isLoading, accessToken]);

  useEffect(() => {
    setLocalLoading(false);
  }, [isLoaded]);

  return null;
});
