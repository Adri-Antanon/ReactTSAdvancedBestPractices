import type { FC } from 'react';
import { BookOnSale } from './book-on-sale';
import { MagazineOnSale } from './magazine-on-sale';
import { PenOnSale } from './pen-on-sale';
import { isBook, isMagazine, isPen, ItemsOnSale } from './types';

type Props = {
  item: ItemsOnSale;
};

export const ItemOnSale: FC<Props> = ({ item }) => {
  switch (item.type) {
    case 'book':
      if (isBook(item)) {
        return <BookOnSale book={item} />;
      } else {
        console.log('isBook(item) is false', item);
      }
    case 'magazine':
      if (isMagazine(item)) {
        return <MagazineOnSale magazine={item} />;
      }
    case 'pen':
      if (isPen(item)) {
        return <PenOnSale pen={item} />;
      }
  }

  return null;
};
