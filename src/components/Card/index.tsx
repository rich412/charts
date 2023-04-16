import { Box, Stack, Typography } from "@mui/material";

interface ICardProps {
  title: string;
  children: React.ReactNode;
}

const Card: React.FC<ICardProps> = ({ title, children }) => {
  return (
    <Stack
      direction="row"
      gap={2}
      sx={{
        width: "100%",
        border: "1px solid #000",
        borderRadius: "4px",
        padding: "2rem",
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Typography variant="h6">{title}</Typography>
      </Box>
      <Box
        sx={{
          flex: 4,
          height: "400px",
        }}
      >
        {children}
      </Box>
    </Stack>
  );
};

export default Card;
