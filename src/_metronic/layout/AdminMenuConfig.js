export default {
  header: {
    self: {},
    items: [
      // {
      //   title: "Components",
      //   root: true,
      //   alignment: "left",
      //   toggle: "click",
      //   submenu: [
      //     {
      //       title: "React Bootstrap",
      //       bullet: "dot",
      //       icon: "flaticon-web",
      //       submenu: [
      //
      //
      //       ]
      //     }
      //   ]
      // },
    ]
  },
  aside: {
    self: {},
    items: [
      { section: "Platform" },
      {
        title: "Product list",
        root: true,
        bullet: "dot",
        icon: "flaticon2-search",
        page: "admin/product-list"
      },
      {
        title: "Seller list",
        root: true,
        bullet: "dot",
        icon: "flaticon2-calendar-5",
        page: "admin/user-list"
      },
      { section: "Order" },
      // {
      //   title: "All Orders",
      //   root: true,
      //   bullet: "dot",
      //   icon: "flaticon2-search",
      //   page: "admin/all-orders"
      // },
      {
        title: "UnProcessed Orders",
        root: true,
        bullet: "dot",
        icon: "flaticon2-calendar-5",
        page: "admin/unprocessed-orders"
      },
      {
        title: "Processed Orders",
        root: true,
        bullet: "dot",
        icon: "flaticon2-calendar-5",
        page: "admin/processed-orders"
      },
      {
        title: "Shipped Orders",
        root: true,
        bullet: "dot",
        icon: "flaticon2-calendar-5",
        page: "admin/shipped-orders"
      }
    ]
  }
};
