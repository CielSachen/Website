import './AboutSchoolsPage.css';

import KeyboardReturnOutlinedIcon from '@mui/icons-material/KeyboardReturnOutlined';
import { Button, Container, Typography } from '@mui/material';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { userConfigs } from '../../configs/userConfigs';

interface Props {
  title: string;
}

export function AboutSchoolsPage(props: Props) {
  useEffect(() => { document.title = props.title; }, [props.title]);

  return (
    <div className="page-content">
      <div className="about-schools-main">
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
              >My Education</Typography>
              <Typography variant="subtitle1">
                I am currently in my last year of highschool, which is Grade 12 for us here in the Philippines.
                Overall, I&apos;ve only enrolled in two different schools.
                From preschool until Grade 6, I stayed in the same school;
                For Grade 7 onwards, I moved to a different school, which is the same school I&apos;m still in.
              </Typography>
            </div>
            <Button
              className="mt-5"
              color="inherit"
              component={Link}
              disableElevation
              startIcon={<KeyboardReturnOutlinedIcon />}
              to="/about"
              variant="contained"
            >RETURN</Button>
          </Container>
        </div>
      </div>
      <div className="about-schools-timeline">
        {userConfigs.schools.map((school, index) => (
          <div
            className="
              flex flex-row
              md:flex-col
            "
            key={index}
          >
            <div className="about-schools-timeline-left">
              <div className="about-schools-timeline-left-text">
                <Typography
                  fontWeight="bold"
                  variant="h4"
                >{school.duration}</Typography>
                <Typography variant="body2">{school.grades}</Typography>
              </div>
            </div>
            <div className="about-schools-timeline-right">
              <div className="
                ml-4 w-3/4
                md:w-[calc(100%-1rem)]
              ">
                <div className="
                  mb-5 flex
                  md:block
                ">
                  <img
                    alt="School Seal"
                    className="
                      mb-auto h-36
                      md:mb-2
                    "
                    src={school.images.seal}
                  />
                  <div className="about-schools-timeline-right-text">
                    <Typography
                      fontWeight="bold"
                      gutterBottom
                      variant="h3"
                    >{school.name}</Typography>
                    <Typography variant="body1" >{school.location}</Typography>
                  </div>
                </div>
                <img
                  alt="School Campus"
                  className="w-full rounded-3xl"
                  src={school.images.campus}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
