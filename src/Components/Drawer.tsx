import { Drawer, Toolbar } from "@mui/material";
import React from "react";


const drawerWidth = 300;
const drawerOpenButton = 50;

export function SideDrawer(props: any) {

    const [open, setOpen] = React.useState(true);

    const triggerDrawer = () => {
        setOpen(!open);
      };

  return (

    <>
        <Drawer
            anchor={'right'}
            onClose={() => setOpen(false)}
            open={open}

            variant="persistent"

            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
            }}
            >
                <Toolbar />
                <button onClick={() => triggerDrawer()}> &gt;&gt; </button>
                {<div>Yessir</div>}
            <Toolbar />
        </Drawer>

        <Drawer
            anchor={'right'}
            onClose={() => setOpen(false)}
            open={!open}

            variant="persistent"

            sx={{
                width: drawerOpenButton,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { 
                    width: drawerOpenButton, 
                    boxSizing: 'border-box' ,
                    height: 'auto',
                    border: 'none',
                },
            }}
            >
            <Toolbar />
                <button onClick={() => triggerDrawer()}> &lt;&lt; </button>
            <Toolbar />
        </Drawer>
    </>

    
  );
}