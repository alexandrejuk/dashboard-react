export const menuItems = [
  { 
    key: 'dashboard', 
    name: 'DashBoard',
    className: 'menu-item-nav-bar',
    path: '/dashboard'
  },
  { 
    key: 'clients', 
    name: 'Clientes',
    className: 'menu-item-nav-bar',
    subMenuProps: {
      items: [
        {
          key: 'new', 
          name: 'Novo',
          className: 'sub-enu-item-nav-bar',
          icon: 'new',
          path: '/dashboard/client/novo'
        },
        {
          key: 'manage', 
          name: 'Gerenciar',
          className: 'sub-enu-item-nav-bar',
          icon: 'manage',
          path: '/dashboard/client/manage'
        },
        {
          key: 'details', 
          name: 'Detalhes',
          className: 'sub-enu-item-nav-bar',
          icon: 'details',
          path: '/dashboard/client/details'
        }
      ]
    }
  },
  { 
    key: 'equipments', 
    name: 'Equipamentos',
    className: 'menu-item-nav-bar',
    subMenuProps: {
      items: [
        {
          key: 'new', 
          name: 'Novo',
          className: 'sub-enu-item-nav-bar',
          icon: 'new',
          path: '/dashboard/equipments/novo'
        },
        {
          key: 'manage', 
          name: 'Gerenciar',
          className: 'sub-enu-item-nav-bar',
          icon: 'manage',
          path: '/dashboard/equipments/manage'
        },
        {
          key: 'details', 
          name: 'Detalhes',
          className: 'sub-enu-item-nav-bar',
          icon: 'details',
          path: '/dashboard/equipments/details'
        }
      ]
    }
  }
];