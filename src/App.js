import React, {useContext, useEffect, useState} from 'react';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import WorkIcon from '@material-ui/icons/Work';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import MovieIcon from '@material-ui/icons/Movie';
import GradeIcon from '@material-ui/icons/Grade';
import Link from "@material-ui/core/Link";
import Card from "@material-ui/core/Card";
import {CardContent} from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import {LinkContext} from "./linkState";
import IconButton from "@material-ui/core/IconButton";
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import TextField from "@material-ui/core/TextField";
import {
    AppContent,
    HideToolbar,
    LinkContent,
    Root,
    StyledAppBar,
    StyledDrawer,
    StyledToolbar,
    StyledTooltip,
    useStyles
} from "./AppStyle";
import {AddForm} from "./AddForm";


export const groups = [
    {
        name: "All",
        icon: <GradeIcon/>,
    },
    {
        name: "Work",
        icon: <WorkIcon/>,
    },
    {
        name: "Games",
        icon: <SportsEsportsIcon/>,
    },
    {
        name: "Music",
        icon: <PlayCircleOutlineIcon/>,
    },
    {
        name: "Movies",
        icon: <MovieIcon/>,
    },
]

const App = () => {
    const {filterLinks, links, currentLink, setLinks} = useContext(LinkContext)
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [findLink, setFindLink] = useState('');
    useEffect(() => {
        const storageLinks = JSON.parse(localStorage.getItem('links'))
        setLinks(storageLinks)
    }, [])
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <Root>
            <StyledAppBar position="fixed" color="inherit">
                <StyledToolbar>
                    <Typography variant="h6" noWrap>
                        {currentLink} links
                    </Typography>
                    <AppContent>
                        <TextField
                            label="Search"
                            variant="outlined"
                            margin="dense"
                            id="findLink"
                            onChange={e => setFindLink(e.target.value)}
                            value={findLink}
                        />
                        <StyledTooltip title="add link" placement="top">
                            <IconButton onClick={handleClickOpen}>
                                <PlaylistAddIcon/>
                            </IconButton>
                        </StyledTooltip>
                    </AppContent>
                    <AddForm open={open} handleOpen={handleOpen} handleClose={handleClose}/>
                </StyledToolbar>
            </StyledAppBar>
            <StyledDrawer variant="permanent" anchor="left">
                <HideToolbar/>
                <Divider/>
                <List style={{width: 240}}>
                    {groups.map(item => <ListItem button key={item.name} onClick={() => filterLinks(item.name)}>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.name}/>
                    </ListItem>)}
                </List>
            </StyledDrawer>
            <LinkContent>
                <HideToolbar/>
                {links.filter(val => {
                    if (findLink === "") {
                        return val
                    } else if (val.name.toLowerCase().includes(findLink.toLowerCase())) {
                        return val
                    }
                }).map((link, index) =>
                    link.visible ?
                        <Card key={index} style={{marginBottom: 5, boxShadow: "none"}}>
                            <CardActionArea>
                                <CardContent>
                                    <Typography>{link.name}</Typography>
                                    <Link href={link.link}>{link.link}</Link>
                                </CardContent>
                            </CardActionArea>
                        </Card> : null)}
            </LinkContent>
        </Root>
    );
}

export default App;
