import {makeStyles} from "@material-ui/core/styles";
import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import FormControl from "@material-ui/core/FormControl";
import Drawer from "@material-ui/core/Drawer";

const drawerWidth = 240;
export const StyledAppBar = styled(AppBar)({
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    boxShadow: "none",
    borderBottom: "1px solid #e0e0e0",
})
export const StyledToolbar = styled(Toolbar)({
    // width: "100%",
    display: "flex",
    justifyContent: "space-between",
})
export const StyledTooltip = styled(Tooltip)({
    marginLeft: 20,
})
export const StyledFormControl = styled(FormControl)({
    minWidth: 120,
})
export const StyledDrawer = styled(Drawer)({
    width: drawerWidth,
    flexShrink: 0,
    marginTop: 40,
})
export const LinkContent = styled.div({
    flexGrow: 1,
    padding: 24,
})
export const AppContent = styled.div({
    display: "flex",
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "flex-end",
})
export const HideToolbar = styled.div({
    height: 64
})
export const Root = styled.div({
    display: 'flex',
    height: '100vh',
    overflow: "auto",
    backgroundColor: '#fafafa',
})
export const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
}));