import { Grid, Container, Typography } from "@mui/material";
import AppLayout from "../components/layout/AppLayout";
import FeatureCard from "../components/FeatureCard";

export default function DashboardEmployee() {
  return (
    <AppLayout>
      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Employee Dashboard
        </Typography>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          Your dashboard is coming soon! Here are the features we are working
          on:
        </Typography>

        <Grid container spacing={3} mt={2}>
          {/* Daily Attendance */}
          <Grid item xs={12} md={6} lg={4}>
            <FeatureCard
              title="Daily Attendance"
              description={
                <>
                  View your check-in and check-out times
                  <br />
                  Track your present/absent status
                </>
              }
            />
          </Grid>

          {/* Work Hours */}
          <Grid item xs={12} md={6} lg={4}>
            <FeatureCard
              title="Monthly Work Hours"
              description={
                <>
                  See total hours worked this month
                  <br />
                  Check your productivity trends
                </>
              }
            />
          </Grid>

          {/* Leave Tracker */}
          <Grid item xs={12} md={6} lg={4}>
            <FeatureCard
              title="Leaves"
              description={
                <>
                  Check your used and remaining leaves
                  <br />
                  Apply for leave and track approval status
                </>
              }
            />
          </Grid>

          {/* Notifications */}
          <Grid item xs={12} md={6} lg={4}>
            <FeatureCard
              title="Notifications"
              description={
                <>
                  Receive alerts for important updates
                  <br />
                  Check company-wide announcements
                </>
              }
            />
          </Grid>

          {/* Profile Management */}
          <Grid item xs={12} md={6} lg={4}>
            <FeatureCard
              title="Profile Management"
              description={
                <>
                  Update your personal information
                  <br />
                  Manage your contact details and settings
                </>
              }
            />
          </Grid>
        </Grid>
      </Container>
    </AppLayout>
  );
}
