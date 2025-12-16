import AppLayout from "../components/layout/AppLayout";
import FeatureCard from "../components/FeatureCard";
import { Box, Typography, Grid, Alert } from "@mui/material";

export default function DashboardAdmin() {
  return (
    <AppLayout>
      <Box>
        <Typography variant="h4" gutterBottom>
          Admin Dashboard
        </Typography>

        <Alert severity="info" sx={{ mb: 4 }}>
          The admin dashboard is under active development. The following
          features will be available soon.
        </Alert>

        <Grid container spacing={3}>
          {/* Attendance */}
          <Grid item xs={12} md={6} lg={4}>
            <FeatureCard
              title="Attendance Overview"
              description="View daily attendance, status, and late arrivals."
            />
          </Grid>

          {/* Work Hours */}
          <Grid item xs={12} md={6} lg={4}>
            <FeatureCard
              title="Monthly Work Hours"
              description="Track total hours worked, average daily hours, <br /> and productivity trends per employee."
            />
          </Grid>

          {/* Leave Management */}
          <Grid item xs={12} md={6} lg={4}>
            <FeatureCard
              title="Leave Management"
              description="Manage leave allocation, approvals, used leaves, and remaining balances."
            />
          </Grid>

          {/* Overtime */}
          <Grid item xs={12} md={6} lg={4}>
            <FeatureCard
              title="Overtime Tracking"
              description="Monitor overtime hours, overtime days, and payroll impact."
            />
          </Grid>

          {/* Employees */}
          <Grid item xs={12} md={6} lg={4}>
            <FeatureCard
              title="Employee Management"
              description="Add, update, and manage employee profiles and roles."
            />
          </Grid>

          {/* Live Status */}
          <Grid item xs={12} md={6} lg={4}>
            <FeatureCard
              title="Live Employee Status"
              description="See who is currently clocked in and working in real time."
            />
          </Grid>

          {/* Weekly Reports */}
          <Grid item xs={12} md={6} lg={4}>
            <FeatureCard
              title="Weekly Reports"
              description="Analyze weekly work patterns and attendance summaries."
            />
          </Grid>

          {/* Compliance */}
          <Grid item xs={12} md={6} lg={4}>
            <FeatureCard
              title="Compliance & Policies"
              description="Configure work-hour policies, alerts, and compliance rules."
            />
          </Grid>

          {/* Security */}
          <Grid item xs={12} md={6} lg={4}>
            <FeatureCard
              title="Security & Access"
              description="Manage login sessions, roles, and account security."
            />
          </Grid>
        </Grid>

        <Box sx={{ mt: 4 }}>
          <Typography variant="body2" color="text.secondary">
            🚀 These features will be built incrementally using real-time punch
            data, employee records, and organizational policies.
          </Typography>
        </Box>
      </Box>
    </AppLayout>
  );
}
