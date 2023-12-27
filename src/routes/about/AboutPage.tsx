import './AboutPage.css';

import { faGithub, faInstagram, faSpotify, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EastIcon from '@mui/icons-material/East';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Button, Container, Typography } from '@mui/material';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { assets } from '../../assets';
import { userConfigs } from '../../configs/userConfigs';

interface Props {
  title: string;
}

export function AboutPage(props: Props) {
  useEffect(() => { document.title = props.title; }, [props.title]);

  return (
    <div className="page-content">
      <div className="about-main">
        <div className="half-page">
          <Container maxWidth="xs">
            <Typography
              fontWeight="bold"
              gutterBottom
              variant="h3"
            >My name is {userConfigs.name}, and I am currently a highschool student</Typography>
            <Typography
              gutterBottom
              variant="subtitle1"
            >I am cross-dressing hikikomori that plays Apex Legends, CS2, R6:S, and Valorant.</Typography>
            <Typography variant="subtitle1">
              I am currently studying to be better at programming, specifically at web development.
              Despite this, I do not actually fully intend to be a web developer in the future.
              I&apos;m doing these things right now more as a hobby than anything.
            </Typography>
          </Container>
        </div>
        <div className="half-page">
          <img
            alt="Profile Picture"
            className="
              w-3/5 rounded-3xl
              sm:w-4/5
            "
            src={assets.images.profilePicture}
          />
        </div>
      </div>
      <div className="about-contacts">
        <div className="half-page">
          <Container maxWidth="xs">
            <Typography
              className="
                text-left
                md:text-center
              "
              fontWeight="bold"
              variant="h3">Contact Information / Social Media</Typography>
          </Container>
        </div>
        <div className="half-page">
          <Container maxWidth="xs">
            <Button
              className="about-contacts-social"
              color="inherit"
              endIcon={<OpenInNewIcon />}
              href={userConfigs.socials.github}
              rel="noreferrer"
              startIcon={<FontAwesomeIcon icon={faGithub} />}
              target="_blank"
              variant="outlined"
            >FOLLOW ON GITHUB</Button>
            <Button
              className="about-contacts-social"
              color="inherit"
              endIcon={<OpenInNewIcon />}
              href={userConfigs.socials.instagram}
              rel="noreferrer"
              startIcon={<FontAwesomeIcon icon={faInstagram} />}
              target="_blank"
              variant="outlined"
            >FOLLOW ON INSTAGRAM</Button>
            <Button
              className="about-contacts-social"
              color="inherit"
              endIcon={<OpenInNewIcon />}
              href={userConfigs.socials.spotify}
              rel="noreferrer"
              startIcon={<FontAwesomeIcon icon={faSpotify} />}
              target="_blank"
              variant="outlined"
            >FOLLOW ON SPOTIFY</Button>
            <Button
              className="about-contacts-social"
              color="inherit"
              endIcon={<OpenInNewIcon />}
              href={userConfigs.socials.youtube}
              rel="noreferrer"
              startIcon={<FontAwesomeIcon icon={faYoutube} />}
              target="_blank"
              variant="outlined"
            >SUBSCRIBE ON YOUTUBE</Button>
          </Container>
        </div>
      </div>
      <div className="about-main">
        <div className="half-page !mt-0">
          <div className="about-education-image" />
        </div>
        <div className="half-page">
          <Container maxWidth="xs">
            <Typography
              fontWeight="bold"
              gutterBottom
              variant="h3"
            >My Education</Typography>
            <Typography variant="subtitle1">
              I am currently studying as a Grade 12 STEM highschool student in the Philippines.
              I am intending to take a Bachelors of Science for university, specifically ones in either Computer Science or Cybersecurity.
            </Typography>
            <Button
              className="mt-5"
              color="inherit"
              component={Link}
              endIcon={<EastIcon />}
              to="/about/schools"
              variant="outlined"
            >SEE THE SCHOOLS I ATTENDED</Button>
          </Container>
        </div>
      </div>
    </div>
  );
}
