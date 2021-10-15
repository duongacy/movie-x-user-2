import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { Link } from 'react-router-dom';
import {
    Avatar,
    Divider,
    ListItemIcon,
    FormControlLabel,
    RadioGroup,
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    MenuItem,
    Menu,
    Radio,
    ListItemText,
    ListItem,
    List,
    Drawer,
} from '@mui/material';
import {
    AccountCircle,
    Menu as MenuIcon,
    Logout as LogoutIcon,
    Inbox as InboxIcon,
} from '@mui/icons-material';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function Header() {
    const { i18n, t } = useTranslation(['common']);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const menuId = 'primary-search-account-menu';
    const open = Boolean(anchorEl);
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleChangeLanguage = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        i18n.changeLanguage(value);
    };
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
                elevation: 0,
                sx: {
                    'width': '200px',
                    'overflow': 'visible',
                    'mt': 1.5,
                    '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                    },
                    '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                    },
                },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
            <MenuItem>
                <Avatar /> YLVN
            </MenuItem>
            <Divider />
            <MenuItem>
                <ListItemIcon>
                    <LogoutIcon fontSize="small" />
                </ListItemIcon>
                {t('common:sign-out')}
            </MenuItem>
        </Menu>
    );

    const [leftDrawer, setLeftDrawer] = React.useState(false);
    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        setLeftDrawer(open);
    };

    const list = (anchor: Anchor) => (
        <Box
            sx={{
                width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
                height: '100vh',
            }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                <ListItem button color="white">
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary={t('common:showtimes')} />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary={t('common:cinema')} />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary={t('common:news')} />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary={t('common:application')} />
                </ListItem>
            </List>
        </Box>
    );
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar sx={{ paddingY: '1rem' }}>
                    <React.Fragment>
                        <IconButton
                            onClick={toggleDrawer(true)}
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{
                                display: {
                                    xs: 'block',
                                    md: 'none',
                                },
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Drawer anchor="left" open={leftDrawer} onClose={toggleDrawer(false)}>
                            {list('left')}
                        </Drawer>
                    </React.Fragment>

                    <Typography
                        variant="h3"
                        noWrap
                        component="div"
                        color="error"
                        sx={{
                            display: { xs: 'none', md: 'block' },
                            fontWeight: '700',
                        }}
                    >
                        Movie YDT
                    </Typography>
                    <Box
                        sx={{
                            display: { md: 'flex', xs: 'none' },
                            gap: '1rem',
                            flex: 'auto',
                            justifyContent: 'center',
                            alignItems: 'center',
                            textAlign: 'center',
                        }}
                    >
                        <Typography variant="h6">
                            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
                                {t('common:showtimes')}
                            </Link>
                        </Typography>
                        <Typography variant="h6">
                            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
                                {t('common:cinema')}
                            </Link>
                        </Typography>
                        <Typography variant="h6">
                            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
                            {t('common:news')}
                            </Link>
                        </Typography>
                        <Typography variant="h6">
                            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
                            {t('common:application')}
                            </Link>
                        </Typography>
                    </Box>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: 'flex' }}>
                        <RadioGroup
                            row
                            name="change-language"
                            defaultValue={i18n.language}
                            onChange={handleChangeLanguage}
                        >
                            <FormControlLabel
                                value="en"
                                control={<Radio size="small" color="error" />}
                                label="EN"
                            />
                            <FormControlLabel
                                value="vi"
                                control={<Radio size="small" color="error" />}
                                label="VI"
                            />
                        </RadioGroup>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMenu}
        </Box>
    );
}
