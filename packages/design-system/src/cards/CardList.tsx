type CardListProps<T> = {
  cards: T[];
  CardComponent: React.ComponentType<T>;
};

export function CardList<T>({ cards, CardComponent }: CardListProps<T>) {
  return (
    <div className="flex flex-col space-y-5">
      {cards.map((card, index) => (
        <CardComponent key={index} {...card} />
      ))}
    </div>
  );
}
