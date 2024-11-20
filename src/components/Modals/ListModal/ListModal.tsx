import { View, Modal, Image, FlatList } from 'react-native';
import React, { useState } from 'react';
import CustomTextInput from '@/src/components/TextInput';
import Header from '@/src/components/Header';
import BackButton from '@/src/components/BackButton';
import SelectableItem from '@/src/components/SelectableItem';
import styles from './styles';
import { Item } from '@/src/utils/fakeData';

type Props = {
  isModalVisible: boolean;
  handleModal: () => void;
  title: string;
  itemsList: Item[];
  handleSelectItem: (item: Item) => void;
  selectedItem: string;
};

const ListModal = ({
  isModalVisible = false,
  handleModal,
  title = '',
  itemsList = [],
  handleSelectItem,
  selectedItem,
}: Props) => {
  const [search, setSearch] = useState('');

  const handleOnChangeSearch = (value: string) => setSearch(value);

  const handleRenderItem = ({ item }: { item: Item }) => {
    const isItemOnSearchBox =
      (!!search &&
        item.description.toLowerCase().includes(search.toLowerCase())) ||
      item.title.toLowerCase().includes(search.toLowerCase());

    if (!search || isItemOnSearchBox) {
      const isSelected =
        selectedItem === item.description || selectedItem === item.title;
      return (
        <SelectableItem
          item={item}
          handleOnPress={() => handleSelectItem(item)}
          isSelected={isSelected}
        />
      );
    }

    return null;
  };

  return (
    <Modal visible={isModalVisible}>
      <View style={styles.container}>
        <Header
          title={title}
          leftElement={<BackButton customAction={handleModal} />}
          containerStyle={styles.header}
          withBorderBottom={false}
        />

        <View style={styles.content}>
          <CustomTextInput
            placeholder='Buscar'
            onChangeText={handleOnChangeSearch}
            name='search'
            iconLeft={<Image source={require('@/assets/icons/search.png')} />}
          />

          <FlatList
            data={itemsList}
            contentContainerStyle={styles.currenciesList}
            keyExtractor={() => Math.random().toString()}
            showsVerticalScrollIndicator={false}
            renderItem={handleRenderItem}
          />
        </View>
      </View>
    </Modal>
  );
};

export default ListModal;
