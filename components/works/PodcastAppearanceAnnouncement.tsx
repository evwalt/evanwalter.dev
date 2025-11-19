import { useTextLinkContext } from 'components/TextLinkProvider';
import Work from 'components/works/Work';

interface AnnouncementProps {
  addClassNames: string;
}

export default function PodcastAppearanceAnnouncement({ addClassNames }: AnnouncementProps) {
  const textLinkColors = useTextLinkContext();

  return (
    <Work addClassNames={addClassNames}>
      <p>
        I am excited to announce that I had the privilege of appearing twice as a guest on{' '}
        <a
          href="https://podcast.thereactshow.com/1764837/12142504"
          className={textLinkColors}
          target="_blank"
          rel="noreferrer noopener"
        >
          The React Show
        </a>{' '}
        podcast!
      </p>
      <p>
        On the show, I share my software engineering journey and insights on <b>React</b>,{' '}
        <b>developer tools</b>, and <b>industry growth</b>.
      </p>
    </Work>
  );
}
