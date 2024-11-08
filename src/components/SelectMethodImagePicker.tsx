// import { useAppDispatch } from '@src/common/hooks/useAppDispatch';
import { Actionsheet, Button, Center } from 'native-base';
import React from 'react';
// import {
//   isOpenSelectMethodImagePickerSelect,
//   setIsOpenSelectMethodImagePicker,
// } from '../redux/user.slice';
// import { useAppSelector } from '@src/common/hooks/useAppSelector';

import { useTranslation } from 'react-i18next';
import { ButtonOpenCamera } from './ButtonOpenCamera';
import { ButtonOpenPhotoGallery } from './ButtonOpenPhotoGallery';

const SelectMethodImagePicker = () => {
  const { t } = useTranslation();
  let isOpenSelectMethodPickerImage = false;

  const onClose = () => {
    
    isOpenSelectMethodPickerImage = false;
  };
  return (
    <Center>
      <Actionsheet isOpen={isOpenSelectMethodPickerImage} onClose={onClose}>
        <Actionsheet.Content>
          <ButtonOpenPhotoGallery />
          <ButtonOpenCamera />
        </Actionsheet.Content>
      </Actionsheet>
    </Center>
  );
};

export default SelectMethodImagePicker;
