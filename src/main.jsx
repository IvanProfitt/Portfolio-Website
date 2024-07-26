import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Resume from "./Resume";
import ProjectsPage from "./projects/ProjectsPage";
import Blog from "./blog/Blog";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import PostPage from "./blog/PostPage";
import AboutMe from "./AboutMeSection";

const theme = createTheme({
    typography: {
      fontFamily: 'Noto Serif, Public Sans, sans-serif',
      h6: {
        fontFamily: 'Noto Serif, serif',
      },
      h5: {
        fontFamily: 'Noto Serif, serif', 
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          html: {
            fontSize: '62.5%',
            fontFamily: 'Noto Serif, Public Sans, sans-serif',
            color: 'black',
            width: '100%',
          },
          body: {
            margin: 0,
            width: '100%',
            boxSizing: 'border-box',
            fontFamily: 'Noto Serif, Public Sans, sans-serif',
            backgroundColor: '#f5f4ed',
          },
          a: {
            textDecoration:'none',
            color:'black'
          },
        },
      },
    },
  });

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
        <CssBaseline />
            <HashRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/post/:slug" element={<PostPage />} />
                    <Route path="/about" element={<AboutMe />} />
                </Routes>
            </HashRouter>
        </ThemeProvider>
    </React.StrictMode>
);
