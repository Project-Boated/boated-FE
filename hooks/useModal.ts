import { useState, useCallback } from 'react';

const useModal = () => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  const openModal = useCallback(() => setIsShowModal(true), [setIsShowModal]);

  const closeModal = useCallback(() => setIsShowModal(false), [setIsShowModal]);

  const toggleModal = useCallback(() => setIsShowModal((prev: boolean) => !prev), [setIsShowModal]);

  return { isShowModal, openModal, closeModal, toggleModal };
};

export default useModal;
