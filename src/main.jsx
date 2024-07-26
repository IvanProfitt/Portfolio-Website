import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Resume from "./Resume";
import ProjectsPage from "./projects/ProjectsPage";
import Blog from "./blog/Blog";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import PostPage from "./blog/PostPage";
import AboutMe from "./AboutMeSection";
import Category from "./blog/Category";

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

const router = createHashRouter ([
    {
    path:"/",
    element: <App />,
    },
    {
    path:"/resume",
    element:<Resume />,
    },
    {
    path:"/projects",
    element:<ProjectsPage />,
    },
    {
    path:"/blog",
    element:<Blog />,
    },
    {
    path: "/blog/post/:slug",
    element: <PostPage />, 
    },
    {
    path: "/blog/category/:categoryId",
    element: <Category />, 
    },
    {
    path:"/about",
    element:<AboutMe />,
    },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
        <CssBaseline />
            <RouterProvider router={router} />
        </ThemeProvider>
    </React.StrictMode>
);
