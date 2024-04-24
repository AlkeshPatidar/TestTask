import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Hearder from './Header';
import { Typography } from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import useMediaQuery from '@mui/material/useMediaQuery';

const drawerWidth = 230;

export default function SideBar() {
  
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [IsselectedCategory, setIsSelectedCategory] = React.useState(false);
  const [subCateGories, setSubCategories] = React.useState([]);
  const isMobile = useMediaQuery('(max-width:600px)');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    switch (category) {
      case 'Direct by Frame':
        setSubCategories(Subcategory);
        break;
      case 'Self made':
        setSubCategories(selfMadeSubCategory);
        break;
      case 'Rental Items':
        setSubCategories(rentalItemSubcategory);
        break;
      default:
        setSubCategories([]);
    }
    setIsSelectedCategory(true);
  };

  const handleBack = () => {
    setIsSelectedCategory(false);
  };

  const renderSubcategories = () => {
    return (
      <List sx={{ marginTop: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
          { !isMobile &&
            <Typography sx={{ margin: 2 }}>
              {selectedCategory}
            </Typography>
          }

          <KeyboardBackspaceIcon
            sx={{ color: 'skyblue', marginLeft: isMobile ? -1 : 1, cursor: 'pointer' }}
            onClick={handleBack}
          />
        </Box>

        {subCateGories?.map((text, index) => (
          <ListItemButton key={text} disablePadding onClick={() => handleCategoryClick(text)}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        ))}
      </List>
    );
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Hearder />
      </AppBar>

      <Drawer
        variant="permanent"

        sx={{
          width: isMobile ? 0 : drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': { width: isMobile ? drawerWidth / 4 : drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Box sx={{ marginTop: 5 }}>
          {!IsselectedCategory && (
            <List sx={{}}>
              {category.map((text, index) => (
                <ListItemButton key={text} disablePadding onClick={() => handleCategoryClick(text)}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  {/* <ListItemText primary={text} /> */}
                  {isMobile ? null : <ListItemText primary={text} />}
                </ListItemButton>
              ))}
            </List>
          )}

          {IsselectedCategory && renderSubcategories()}
        </Box>
      </Drawer>
    </Box>
  );
}


const category = [
  'Direct by Frame',
  'Self made',
  'Rental Items',
  'Real State',
  'Vehicle',
  'Mobile',
  'Furnitures',
  'Fashion',
  'Electronics',
  'Coming soon',
  'Coming soon',
  'Coming soon',
];

const Subcategory = [
  'vegetables',
  'foods',
  'anaj/grain',
  'Egg',
  'Fish',
  'coming soon',
];

const selfMadeSubCategory = [
  'Artificial jwellary',
  'clothing/stitching',
  'gift basket',
  'handbag',
  'home decor',
  'coming soon',
];

const rentalItemSubcategory = [
  'AC',
  'Computer',
  'Costume Cloth',
  'Fridge',
  'Furniture',
  'Home Applience',
  'Invertor',
  'Coming soon',
];
