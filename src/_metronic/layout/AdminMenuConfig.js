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
      { section: "Products" },
      {
        title: "Search Products",
        root: true,
        bullet: "dot",
        icon: "flaticon2-search",
        page: "admin/search-products"
      },
      {
        title: "Import List",
        root: true,
        bullet: "dot",
        icon: "flaticon2-calendar-5",
        page: "admin/import-list"
      },
      {
        title: "My Products",
        root: true,
        bullet: "dot",
        icon: "flaticon2-calendar-5",
        page: "admin/my-products"
      }
    ]
  }
};
