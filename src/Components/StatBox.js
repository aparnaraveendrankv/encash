import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../Theme";
import ProgressCircle from "./ProgressCircle";

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
<Box width="100%" m="0 15px"> {/* Reduced margin for smaller screens */}
  <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} justifyContent="space-between">
    <Box mb={{ xs: '10px', sm: '0' }}> {/* Add margin-bottom for smaller screens */}
      {icon}
      <Typography variant="h4" fontWeight="bold" sx={{ color: colors.grey[100] }}>
        {title}
      </Typography>
    </Box>
    <Box ml={{ xs: '0', sm: '10px' }}> {/* Add margin-left for smaller screens */}
      {/* <ProgressCircle progress={progress} /> */}
    </Box>
  </Box>
  <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} justifyContent="space-between" mt="2px">
    <Typography variant="h5" sx={{ color: '#009744', mb: { xs: '10px', sm: '0' } }}> {/* Add margin-bottom for smaller screens */}
      {subtitle}
    </Typography>
    <Typography variant="h5" fontStyle="italic" sx={{ color:'#009744'}}>
      {increase}
    </Typography>
  </Box>
</Box>

  );
};

export default StatBox;