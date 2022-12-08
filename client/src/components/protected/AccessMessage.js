import { Lock } from "@mui/icons-material"
import { Alert, AlertTitle, Button, Container } from "@mui/material"
import { useValue } from "../../context/ContextProvider"


const AccessMessage = () => {
    const { dispatch } = useValue();
    return (
        <Container
        sx={{py:8}}
        >
            <Alert
            severity="error"
            variant ='outlined'
            >
                <AlertTitle>Forbidden Access</AlertTitle>
                Please Login or SignUp to access this page 
                <Button
                variant = 'outlined'
                sx={{ml:2}}
                startIcon = {<Lock />}
                onClick={()=> dispatch({type: 'OPEN_LOGIN'})}
                >login</Button>
            </Alert>
        </Container>
    )
}

export default AccessMessage