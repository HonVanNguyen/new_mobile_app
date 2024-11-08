import React, { Component, useCallback } from 'react';
import { Actionsheet, Text } from 'native-base';
import { ImagePickerResponse, launchCamera } from 'react-native-image-picker';

import { useTranslation } from 'react-i18next';

export const ButtonOpenCamera = () => {
  const { t } = useTranslation();
  
  const handleOpenCamera = async () => {
    const result: ImagePickerResponse = await launchCamera({
      mediaType: 'photo',
      includeExtra: true,
    });
    if (result?.assets) {
     
    }
  };
  return (
    <Actionsheet.Item onPress={handleOpenCamera}>
      <Text>{t('openCamera')}</Text>
    </Actionsheet.Item>
  );
};
