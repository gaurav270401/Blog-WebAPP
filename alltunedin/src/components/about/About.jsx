
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px ;
    text-align:justify;
    & > h3, & > h5 {
        margin-top: 50px;
    }
    &> h3{
        text-align:center;
        font-family:'Roboto', sans-serif;
        color:#EC729C

    }
`;

const Head=styled(Typography)`
 padding:40px 10px 10px 10px;
 color:#EC729C
`
const Headof=styled(Typography)`
 padding:10px 10px 0px 10px;
 color:#EC729C
`
const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Text variant="h5">
                <Headof variant="h4">Welcome to AllTunedIn!</Headof><br/>
                <Head variant="h4">About AllTunedIn</Head>

Welcome to AllTunedIn, where we celebrate the harmonious blend of diverse genres and cater to all seekers of knowledge, inspiration, and entertainment. Our blog is a digital hub that unites individuals from various walks of life, embracing the richness of different interests and passions.

<Head variant="h4">Our Mission: Embracing the Melodies of Diversity</Head>

At AllTunedIn, we believe that every voice deserves to be heard, and every story has the power to resonate with others. Our mission is to curate a wide array of content that transcends boundaries, fostering a community that appreciates the beauty of multitudes. Whether you're an avid traveler, a tech enthusiast, a culture vulture, or an artist at heart, there's a place for you here.

<Head variant="h4">Explore the Symphony of Content</Head>

Dive into our carefully curated categories, where each note plays an integral part in creating the symphony of our blog: <br/>

1. Entertainment & Pop Culture: Immerse yourself in the latest trends, movie reviews, music sensations, and captivating celebrity interviews. <br/>

2. Lifestyle & Wellness: Discover ways to lead a balanced life, nourishing your mind, body, and soul with valuable health tips, fashion insights, and self-improvement journeys.<br/>

3. Travel & Adventure: Embark on exhilarating journeys to breathtaking destinations, uncovering the world's hidden gems and embracing cultural diversity.<br/>

4. Technology & Innovation: Stay ahead of the curve with our tech updates, gadget reviews, and explorations into the exciting realm of innovation.<br/>

5. Sports & Fitness: Get your adrenaline pumping with the latest sports news, game analysis, athlete interviews, and fitness tips to keep you in top form.<br/>

<Head variant="h4">Join Our Harmonious Community</Head>

AllTunedIn is more than just a blog; it's a place where like-minded individuals come together to appreciate the beauty of differences and find common ground. We encourage you to share your thoughts, engage with fellow readers, and embark on a journey of learning and inspiration.

<Head variant="h4">Our Promise</Head>

With a commitment to delivering high-quality content, diverse perspectives, and engaging discussions, we strive to keep you AllTunedIn to the ever-evolving world around us.<br/>

Thank you for being a part of this symphony of diversity, and we hope you find joy and enlightenment through every article, photo, and experience shared on our blog.<br/>



If you are interested, you can view some of my favorite projects here
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/gaurav270401" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>
                </Text>
                <Text variant="h5">
                    Need something built or simply want to have chat? Reach out to me on
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://www.instagram.com/gauravmekhe/" color="inherit" target="_blank">
                            <Instagram />
                        </Link>
                    </Box>  
                        or send me an Email 
                        <Link href="mailto:mekhegaurav932@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                            <Email />
                        </Link>.
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;