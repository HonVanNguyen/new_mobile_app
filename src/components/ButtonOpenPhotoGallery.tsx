import React, { Component } from 'react';
import { Actionsheet, Text } from 'native-base';
import {
  ImagePickerResponse,
  launchImageLibrary,
} from 'react-native-image-picker';

import { useTranslation } from 'react-i18next';

export const ButtonOpenPhotoGallery = () => {
  const { t } = useTranslation();

  const handleOpenPhotoGallery = async () => {
    const result: ImagePickerResponse = await launchImageLibrary({
      mediaType: 'photo',
      includeExtra: true,
    });
    if (result?.assets) {

    }
  };
  return (
    <Actionsheet.Item onPress={handleOpenPhotoGallery}>
      <Text>{t('openPhotoGallery')}</Text>
    </Actionsheet.Item>
  );
};
