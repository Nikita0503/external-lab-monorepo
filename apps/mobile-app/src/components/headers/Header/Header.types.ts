interface IActionButton {
  title: string;
  onPress: () => void;
}

export interface IProps {
  title: string;
  actionButton?: IActionButton;
  hideBackButton?: boolean;
}
