import { IButton } from "../interfaces/button";
import styles from "../scss/button.module.scss";

const Button = ({
  color,
  text,
  textColor,
  isDisabled = false,
  handleClick,
}: IButton) => {
  return (
    <button
      className={styles.button}
      style={{ color: textColor, background: color }}
      onClick={handleClick}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
};

export default Button;
