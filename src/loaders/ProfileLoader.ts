import { FC, memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fireGetProfile } from "../store/lenta/sets/fireGetProfile";
import { selectProfileState } from "../store/lenta/selectors/selectProfileState";
import { selectToken } from "../store/lenta/selectors/selectToken";
import bridge from "@vkontakte/vk-bridge";

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
      id &&
      !localLoading
    ) {
      setLocalLoading(true);
      dispatch(fireGetProfile(id));
    }
  }, [isLoaded, isLoading, error, accessToken, id, localLoading]);

  useEffect(() => {
    if (isLoaded) {
      setLocalLoading(false);
    }
  }, [isLoaded]);

  useEffect(() => {
    void bridge.send("VKWebAppSetLocation", {
      location: id ? `profile=${id}` : "",
    });
  }, [id]);

  return null;
});
