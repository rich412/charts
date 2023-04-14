import { Box, Stack } from "@mui/material";

interface ICardProps {
  left: React.ReactNode;
  right: React.ReactNode;
}

const Card: React.FC<ICardProps> = ({ left, right }) => {
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
      <Box sx={{ flex: 1 }}>{left}</Box>
      <Box
        sx={{
          flex: 4,
          height: "400px",
        }}
      >
        {right}
      </Box>
    </Stack>
  );
};

export default Card;
