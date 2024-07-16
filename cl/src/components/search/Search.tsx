import { InputBase, alpha, styled } from "@mui/material";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { IoSearchOutline } from "react-icons/io5";

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: 20,
    backgroundColor: alpha(theme.palette.background.paper, 1),
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        width: "100%",
    },
}));

export default function SearchAppBar() {
    return (
        <Box
            sx={{
                // position: "relative",
                height: "10%",
                width: 320,
                backgroundColor: "#white",
                marginTop: "0px",
                paddingTop: "0px",
            }}
        >
            <Stack p={1} spacing={1} sx={{ maxHeight: "100vh" }}>
                <Stack
                    alignItems={"center"}
                    justifyContent="space-between"
                    direction="row"
                >
                    {/* Content here */}
                </Stack>
                <Stack sx={{ width: "100%", color: '#6363fa' }}>
                    <Search >
                        <SearchIconWrapper>
                            {/* <MagnifyingGlass color="#709CE6" /> */}
                            <IoSearchOutline color="#6363fa" />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ "aria-label": "search" }}
                            sx={{
                                color: '#6363fa'
                            }}
                        />
                    </Search>
                </Stack>
            </Stack>
        </Box>
    );
}
