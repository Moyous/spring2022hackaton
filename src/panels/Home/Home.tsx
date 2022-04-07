import { FC, memo } from "react";

import router from "init/router";
import { ModalIds } from "init/routerEnums";

import {
  Avatar,
  Button,
  ButtonGroup,
  Card,
  Div,
  Headline,
  Panel,
  PanelHeader,
  Subhead,
} from "@vkontakte/vkui";
import { TPanel } from "../TPanel";
import {
  Icon16Message,
  Icon16MoreHorizontal,
  Icon16Phone,
  Icon16UserAdd,
} from "@vkontakte/icons";

export const Home: FC<TPanel> = memo(({ id }) => {
  const viewType = () => "";

  return (
    <Panel id={id}>
      <PanelHeader>Test home</PanelHeader>
      <Div>
        Test test {viewType()}
        <Button
          onClick={() => router.openModal(ModalIds.TestModal)}
          size="m"
          stretched
        >
          Open modal
        </Button>
      </Div>
      <Card mode="shadow">
        <Div>
          <div className="Profile__avatarBox">
            <Avatar size={48} />
          </div>
          <Headline weight="semibold" className="Profile__name">
            Ника Сорокина
          </Headline>
          <Subhead>Маркетолог</Subhead>
          <ButtonGroup>
            <Button
              size="m"
              mode="primary"
              before={<Icon16Message />}
              stretched
            />
            <Button
              size="m"
              mode="secondary"
              before={<Icon16Phone />}
              stretched
            />
            <Button
              size="m"
              mode="secondary"
              before={<Icon16UserAdd />}
              stretched
            />
            <Button
              size="m"
              mode="secondary"
              before={<Icon16MoreHorizontal />}
              stretched
            />
          </ButtonGroup>
        </Div>
      </Card>
    </Panel>
  );
});
