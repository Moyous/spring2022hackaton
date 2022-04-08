import { FC, memo, useEffect, useState } from "react";
import { Panel, Placeholder, Progress, Subhead } from "@vkontakte/vkui";
import { TPanel } from "../TPanel";
import "./Initial.css";

export const Initial: FC<TPanel> = memo(({ id }) => {
  const [value, setValue] = useState(0);

  const goGoGo = () => {
    return setTimeout(() => {
      const val = Math.floor(Math.random() * 10 + 3);

      setValue(Math.min(val + value, 100));
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }, Math.random() * 50 + 250);
  };

  // @ts-ignore
  useEffect(() => {
    goGoGo();
  }, [value]);

  return (
    <Panel id={id}>
      <Placeholder className="Init_placeholder">
        <img
          src="https://vk.com/sticker/1-66056-256"
          alt=""
          width={128}
          height={128}
        />
        <Subhead>
          тоже хотят посмотреть на твой профиль в SPACE, загружаемся!
        </Subhead>
      </Placeholder>
      <Progress className="Init_progress" value={value} />
    </Panel>
  );
});
