import { Typography, Card, CardContent, Chip } from "@mui/material";

const FeatureCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <Card sx={{ height: "100%" }}>
    <CardContent>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
      <Chip label="Coming Soon" size="small" color="warning" sx={{ mt: 2 }} />
    </CardContent>
  </Card>
);

export default FeatureCard;
