import SideBar from "./sideBar/SideBar";
import Feed from "./feed/Feed";
import RightBar from "./rightBar/RightBar";
import { Box, Stack } from "@mui/material";
import AddFab from "./AddFab";

const Newsfeed = () => {
    return (
        <Box>
            <Stack direction="row" spacing={0.5} justifyContent="space-between">
                <SideBar />
                <Feed />
                <RightBar />
            </Stack>
            <AddFab />
        </Box>
    )
}

export default Newsfeed