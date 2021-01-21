const FILTER_LINKS = "FILTER_LINKS"
const ADD_LINK = "ADD_LINK"
const SET_LINKS = "SET_LINKS"

export const filterLinksList = (groupName) => ({type: FILTER_LINKS, groupName})
export const addNewLink = (linkName, linkHref, groupName) => ({type: ADD_LINK, linkName, linkHref, groupName})
export const getLinks = (storageLinks) => ({type: SET_LINKS, storageLinks})

export const linkReducer = (state, action) => {
    switch (action.type) {
        case SET_LINKS: {
            const newLinks = action.storageLinks
            if (newLinks) {
                return {
                    ...state,
                    links: action.storageLinks
                }
            } else {
                return {
                    ...state
                }
            }
        }
        case FILTER_LINKS: {
            return {
                ...state,
                currentLink: action.groupName,
                links: state.links.map(link => {
                    if (action.groupName === "All") {
                        return {...link, visible: true}
                    }
                    if (link.group !== action.groupName) {
                        return {...link, visible: false}
                    } else {
                        return {...link, visible: true}
                    }
                })
            }
        }
        case ADD_LINK: {
            const newLink = {
                name: action.linkName,
                link: action.linkHref,
                group: action.groupName,
                visible: true,
            }
            state.links.push(newLink)
            return {
                ...state,
                // links: [...state.links, newLink]
                links: state.links,
            }
        }
        default:
            return state
    }
}