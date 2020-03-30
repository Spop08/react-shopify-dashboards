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
        page: "app/dashboard",
        translate: "MENU.DASHBOARD",
        bullet: "dot"
      },
      { section: "Products" },
      {
        title: "Search Products",
        root: true,
        bullet: "dot",
        icon: "flaticon2-search",
        page: "app/search-products"
      },
      {
        title: "Import List",
        root: true,
        bullet: "dot",
        icon: "flaticon2-calendar-5",
        page: "app/import-list"
      },
      {
        title: "My Products",
        root: true,
        bullet: "dot",
        icon: "flaticon2-calendar-5",
        page: "app/my-products"
      },
      { section: "Orders" },
      {
        title: "UnProcessed Order",
        root: true,
        bullet: "dot",
        icon: "flaticon2-calendar-5",
        page: "app/unprocessed-order"
      },
      {
        title: "InProcessing Order",
        root: true,
        bullet: "dot",
        icon: "flaticon2-calendar-5",
        page: "app/inprocessing-order"
      },
      {
        title: "Delivered Order",
        root: true,
        bullet: "dot",
        icon: "flaticon2-calendar-5",
        page: "app/delivered-order"
      },
      // {
      //   title: "Cancelled Order",
      //   root: true,
      //   bullet: "dot",
      //   icon: "flaticon2-calendar-5",
      //   page: "app/cancelled-order"
      // },
      { section: "Settings" },
      {
        title: "Account Settings",
        root: true,
        bullet: "dot",
        icon: "flaticon2-settings",
        page: "app/account-settings"
      }
    ]
  }
};
