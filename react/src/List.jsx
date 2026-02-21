import React from 'react';

const brandsItem = [
  {
    brandTitle: 'Mercedes',
    brandCar: 'Car 1',
    isNormal: true,
  },
  {
    brandTitle: 'BMW',
    brandCar: 'Car 2',
    isNormal: false,
  },
  {
    brandTitle: 'AUDI',
    brandCar: 'Car 3',
    isNormal: false,
  },
];

export const List = () => {
  return (
    <div>
      {brandsItem.map((item, index) => (
        <section key={index} className={item.isNormal ? 'normal' : 'special'}>
          <span>{item.brandTitle}</span>
          <h3>{item.brandCar}</h3>
        </section>
      ))}
    </div>
  );
};
