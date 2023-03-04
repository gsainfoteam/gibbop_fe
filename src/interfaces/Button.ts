interface IButton {
  children: React.ReactNode;
  color?: string;
  background?: string;
  onClick?: () => void;
}

export default IButton;
