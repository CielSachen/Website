import './HomePage.css';

import { Container, Typography } from '@mui/material';
import { useEffect } from 'react';

interface Props {
  title: string;
}

export function HomePage(props: Props) {
  useEffect(() => { document.title = props.title; }, [props.title]);

  return (
    <div className="page-content">
      <div className="home-hero-image">
        <div className="m-auto">
          <Container>
            <div className="hero-image-text">
              <Typography
                fontWeight="bold"
                gutterBottom
                variant="h3"
              >Low Quality Web Developer, Minecraft Modder, and Video Editor</Typography>
              <Typography variant="subtitle2">Image Credit: <a
                href="https://www.instagram.com/umeoisii6_2"
                rel="noreferrer"
                target="_blank"
              >@umeoisii6_2</a></Typography>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}
