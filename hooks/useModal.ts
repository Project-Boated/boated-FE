import { useState, useCallback, useEffect } from 'react';

const useModal = () => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  const openModal = useCallback(() => setIsShowModal(true), [setIsShowModal]);

  const closeModal = useCallback(() => setIsShowModal(false), [setIsShowModal]);

  const toggleModal = useCallback(() => setIsShowModal((prev: boolean) => !prev), [setIsShowModal]);

  useEffect(() => {
    if (isShowModal) {
      document.body.style.overflow = 'hidden';
      return;
    }
    document.body.style.overflow = 'visible';
  }, [isShowModal]);

  return { isShowModal, openModal, closeModal, toggleModal };
};

export default useModal;
