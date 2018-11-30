export default {
    typography: {
        // fontFamily: "'Federant', 'Helvetica', 'sans serif', 'Arial'",
        useNextVariants: true
    },
    palette: {
        primary: {
            main: '#f6ae2d' // #FFB300
        },
        secondary: {
            main: '#390099'
        }
    },
    overrides: {
        MuiButton: {
            root: {
                color: '#fff'
            },
            label: {}
        }
    }
}
