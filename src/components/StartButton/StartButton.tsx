import {Button} from "antd";
import {StarOutlined, StarFilled} from "@ant-design/icons";

export interface StartButtonInterface {
  isFavorite: boolean;
  onClick: () => void;
}

const StartButton: React.FC<StartButtonInterface> = ({isFavorite, onClick}) => {
  const Icon = isFavorite ? StarFilled : StarOutlined;

  return <Button icon={<Icon />} onClick={onClick} />;
};

export default StartButton;
