import React from 'react';

import { useSelector } from 'react-redux';

import { get } from './utils';

function getKey(id) {
  return `restaurant-${id}`;
}

export default function RestaurantContainer() {
  const restaurant = useSelector(get('restaurant'));

  return (
    <>
      <h2>{restaurant.name}</h2>
      <div>
        주소:
        {' '}
        {restaurant.address}
      </div>
      <h3>메뉴</h3>
      <ul>
        {(restaurant.menuItems || []).map((menu) => (
          <li key={getKey(menu.id)}>
            {menu.name}
          </li>
        ))}
      </ul>
    </>
  );
}
