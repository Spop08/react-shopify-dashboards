export default {
    items: [
      {
        name: 'Products',
        url: '/products',
        icon: 'cui-basket-loaded',
        children: [
          {
            name: 'Search Products',
            url: '/products/search',
          },
          {
            name: 'Import Products',
            url: '/products/import',
          },
          {
            name: 'My Products',
            url: '/products/import',
          },
        ],
      },
      {
        name: 'Orders',
        url: '/orders',
        icon: 'cui-note',
        children: [
          {
            name: 'UnPaid Order',
            url: '/orders/unpaid',
          },
          {
            name: 'UnDelivered Order',
            url: '/orders/undelivered',
          },
          {
            name: 'Delivery Order',
            url: '/orders/delivered',
          },
          {
            name: 'Cancel Refund Order',
            url: '/orders/refund',
          },
        ],
      },
      {
        name: 'My Account',
        url: '/orders',
        icon: 'cui-cog',
        
      },
    ],
  };
  