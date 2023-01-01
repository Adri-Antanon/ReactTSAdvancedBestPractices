export type Book = {
  type: string;
  title: string;
  description: string;
};

export function isBook(item: ItemsOnSale): item is Book {
  return item.type === 'book';
}

export type Magazine = {
  type: string;
  title: string;
};

export function isMagazine(item: ItemsOnSale): item is Magazine {
  return item.type === 'magazine';
}

export type Pen = {
  type: string;
  color: string;
};

export function isPen(item: ItemsOnSale): item is Pen {
  return item.type === 'pen';
}

export type ItemsOnSale = Book | Magazine | Pen;
