export interface IButton {
  color: string;
  text: string;
  textColor: string;
  isDisabled?: boolean;
  handleClick?: () => void;
}
