import React, { useEffect, useState } from 'react';
import DocumentPicker, {
  DirectoryPickerResponse,
  DocumentPickerResponse,
  isInProgress,
  types,
} from 'react-native-document-picker';

import { PrimaryButton } from '../../../components/Button';
import { Header } from '../../../components/Header';
import { Box, Text } from '../../../theme';

const DocumentPickerScreen = () => {
  const [result, setResult] = useState<
    Array<DocumentPickerResponse> | DirectoryPickerResponse | undefined | null
  >();

  useEffect(() => {
    console.log(JSON.stringify(result, null, 2));
  }, [result]);

  const handleError = (err: unknown) => {
    if (DocumentPicker.isCancel(err)) {
      console.warn('cancelled');
      // User cancelled the picker, exit any dialogs or menus and move on
    } else if (isInProgress(err)) {
      console.warn(
        'multiple pickers were opened, only the last will be considered',
      );
    } else {
      throw err;
    }
  };
  return (
    <Box flex={1} backgroundColor="surface">
      <Header textTitle="Image picker" />
      <Box flex={1} padding="m">
        <PrimaryButton
          label="open picker for single file selection"
          onPress={async () => {
            try {
              const pickerResult = await DocumentPicker.pickSingle({
                presentationStyle: 'fullScreen',
                copyTo: 'cachesDirectory',
              });
              setResult([pickerResult]);
            } catch (e) {
              handleError(e);
            }
          }}
        />
        <Box height={16} />
        <PrimaryButton
          label="open picker for multi file selection"
          onPress={() => {
            DocumentPicker.pickMultiple().then(setResult).catch(handleError);
          }}
        />
        <Box height={16} />
        <PrimaryButton
          label="open picker for multi selection of word files"
          onPress={() => {
            DocumentPicker.pick({
              allowMultiSelection: true,
              type: [types.doc, types.docx],
            })
              .then(setResult)
              .catch(handleError);
          }}
        />
        <Box height={16} />
        <PrimaryButton
          label="open picker for single selection of pdf file"
          onPress={() => {
            DocumentPicker.pick({
              type: types.pdf,
            })
              .then(setResult)
              .catch(handleError);
          }}
        />
        <Box height={16} />
        <Text selectable>Result: {JSON.stringify(result, null, 2)}</Text>
      </Box>
    </Box>
  );
};

export default DocumentPickerScreen;
