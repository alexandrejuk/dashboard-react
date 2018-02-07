import React, { Component } from 'react';
import { Menu, Segment, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { menuItems } from './menuItems';

const itemsMenu = menuItems

class NavBar extends Component {

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  constructor(props) {
    super(props);
    this.state = { 
      activeItem: 'dashboard'
     }
  }

  render() { 
    
    const { activeItem } = this.state
    
    const menu = items => 
      items.map(item => 
        item.subMenuProps ? subMenu(item)  : menuItem(item)
      )
      
    const menuItem = item => 
      (
        <Menu.Item as={Link} 
          to={item.path} name={item.name} 
          active={activeItem === item.name } 
          onClick={this.handleItemClick} />
      )
    
    const subMenu = item => 
      (
        <Dropdown pointing item text={item.name}>
          <Dropdown.Menu >{subMenuItem(item.subMenuProps.items)}</Dropdown.Menu>
        </Dropdown>
      )

    const subMenuItem = items => 
      items.map(item => (
         <Dropdown.Item as={Link} to={item.path}>{item.name}</Dropdown.Item>)
      )

    return (
      <div>
        <Menu pointing secondary>
          {menu(itemsMenu)}
          <Menu.Menu position='right'>
            <Menu.Item name='logout' 
              active={activeItem === 'logout'} 
              onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu>

        <Segment>
        
        </Segment>
      </div>
    )
  }
}
 
export default NavBar;
