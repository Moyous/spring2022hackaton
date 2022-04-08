import { FC, memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fireGetPhotos } from "../store/lenta/sets/fireGetPhotos";
import { selectPhotosState } from "../store/lenta/selectors/selectPhotosState";
import { selectToken } from "../store/lenta/selectors/selectToken";
import { selectActiveProfileId } from "../store/lenta/selectors/selectActiveProfileId";

export const PhotosLoader: FC = memo(() => {
  const dispatch = useDispatch();
  const id = useSelector(selectActiveProfileId);
  const accessToken = useSelector(selectToken);
  const [localLoading, setLocalLoading] = useState(false);
  const { error, isLoaded, isLoading } = useSelector(selectPhotosState);

  useEffect(() => {
    if (
      !isLoaded &&
      !isLoading &&
      !error &&
      accessToken &&
      id &&
      !localLoading
    ) {
      setLocalLoading(true);
      dispatch(fireGetPhotos());
    }
  }, [isLoaded, isLoading, error, accessToken, id, localLoading]);

  useEffect(() => {
    if (isLoaded) {
      setLocalLoading(false);
    }
  }, [isLoaded]);

  useEffect(() => {
    console.log("LOCAL LOADING CHANGE", localLoading);
  }, [localLoading]);

  return null;
});
