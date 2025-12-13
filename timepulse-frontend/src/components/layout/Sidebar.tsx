import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Divider,
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
        "& .MuiDrawer-paper": { width: drawerWidth, boxSizing: "border-box" },
      }}
    >
      <List>
        <ListItemButton onClick={() => navigate("/employee")}>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
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
