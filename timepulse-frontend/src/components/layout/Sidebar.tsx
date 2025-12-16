import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Divider,
  Typography,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const drawerWidth = 220;

export default function Sidebar() {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        height: "100vh",
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          height: "100vh",
        },
      }}
    >
      <Typography variant="h6" fontWeight="bold">
        LOGO
      </Typography>
      <Divider />
      <List>
        {user?.type === 0 && (
          <>
            <ListItemButton onClick={() => navigate("/admin")}>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </>
        )}
        {user?.type === 10 && (
          <>
            <ListItemButton onClick={() => navigate("/employee")}>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </>
        )}
        <ListItemButton onClick={() => navigate("/punchtime")}>
          <ListItemText primary="Punch Time" />
        </ListItemButton>
        <ListItemButton onClick={() => navigate("/viewhistory")}>
          <ListItemText primary="View History" />
        </ListItemButton>
        <Divider />
        {user?.type === 0 && (
          <>
            <ListItemButton onClick={() => navigate("/admin/employees")}>
              <ListItemText primary="Employees" />
            </ListItemButton>
            <ListItemButton onClick={() => navigate("/admin/reports")}>
              <ListItemText primary="Reports" />
            </ListItemButton>
          </>
        )}
      </List>
    </Drawer>
  );
}
