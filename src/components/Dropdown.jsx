import React, {useContext} from 'react';
import { FaGlobeAmericas } from "react-icons/fa";
import Translations from "./Translations";
import {
    Menu,
    MenuList,
    MenuItem,
    MenuButton,
    IconButton,
  } from "@chakra-ui/react";
export const Dropdown = () => {
  const {changeLanguage} = Translations();
  return (
    <Menu>
      <MenuButton sx={{
        backgroundColor:'transparent',
        _hover:{
          backgroundColor:'transparent',
        },
        _active:{
          backgroundColor:'transparent',
        }
      }}as={IconButton} icon={<FaGlobeAmericas color="black" size={30} />}>
        Change Language
      </MenuButton>
      <MenuList>
        <MenuItem onClick={()=>changeLanguage('pt')}>Português</MenuItem>
        <MenuItem onClick={()=>changeLanguage('es')}>Espanhol</MenuItem>
        <MenuItem onClick={()=>changeLanguage('en')}>Inglês</MenuItem>
        <MenuItem onClick={()=>changeLanguage('fr')}>Frances</MenuItem>
        <MenuItem onClick={()=>changeLanguage('it')}>Italiano</MenuItem>
      </MenuList>
    </Menu>
  )
}
