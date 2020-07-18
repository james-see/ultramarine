import React from 'react';

import { Section, Container } from '@components/global';

import FaqItem from '@common/FaqItem';
import ExternalLink from '@common/ExternalLink';

const FAQS = [
  {
    title: 'What tech does Ultramarine use?',
    content: () => (
      <>
        Enjoy the power of the latest web technologies – React.js , Webpack ,
        modern JavaScript and CSS and more — all set up and waiting for you to
        start building
      </>
    ),
  },
  {
    title: 'Where can you source data from?',
    content: () => (
      <>
        You have ADSB data out of the box which provides information regarding planes within line-of-sight.
        Additionally, you get bluetooth devices nearby, nearby wifi networks, and other data.
      </>
    ),
  },
  {
    title: 'How do I access the data being collected?',
    content: () => (
      <>
        Everything is under the <pre>~/ultramarine/data`</pre> folder.
      </>
    ),
  },
  {
    title: 'How much power is needed for 24hrs operation?',
    content: () => (
      <>
        The board itself draws about 6w of power, a solar panel that generates 10w of power should be enough to save up energy during the day into the battery pack to ensure 24hr operation.
      </>
    ),
  },
  {
    title: 'What exactly is included?',
    content: () => (
      <>
        You get the box, the solar panel, and the necessary plugs to ensure everything works together as well as small instruction guide and runbook. The total cost is 500 USD. Since this is in early beta, please email james@jamescampbell.us for purchase orders.
      </>
    ),
  },
];

const Faq = () => (
  <Section id="faq">
    <Container>
      <h1 style={{ marginBottom: 40 }}>Frequently Asked Questions</h1>
      <div>
        {FAQS.map(({ title, content }) => (
          <FaqItem title={title} key={title}>
            {content()}
          </FaqItem>
        ))}
      </div>
    </Container>
  </Section>
);

export default Faq;
