import { useEffect, useState } from "react";
import AppLayout from "../components/layout/AppLayout";
import {
  Box,
  Button,
  Typography,
  CircularProgress,
  Alert,
} from "@mui/material";

type PunchStatus = {
  clocked_in: boolean;
  clocked_out?: boolean;
  clock_in_time?: string;
  clock_out_time?: string;
};

export default function Punchtime() {
  const [status, setStatus] = useState<PunchStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const token = localStorage.getItem("token");

  const calculateHours = (clockIn: string, clockOut: string) => {
    const start = new Date(clockIn);
    const end = new Date(clockOut);

    const diffMs = end.getTime() - start.getTime();
    const diffHours = diffMs / (1000 * 60 * 60);

    return diffHours.toFixed(2);
  };

  useEffect(() => {
    fetchPunchStatus();
  }, []);

  const fetchPunchStatus = async () => {
    try {
      const res = await fetch(
        "http://localhost:8000/api/employee/punch/status",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await res.json();

      console.log(data);

      if (!data.success) {
        setError("Unable to fetch punch status");
        return;
      }
      setStatus(data.data);
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleClockIn = async () => {
    await fetch("http://localhost:8000/api/employee/clockin", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    fetchPunchStatus();
  };

  const handleClockOut = async () => {
    await fetch("http://localhost:8000/api/employee/clockout", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    fetchPunchStatus();
  };
  return (
    <AppLayout>
      <br />
      <Box sx={{ maxWidth: 500 }}>
        <Typography variant="h5" mb={3}>
          Punch Time
        </Typography>

        {loading && <CircularProgress />}

        {error && <Alert severity="error">{error}</Alert>}

        {!loading && status && (
          <>
            {!status.clocked_in && (
              <Button
                variant="contained"
                color="success"
                fullWidth
                onClick={handleClockIn}
              >
                Clock In
              </Button>
            )}

            {status.clocked_in && !status.clocked_out && (
              <>
                <Alert severity="info" sx={{ mb: 2 }}>
                  Clocked in at {status.clock_in_time}
                </Alert>
                <Button
                  variant="contained"
                  color="error"
                  fullWidth
                  onClick={handleClockOut}
                >
                  Clock Out
                </Button>
              </>
            )}

            {status.clocked_in && status.clocked_out && (
              <Alert severity="success">
                <Typography variant="subtitle1" fontWeight="bold">
                  Work completed for today
                </Typography>

                <Typography>Clock In: {status.clock_in_time}</Typography>

                <Typography>Clock Out: {status.clock_out_time}</Typography>

                <Typography sx={{ mt: 1 }}>
                  Total Hours Worked:{" "}
                  <strong>
                    {calculateHours(
                      status.clock_in_time!,
                      status.clock_out_time!
                    )}{" "}
                    hrs
                  </strong>
                </Typography>
              </Alert>
            )}
          </>
        )}
      </Box>
    </AppLayout>
  );
}
