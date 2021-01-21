import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import {StyledFormControl} from "./AppStyle";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import React, {useContext, useState} from "react";
import {LinkContext} from "./linkState";
import {groups} from "./App";

export const AddForm = ({open, handleClose, handleOpen}) => {
    const {addLink} = useContext(LinkContext)
    const [linkName, setLinkName] = useState("")
    const [linkHref, setLinkHref] = useState("")
    const [groupName, setGroupName] = useState('');

    const handleChange = (event) => {
        setGroupName(event.target.value);
    };
    // const handleOpen = () => {
    //     setOpen(true);
    // };
    // const handleClose = () => {
    //     setOpen(false);
    // };
    return (
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add link</DialogTitle>
                <DialogContent>
                    <TextField
                        margin="dense"
                        id="linkName"
                        label="Link name"
                        type="name"
                        fullWidth
                        onChange={e => setLinkName(e.target.value)}
                        value={linkName}
                    />
                    <TextField
                        margin="dense"
                        id="linkHref"
                        label="Link href"
                        type="href"
                        fullWidth
                        onChange={e => setLinkHref(e.target.value)}
                        value={linkHref}
                    />
                    <StyledFormControl>
                        <InputLabel id="open-select-label">Group</InputLabel>
                        <Select
                            labelId="open-select-label"
                            id="open-select"
                            onOpen={handleOpen}
                            value={groupName}
                            onChange={handleChange}
                        >
                            {groups.map((group, index) => {
                                if (group.name !== "All") {
                                    return <MenuItem key={index} value={group.name}>{group.name}</MenuItem>
                                }
                            })}
                        </Select>
                    </StyledFormControl>
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" onClick={() => {
                        addLink(linkName, linkHref, groupName)
                        handleClose()
                    }} color="primary">
                        Add Link
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

