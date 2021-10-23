import React from 'react'
import { 
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider
} from '@material-ui/core'
import HomeIcon from '@mui/icons-material/Home';
import HelpIcon from '@mui/icons-material/Help';
import EngineeringIcon from '@mui/icons-material/Engineering';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArticleIcon from '@mui/icons-material/Article';

export default function Lista() {
    return (
        <div>
            <List component = 'nav'>

                <ListItem button>
                    <ListItemIcon>
                        <HomeIcon/>
                    </ListItemIcon>
                    <ListItemText primary='HOME'/>
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <HelpIcon/>
                    </ListItemIcon>
                    <ListItemText primary='TONGOY'/>
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <EngineeringIcon/>
                    </ListItemIcon>
                    <ListItemText primary='EIC'/>
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <CalendarTodayIcon/>
                    </ListItemIcon>
                    <ListItemText primary='OFERTA ACADEMICA'/>
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <ArticleIcon/>
                    </ListItemIcon>
                    <ListItemText primary='MALLAS CURRICULARES'/>
                </ListItem>
                <Divider/>
            </List>
        </div>
    )
}
