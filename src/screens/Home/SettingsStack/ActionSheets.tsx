import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { useTheme } from '@shopify/restyle';
import React, { useCallback, useMemo, useRef } from 'react';
import { useModal } from 'react-native-modalfy';

import { PrimaryButton } from '../../../components/Button';
import { Header } from '../../../components/Header';
import { Box, ScrollBox, Text } from '../../../theme';

const ActionSheetsScreen = () => {
  const theme = useTheme();
  // Modalfy
  const { openModal } = useModal();
  const handleOpenModalfy = async () => {
    openModal('ModalfyActionSheet', {
      title: 'Title',
      message: 'Message.',
      props: {
        button1: 'Cancel',
        button2: null,
        onPress: () => null,
        callback: () => null,
      },
    });
  };

  // Gorhom
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ['30%', '30%'], []);
  const handleOpenGorhom = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleCloseGorhom = useCallback(() => {
    bottomSheetModalRef.current?.close();
  }, []);

  return (
    <Box flex={1} backgroundColor="surface">
      <Header textTitle="ActionSheets" />
      <ScrollBox flex={1} padding="m" showsVerticalScrollIndicator={false}>
        <PrimaryButton label="Open Modalfy" onPress={handleOpenModalfy} />
        <Box height={16} />
        <PrimaryButton label="Open Gorhom" onPress={handleOpenGorhom} />
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, magni
          atque voluptatem mollitia consequuntur iusto porro non dignissimos
          provident accusantium! Dolor vero, voluptatum nulla voluptate illo
          deleniti facilis vitae officiis beatae qui quae atque molestiae neque
          impedit ab quasi laboriosam quo harum itaque enim et natus possimus,
          veritatis unde? Quia nemo qui libero nisi voluptatem aliquid iste,
          eius saepe? Ratione praesentium sit sed reprehenderit reiciendis
          ullam, nihil sapiente eius ipsa similique recusandae, repellendus nam
          alias unde molestias amet nulla velit esse, mollitia corporis id ipsum
          eaque. Vitae adipisci fugiat voluptatibus, dolor iure hic incidunt
          consequatur maxime totam atque inventore omnis. Amet nulla, quis
          voluptates molestiae non necessitatibus maxime explicabo vitae
          laboriosam aliquid suscipit porro, saepe sapiente repellat possimus
          atque dicta quasi! Et temporibus esse repellat totam minima alias
          tempora a, ducimus distinctio vitae quod. Alias labore perferendis
          dicta. Corporis consequatur repellendus sequi ex eum accusamus nemo
          tempora itaque voluptas? Excepturi nulla earum sed maxime quis!
          Aliquam dicta velit id illo debitis praesentium suscipit error
          voluptatum officia minus dolorum, sunt, eius itaque similique
          aspernatur? Exercitationem nesciunt optio illum odit magnam quasi eum
          laboriosam ducimus totam facilis quas aliquid iure quam cupiditate,
          unde vel vitae, nisi a amet? Rerum pariatur mollitia similique porro
          fugit error nisi, ea animi nam autem esse odio, voluptates corporis.
          Quibusdam obcaecati, ratione accusamus quod nihil et unde maxime quam
          dicta quisquam libero explicabo eius? Sit animi voluptatum doloribus
          labore eligendi eum optio libero voluptas dolor nisi a ratione
          debitis, possimus, eos consectetur fugiat quasi explicabo aut quod,
          aliquam ipsum excepturi. Nisi ut eaque doloribus commodi dolorum, ex
          voluptas, consectetur aliquam rerum earum, deleniti voluptates!
          Voluptate laborum tempora nam, itaque repellat magnam expedita
          adipisci animi a nisi eum! Laboriosam aliquid laborum ipsa vero
          officiis. Optio officia eveniet nihil nesciunt distinctio magnam,
          saepe quos quae impedit ipsam veniam nulla!
        </Text>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          backgroundStyle={{
            backgroundColor: theme.colors.background,
          }}>
          <Box flex={1} padding="m">
            <Text marginBottom="m">Title</Text>
            <PrimaryButton
              label="Confirm"
              onPress={() => console.log('Confirm')}
            />
            <Box height={16} />
            <PrimaryButton label="Close" onPress={handleCloseGorhom} />
          </Box>
        </BottomSheetModal>
      </ScrollBox>
    </Box>
  );
};

export default ActionSheetsScreen;
