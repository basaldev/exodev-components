import React from 'react';
import { storiesOf } from '@storybook/react';
import EXTSectionCard from './';

const stories = storiesOf('Molecules/EXTSectionCard', module);

stories.add('image on right, with button', () => (
  <EXTSectionCard
    headline="Navigate Industry Disruption"
    subtitle="Overcome your organizational immune system and become a thriving exponential organization"
    buttonText="Order your copy today!"
    imageSide="right"
    imageSourceUrl="https://exponentialtransformationbook.com/wp-content/uploads/exponential-transformations-book-cover@x2.png"
    imageTitle="Exponential Transformations book"
    imageWidth={390}
    variation="button"
  />
));

stories.add('image on right, with text (1)', () => (
  <EXTSectionCard
    headline="Welcome to the most transformative period in human history!"
    subtitle="The fourth industrial revolution"
    cardText={[
      'We live today in a world of exponential technologies and accelerating breakthroughs, all of which present boundless opportunities. Accessing that opportunity, however, requires organizational evolution.',
      'No enterprise will be able to stay alive--much less thrive--without adapting to the exponential rate of change that accelerating technologies deliver.',
    ]}
    imageSide="right"
    imageSourceUrl="https://exponentialtransformationbook.com/wp-content/themes/exponential-transformation-book/hubfs/ExO_September2018/Image/4a-revolucion.jpg"
    imageTitle="Exponential Transformations book"
    imageWidth={390}
    variation="text"
  />
));

stories.add('image on left, with text', () => (
  <EXTSectionCard
    headline="Exponential technologies change everything"
    subtitle="Shift to abundance"
    cardText={[
      'As exponential technologies converge and build upon one another, they bring abundance to every industry and, simultaneously, disrupt them all in one way or another.',
      'Traditional business models work just fine in a scarcity-based environment, but they are not designed to operate in the fast-approaching world of abundance.',
    ]}
    imageSide="left"
    imageSourceUrl="https://exponentialtransformationbook.com/wp-content/themes/exponential-transformation-book/hubfs/ExO_September2018/Image/why-02.jpg"
    imageTitle="Exponential Transformations book"
    imageWidth={390}
    variation="text"
  />
));

stories.add('image on right, with text (2)', () => (
  <EXTSectionCard
    headline="Becoming an Exponential Organization"
    subtitle="Take advantage of abundance to grow faster"
    cardText={[
      'An Exponential Organization (ExO) is one whose impact (or output) is disproportionately large, at least 10x larger, compared to its peers because of the use of new organization techniques that leverage accelerating technologies.',
      'Your organization’s success comes from the ability to unlock the abundance delivered by emerging technologies, and readily adapt to your rapidly changing business environment.',
      'Beware the organizational immune system! It will rally to attack your efforts to transform.',
    ]}
    imageSide="left"
    imageSourceUrl="https://exponentialtransformationbook.com/wp-content/themes/exponential-transformation-book/hubfs/ExO_September2018/Image/cohete-02.png"
    imageTitle="Exponential Transformations book"
    imageWidth={390}
    variation="text"
  />
));
