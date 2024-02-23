import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../Theme";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box mb={{ xs: "20px", md: "30px" }}>
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{
          m: "0 0 5px 0",
          fontSize: { xs: "2rem", md: "3rem" },
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="h5"
        color='#009744'
        sx={{
          fontSize: { xs: "1.5rem", md: "2rem" }, 
        }}
      >
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
