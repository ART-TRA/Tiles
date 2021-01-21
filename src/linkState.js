import React, {createContext, useReducer} from "react";
import {addNewLink, filterLinksList, getLinks, linkReducer} from "./linkReducer";

const linkState = {
    currentLink: "All",
    links: [
        {
            name: "React",
            link: "https://reactjs.org/",
            group: "Work",
            visible: true,
        },
        {
            name: "MaterialUI",
            link: "https://material-ui.com/",
            group: "Work",
            visible: true,
        },
        {
            name: "HeadHunter",
            link: "https://krasnodar.hh.ru/",
            group: "Work",
            visible: true,
        },
        {
            name: "Vue",
            link: "https://ru.vuejs.org/",
            group: "Work",
            visible: true,
        },
        {
            name: "Angular",
            link: "https://angularjs.org/",
            group: "Work",
            visible: true,
        },
        {
            name: "GitHub",
            link: "https://github.com/",
            group: "Work",
            visible: true,
        },
        {
            name: "Steam",
            link: "https://store.steampowered.com/",
            group: "Games",
            visible: true,
        },
        {
            name: "Twitch",
            link: "https://www.twitch.tv/",
            group: "Games",
            visible: true,
        },
        {
            name: "GeForce",
            link: "https://gfn.ru/",
            group: "Games",
            visible: true,
        },
        {
            name: "KojimaProductions",
            link: "http://www.kojimaproductions.jp/en/",
            group: "Games",
            visible: true,
        },
        {
            name: "Stalker2",
            link: "https://www.stalker2.com/",
            group: "Games",
            visible: true,
        },
        {
            name: "SoundCloud",
            link: "https://soundcloud.com/discover",
            group: "Music",
            visible: true,
        },
        {
            name: "Spotify",
            link: "https://open.spotify.com/",
            group: "Music",
            visible: true,
        },
        {
            name: "YouTube",
            link: "https://www.youtube.com/",
            group: "Music",
            visible: true,
        },
        {
            name: "Empathy Test",
            link: "https://www.empathytest.com/",
            group: "Music",
            visible: true,
        },
        {
            name: "Sloati",
            link: "https://sloati.bandcamp.com/",
            group: "Music",
            visible: true,
        },
        {
            name: "Kinomax",
            link: "https://kinomax.ru/",
            group: "Movies",
            visible: true,
        },
        {
            name: "KinoPoisk",
            link: "https://hd.kinopoisk.ru/",
            group: "Movies",
            visible: true,
        },
        {
            name: "KinoMonitor",
            link: "https://kinomonitor.ru/",
            group: "Movies",
            visible: true,
        },
        {
            name: "Yuri The Professional",
            link: "https://www.youtube.com/channel/UCCnvz2rVBkQajGUiekDQ3Hg",
            group: "Movies",
            visible: true,
        },

    ]
}

export const LinkContext = createContext();
export const LinkState = (props) => {
    const [state, dispatch] = useReducer(linkReducer, linkState)
    const filterLinks = (groupName) => {
        dispatch(filterLinksList(groupName))
    }
    const addLink = (linkName, linkHref, groupName) => {
        dispatch(addNewLink(linkName, linkHref, groupName))
        localStorage.setItem('links', JSON.stringify(state.links))
    }
    const setLinks = (storageLinks) => {
        dispatch(getLinks(storageLinks))
    }
    return (
        <LinkContext.Provider value={{
            links: state.links,
            currentLink: state.currentLink,
            filterLinks,
            addLink,
            setLinks,
        }}>
            {props.children}
        </LinkContext.Provider>
    )
}