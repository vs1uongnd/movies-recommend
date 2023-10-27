import SelectGenre from './SelectGenre';
import Sort from './Sort';

const Filter = ({
  onFilter,
}: {
  onFilter: (selectedItems: number | string, action: string) => void;
}) => {
  return (
    <div className='flex gap-2 py-8 md:gap-8'>
      <SelectGenre onFilter={onFilter} />
      <Sort onFilter={onFilter} />
    </div>
  );
};

export default Filter;
