import { AppBar, Toolbar, styled} from '@mui/material'; 
import { Link } from 'react-router-dom';
import logo from '../../Images/logo.JPG'



const Component = styled(AppBar)`
    background: #FFFFFF;
    color: black;
`;

const Container = styled(Toolbar)`
    & > a {
        padding: 20px;
        color: #000;
        text-decoration: none;
    }
    &> img{
    width:150px;
    padding:0px 20px 0px 0px;
   }
`

const Header = () => {

    // const navigate = useNavigate();

    // const logout = async () => navigate('/account');
        
    return (
        <Component>
            <Container>
               
                <img src={logo} alt="alltudein"/>
                <Link to='/'>HOME</Link>
                <Link to='/about'>ABOUT</Link>
                <Link to='/contact'>CONTACT</Link>
                <Link to='/account'>LOGOUT</Link>
            </Container>
        </Component>
    )
}

export default Header;