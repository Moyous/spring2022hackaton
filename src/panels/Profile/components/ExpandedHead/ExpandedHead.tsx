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

// eslint-disable-next-line max-len
const mockSrc =
  "https://sun9-67.userapi.com/impg/q3DPjRYZW6vsCrI65iBqeeZD6GPNVJ8hfEFE-g/rVVmHrTjZtU.jpg?size=1440x1800&quality=96&sign=9bbc5d9a34a839d12edbc3cc5b143b9a&type=album";

export const ExpandedHead: FC = memo(() => {
  const status = "Маркетолог";

  return (
    <Card mode="shadow" className="ExpandedHead">
      <Div className="ExpandedHead__container">
        <div className="ExpandedHead__avatarBox">
          <Avatar size={84} src={mockSrc} />
        </div>
        <div className="ExpandedHead__mainInfoBox">
          <Headline weight="semibold">Ника Сорокина</Headline>
          {/* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition */}
          {status && (
            <Subhead className="ExpandedHead__statusBox">{status}</Subhead>
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
