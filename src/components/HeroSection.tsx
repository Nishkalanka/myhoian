import {
  Container,
  Box,
  Typography,
  Grid,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
  useTheme,
} from "@mui/material";
import { useTranslation } from "react-i18next";

import logo from "../assets/img/logo.svg";

import ReactCountryFlag from "react-country-flag";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import { useThemeContext } from "../contexts/ThemeContexts";
import MapComponent from "./mapComponent";

function HeroSection() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const theme = useTheme();

  // Получаем функцию переключения темы и текущий режим из контекста
  const { toggleColorMode, mode } = useThemeContext();

  // Функция для смены языка
  const changeLanguage = (event: any) => {
    // Меняем тип event на any или Event
    i18n.changeLanguage(event.target.value as string);
  };

  const backgroundPattern =
    mode === "dark"
      ? `radial-gradient(${theme.palette.grey[800]} 1px, ${theme.palette.background.default} 1px)`
      : `radial-gradient(${theme.palette.grey[300]} 1px, ${theme.palette.background.default} 1px)`;

  const footerBorderColor =
    mode === "dark" ? theme.palette.grey[800] : theme.palette.grey[300];

  return (
    <Box
      component="section"
      id="hero"
      sx={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          height: "100vh",
          width: "100vw",
        }}
      >
        <Grid
          container
          sx={{
            height: "100%",
            width: "100%",
          }}
        >
          <Grid
            item
            xs={12}
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box component="header" sx={{ p: 2, pb: 0 }}>
              <Stack direction="row" alignItems="center" spacing={1.5}>
                <img
                  src={logo}
                  alt="Логотип вашего сайта"
                  style={{
                    width: "auto",
                    height: "36px",
                    display: "block",
                  }}
                />
                <Typography
                  variant="h6"
                  component="span"
                  sx={{
                    fontWeight: 600,
                    width: "100%",
                  }}
                >
                  {t("logoTitle")}
                </Typography>
                <FormControl variant="outlined" sx={{ minWidth: 80 }}>
                  <InputLabel id="language-select-label"></InputLabel>{" "}
                  <Select
                    labelId="language-select-label"
                    id="language-select"
                    value={i18n.language}
                    onChange={changeLanguage}
                    size="small"
                    sx={{
                      "& .MuiSelect-select": {
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      },
                    }}
                  >
                    <MenuItem value="ru">
                      <ReactCountryFlag
                        countryCode="RU"
                        svg
                        style={{
                          width: "1.5em",
                          height: "1.5em",
                          marginRight: "8px",
                        }}
                        title="RU"
                      />{" "}
                    </MenuItem>
                    <MenuItem value="en">
                      <ReactCountryFlag
                        countryCode="US"
                        svg
                        style={{
                          width: "1.5em",
                          height: "1.5em",
                          marginRight: "8px",
                        }}
                        title="US"
                      />{" "}
                    </MenuItem>
                  </Select>
                </FormControl>

                <IconButton
                  sx={{ ml: 1, color: "" }}
                  onClick={toggleColorMode}
                  color="inherit"
                >
                  {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
              </Stack>
            </Box>
            <Stack
              spacing={2}
              sx={{
                alignItems: "flex-start",
                p: 2,
                flexGrow: "1",
                justifyContent: "center",
              }}
            >
              <MapComponent />
            </Stack>
            <Box
              component="footer"
              sx={{
                p: 2,
              }}
            >
              <Typography variant="body2" color="text.secondary">
                © {new Date().getFullYear()} {t("footer.copyright")}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default HeroSection;
