import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import RestaurantPage from './RestaurantPage';

jest.mock('react-redux');

describe('RestaurantPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      restaurant: {
        id: 1,
        categoryId: 1,
        name: '마법사주방',
        address: '서울',
        menuItems: [
          { id: 1, restaurantId: 1, name: '비빔밥' },
        ],
      },
    }));
  });

  it('renders restaurant', () => {
    const { container } = render((
      <MemoryRouter initialEntries={['/restaurants/1']}>
        <RestaurantPage />
      </MemoryRouter>
    ));

    expect(container).toHaveTextContent('마법사주방');
  });
});
