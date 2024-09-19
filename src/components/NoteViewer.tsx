import { Component, ReactNode } from "react";
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';

const noteViewerBgColor = deepOrange[500];

export class NoteViewer extends Component<{note: string}> {
    render(): ReactNode {
        return(
            <>
                <Avatar sx={{ bgcolor: noteViewerBgColor }}>{this.props.note}</Avatar>
            </>
        )
    }
}