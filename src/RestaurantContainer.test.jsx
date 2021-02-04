import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useSelector } from 'react-redux';

import RestaurantContainer from './RestaurantContainer';

jest.mock('react-redux');

describe('RestaurantContainer', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      restaurant: {
        id: 1,
        categoryId: 1,
        name: '마법사주방',
        address: '서울',
        menuItems: given.menuItems,
      },
    }));
  });

  context('with menu items', () => {
    given('menuItems', () => [
      { id: 1, restaurantId: 1, name: '비빔밥' },
    ]);

    it('renders menus of restaurant', () => {
      const { container } = render((
        <MemoryRouter initialEntries={['/restaurants/1']}>
          <RestaurantContainer />
        </MemoryRouter>
      ));

      expect(container).toHaveTextContent('마법사주방');
      expect(container).toHaveTextContent('비빔밥');
    });
  });

  context('without menu items', () => {
    given('menuItems', () => undefined);

    it("doesn't renders menus of restaurant", () => {
      const { container } = render((
        <MemoryRouter initialEntries={['/restaurants/1']}>
          <RestaurantContainer />
        </MemoryRouter>
      ));

      expect(container).toHaveTextContent('마법사주방');
      expect(container).not.toHaveTextContent('비빔밥');
    });
  });
});
