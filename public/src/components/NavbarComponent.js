import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function NavbarComponent() {

    const sections = [
        {
            title: "Login",
            url: "/login"
        },
        {
            title: "register",
            url: "/register"
        },
        {
            title: "Home",
            url: "/main"
        },
        {
            title: "Create Task",
            url: "/TaskForm"
        },
        {
            title: "Who are we",
            url: "/who-are-we"
        },
        {
            title: "About Us",
            url: "/about-us"
        },
        {
            title: "Contribute",
            url: "/contribute"
        },
        {
            title: "Support",
            url: "/support"
        },
        
    ]

    return (
        <React.Fragment>
            <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Button size="small">Subscribe</Button>
                <Typography
                component="h2"
                variant="h5"
                color="inherit"
                align="center"
                noWrap
                sx={{ flex: 1 }}
                >
                Enigma
                </Typography>
                <Button variant="outlined" size="small">
                Sign up
                </Button>
            </Toolbar>
            <Toolbar
                component="nav"
                variant="dense"
                sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
            >
                {sections.map((section) => (
                <Link
                    color="inherit"
                    noWrap
                    key={section.title}
                    variant="body2"
                    href={section.url}
                    sx={{ p: 1, flexShrink: 0 }}
                >
                    {section.title}
                </Link>
                ))}
            </Toolbar>
            </React.Fragment>
    )


    return (
        <div style={{
            height: "60px",
            width:"100%",
            backgroundColor: "cyan"
        }}>
            Navbar {"       -      "}
            <a href="/login">login</a> {"       -      "}
            <a href="/register">register</a> {"       -      "}
            <a href="/main">main</a> {"       -      "}
            <a href="/SingleTask">SingleTask</a> {"       -      "}
            <a href="/TaskForm">TaskForm</a> 
        </div>
    );
}

export default NavbarComponent;
