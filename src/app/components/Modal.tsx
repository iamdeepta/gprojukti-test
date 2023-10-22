import styles from "../scss/modal.module.scss";

const Modal = ({ data }: any) => {
  return (
    <div
      className={data ? `${styles.modal} ${styles.modalActive}` : styles.modal}
    >
      {data &&
        Object.keys(data).map((keyName: any, i) => (
          <p key={i}>
            <span>
              {i + 1}. {keyName}: {JSON.stringify(data[keyName])}
            </span>
          </p>
        ))}
    </div>
  );
};

export default Modal;
