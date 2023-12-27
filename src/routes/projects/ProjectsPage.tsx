import './ProjectsPage.css';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from '@mui/material';
import { useEffect } from 'react';

import { userConfigs } from '../../configs/userConfigs';

interface Props {
  title: string;
}

export function ProjectsPage(props: Props) {
  useEffect(() => { document.title = props.title; }, [props.title]);

  return (
    <div className="page-content">
      <div className="projects-main">
        <div className="
          m-auto flex w-3/4 flex-col items-center
          md:my-[10vh] md:w-full
        ">
          <Container maxWidth="md">
            <div className="text-white">
              <Typography
                fontWeight="bold"
                gutterBottom
                variant="h3"
              >My Coding Projects</Typography>
              <Typography variant="subtitle1">
                Here is a collection of all the projects I have been actively working on and had worked on in the past.
                JavaScript/TypeScript are my main languages, although I am looking to learn more languages in the near future.
                Features in many may be limited because I only code during my free time.
              </Typography>
            </div>
            <Button
              className="mt-5"
              color="inherit"
              disableElevation
              endIcon={<OpenInNewIcon />}
              href={`${userConfigs.socials.github}?tab=repositories`}
              rel="noreferrer"
              startIcon={<FontAwesomeIcon icon={faGithub} />}
              target="_blank"
              variant="contained"
            >VIEW GITHUB REPOSITORIES</Button>
          </Container>
        </div>
      </div>
      <div className="projects-list">
        {userConfigs.projects.map((project, index) => (
          <div
            className="projects-list-card"
            key={index}
          >
            <Card>
              <CardMedia
                alt="Project Image"
                component="img"
                height="140"
                image={project.image}
              />
              <CardContent>
                <img
                  alt="Language Icon"
                  className="w-8 rounded-sm"
                  src={project.languageIcon}
                />
                <Typography
                  fontWeight="bold"
                  gutterBottom
                  variant="h6"
                >{project.title}</Typography>
                <Typography variant="body1"
                >{project.description}</Typography>
              </CardContent>
              <CardActions>
                <Button
                  endIcon={<OpenInNewIcon />}
                  href={project.link}
                  rel="noreferrer"
                  size="small"
                  target="_blank"
                >VIEW PROJECT ON GITHUB</Button>
              </CardActions>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
