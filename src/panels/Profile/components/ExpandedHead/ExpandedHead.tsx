import { FC, memo } from "react";
import {
  Avatar,
  Button,
  ButtonGroup,
  Card,
  Div,
  Headline,
  Subhead,
} from "@vkontakte/vkui";
import {
  Icon20MessageOutline,
  Icon20More,
  Icon20PhoneOutline,
  Icon20UserOutline,
} from "@vkontakte/icons";
import "./ExpandedHead.css";
import { useSelector } from "react-redux";
import { selectProfileState } from "../../../../store/lenta/selectors/selectProfileState";

export const ExpandedHead: FC = memo(() => {
  const { data } = useSelector(selectProfileState);

  if (!data) {
    return null;
  }

  return (
    <Card mode="shadow" className="ExpandedHead">
      <Div className="ExpandedHead__container">
        <div className="ExpandedHead__avatarBox">
          <Avatar size={84} src={data.avatarSrcHigh} />
        </div>
        <div className="ExpandedHead__mainInfoBox">
          <Headline weight="semibold">{data.name}</Headline>
          {data.status && (
            <Subhead className="ExpandedHead__statusBox">{data.status}</Subhead>
          )}
          <ButtonGroup stretched className="ExpandedHead__buttonsBox">
            <Button
              size="m"
              mode="primary"
              before={<Icon20MessageOutline />}
              stretched
            />
            <Button
              size="m"
              mode="secondary"
              before={<Icon20PhoneOutline />}
              stretched
            />
            <Button
              size="m"
              mode="secondary"
              before={<Icon20UserOutline />}
              stretched
            />
            <Button
              size="m"
              mode="secondary"
              before={<Icon20More />}
              stretched
            />
          </ButtonGroup>
        </div>
      </Div>
    </Card>
  );
});
