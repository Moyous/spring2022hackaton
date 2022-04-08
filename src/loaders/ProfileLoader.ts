import { FC, memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fireGetProfile } from "../store/lenta/sets/fireGetProfile";
import { selectProfileState } from "../store/lenta/selectors/selectProfileState";
import { selectToken } from "../store/lenta/selectors/selectToken";

export const ProfileLoader: FC = memo(() => {
  const dispatch = useDispatch();
  const accessToken = useSelector(selectToken);
  const [localLoading, setLocalLoading] = useState(false);
  const { error, isLoaded, isLoading, id } = useSelector(selectProfileState);

  useEffect(() => {
    if (
      !isLoaded &&
      !isLoading &&
      !error &&
      accessToken &&
      !localLoading &&
      id
    ) {
      setLocalLoading(true);
      dispatch(fireGetProfile(id));
    }
  }, [error, isLoaded, isLoading, accessToken, id]);

  useEffect(() => {
    setLocalLoading(false);
  }, [isLoaded]);

  return null;
});
