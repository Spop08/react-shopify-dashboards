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
      {
        title: "Dashboard",
        root: true,
        icon: "flaticon2-architecture-and-city",
        page: "admin/dashboard",
        translate: "MENU.DASHBOARD",
        bullet: "dot"
      },
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
      {
        title: "Order issue list",
        root: true,
        bullet: "dot",
        icon: "flaticon2-calendar-5",
        page: "admin/my-products"
      },
      {
        title: "Customer Service Info",
        root: true,
        bullet: "dot",
        icon: "flaticon2-calendar-5",
        page: "admin/my-products"
      },
      { section: "Order" },
      {
        title: "Order list",
        root: true,
        bullet: "dot",
        icon: "flaticon2-search",
        page: "admin/search-products"
      },
      {
        title: "Pending orders",
        root: true,
        bullet: "dot",
        icon: "flaticon2-calendar-5",
        page: "admin/import-list"
      },
      { section: "Customer" },
      {
        title: "Orders by Customer",
        root: true,
        bullet: "dot",
        icon: "flaticon2-search",
        page: "admin/search-products"
      },
      {
        title: "Development customer list",
        root: true,
        bullet: "dot",
        icon: "flaticon2-calendar-5",
        page: "admin/import-list"
      },
      { section: "Purchase " },
      {
        title: "All purchased orders",
        root: true,
        bullet: "dot",
        icon: "flaticon2-search",
        page: "admin/search-products"
      },
      {
        title: "Unpurchased orders",
        root: true,
        bullet: "dot",
        icon: "flaticon2-calendar-5",
        page: "admin/import-list"
      }
    ]
  }
};
