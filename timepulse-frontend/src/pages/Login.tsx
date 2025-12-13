import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container, Box, Typography } from "@mui/material";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8000/api/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!data.success) {
        setError(data.message);
        return;
      }

      const user = data.data.user;
      const token = data.token;

      login(user, token);

      if (user.type === 0) {
        navigate("/admin");
      } else {
        navigate("/employee");
      }
    } catch (err) {
      console.log(err);
      setError("Something went wrong!");
    }
  };
  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ mt: 8, p: 4, boxShadow: 3, borderRadius: 2 }}
      >
        <Typography variant="h5" mb={3}>
          Login
        </Typography>
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && (
          <Typography color="error" mt={1}>
            {error}
          </Typography>
        )}
        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
          Login
        </Button>
      </Box>
    </Container>
  );
}
