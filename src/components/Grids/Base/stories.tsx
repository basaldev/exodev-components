import React from 'react';
import { storiesOf } from '@storybook/react';
import RowLayout1Centered from '../RowLayout1Centered';
import RowLayout4And4And4 from '../RowLayout4And4And4';
import RowLayout6And6 from '../RowLayout6And6';

import { Button } from '@material-ui/core';
import TitleSubtitleParagraphButton from '../../TitleSubtitleParagraphButton/index';

const stories = storiesOf('ContentPatterns', module);

stories.add('PageExample', () => (
  <div>
    <RowLayout1Centered
      widthOutOf12={8}
      middleComponent={
        <TitleSubtitleParagraphButton
          spacing={24}
          titleText="Building Exponential Organizations"
          subtitleText="The Global ExO Transformation Ecosystem"
        />
      }
    />
    <RowLayout1Centered
      widthOutOf12={8}
      middleComponent={
        <TitleSubtitleParagraphButton
          spacing={24}
          titleConfig={{
            variant: 'h3',
            align: 'left',
          }}
          subtitleConfig={{
            variant: 'h4',
            align: 'left',
          }}
          titleText="Access the disruptive thinking, exponential technology insights and industry leaders you need to transform for the future Exponential Organizations"
          subtitleText="OpenExO is a Global Transformation Ecosystem helping organizations, institutions and people to transform and unlock abundance"
        />
      }
    />
    <RowLayout1Centered
      widthOutOf12={8}
      middleComponent={
        <RowLayout4And4And4
          leftComponent={
            <TitleSubtitleParagraphButton
              spacing={24}
              subtitleConfig={{
                variant: 'h4',
                align: 'center',
              }}
              textAlign={'center'}
              subtitleText="We do this by helping clients"
              paragraphTexts={[
                `Fortune 500 businesses, small and medium sized businesses, cities of one million or more citizens, inspired individuals and community leaders`,
              ]}
            />
          }
          middleComponent={
            <TitleSubtitleParagraphButton
              spacing={24}
              subtitleConfig={{
                variant: 'h4',
                align: 'center',
              }}
              textAlign={'center'}
              subtitleText="We do this by helping clients"
              paragraphTexts={[
                `Exponential Organizations (ExO) Sprints and On-Demand Services in the industry, technology or area of expertise you need`,
              ]}
            />
          }
          rightComponent={
            <TitleSubtitleParagraphButton
              spacing={24}
              subtitleConfig={{
                variant: 'h4',
                align: 'center',
              }}
              textAlign={'center'}
              subtitleText="We do this by helping clients"
              paragraphTexts={[
                `We kickstart and accelerate your ideas and initiatives with the help of the OpenExO Ecosystem, converting disruptive stress into disruptive opportunity`,
              ]}
            />
          }
        />
      }
    />
    <RowLayout1Centered
      widthOutOf12={8}
      middleComponent={
        <TitleSubtitleParagraphButton
          subtitleConfig={{
            variant: 'h4',
            align: 'center',
          }}
          textAlign={'center'}
          subtitleText="What’s going on now with ExO?"
          paragraphTexts={[
            `Check out our events taking place all over the world addressing the disruptive forces shaping industries, businesses and society.`,
          ]}
          buttonComponent={<Button variant="flat">Event Calendar</Button>}
        />
      }
    />
    <RowLayout1Centered
      widthOutOf12={8}
      middleComponent={<TitleSubtitleParagraphButton titleText="ExO Books" />}
    />
    {/* Make new TSPB */}
    <RowLayout1Centered
      widthOutOf12={8}
      middleComponent={
        <TitleSubtitleParagraphButton
          paragraphTexts={[
            'Learn how to navigate the shifting business environment caused by the Fourth Industrial Revolution, where new technologies are fusing the digital and physical world. These books have the power to teach you and your company how to overcome the organizational immune system to become a thriving ExO (Exponential Organization).',
            'Want to engage with other readers and practitioners? Discuss the books, the methodology and the global ExO Movement online with the official ExO Book Community.',
          ]}
          buttonComponent={
            <Button variant="flat">JOIN THE EXO BOOK COMMUNITY</Button>
          }
        />
      }
    />
    <RowLayout6And6
      leftComponent={
        <TitleSubtitleParagraphButton
          titleText="WHY do I need to transform?"
          titleConfig={{
            variant: 'h3',
            align: 'left',
          }}
          buttonComponent={<Button variant="flat">Learn More</Button>}
        />
      }
      rightComponent={
        <TitleSubtitleParagraphButton
          titleText="HOW can I transform?"
          titleConfig={{
            variant: 'h3',
            align: 'left',
          }}
          buttonComponent={<Button variant="flat">Learn More</Button>}
        />
      }
    />
    <RowLayout1Centered
      widthOutOf12={8}
      middleComponent={<TitleSubtitleParagraphButton titleText="ExO Books" />}
    />
    <RowLayout1Centered
      widthOutOf12={8}
      middleComponent={
        <TitleSubtitleParagraphButton
          subtitleConfig={{
            variant: 'h4',
            align: 'left',
          }}
          subtitleText="What’s going on now with ExO?"
          paragraphTexts={[
            `Check out our events taking place all over the world addressing the disruptive forces shaping industries, businesses and society.`,
          ]}
          buttonComponent={<Button variant="flat">Event Calendar</Button>}
        />
      }
    />
    <RowLayout1Centered
      widthOutOf12={8}
      middleComponent={
        <TitleSubtitleParagraphButton titleText="Transformation as a service" />
      }
    />
    <RowLayout1Centered
      widthOutOf12={8}
      middleComponent={
        <div>
          <TitleSubtitleParagraphButton
            paragraphTexts={[
              `Transform from a traditional to an exponential operating model by moving away from a scarcity mindset towards one based on abundance. By understanding and applying the ExO framework to your organization you'll tap into growth by a factor of 10x.`,
            ]}
          />
          <img
            src="https://static1.squarespace.com/static/5b33ad559772aedf7cd44bf7/t/5b9a3e8d562fa7f08496d756/1536835228817/transformation-service.png?format=300w"
            alt=""
          />
        </div>
      }
    />
    <RowLayout6And6
      leftComponent={
        <TitleSubtitleParagraphButton
          paragraphTexts={[
            `Transform from a traditional to an exponential operating model by moving away from a scarcity mindset towards one based on abundance. By understanding and applying the ExO framework to your organization you'll tap into growth by a factor of 10x.`,
          ]}
        />
      }
      rightComponent={
        <TitleSubtitleParagraphButton
          paragraphTexts={[
            `Transform from a traditional to an exponential operating model by moving away from a scarcity mindset towards one based on abundance. By understanding and applying the ExO framework to your organization you'll tap into growth by a factor of 10x.`,
          ]}
        />
      }
    />
    <RowLayout1Centered
      widthOutOf12={8}
      middleComponent={<Button variant="flat">REQUEST A SERVICE</Button>}
    />
    <RowLayout1Centered
      widthOutOf12={8}
      middleComponent={
        <TitleSubtitleParagraphButton titleText="OpenExO Ecosystem" />
      }
    />
    <RowLayout1Centered
      widthOutOf12={8}
      middleComponent={
        <TitleSubtitleParagraphButton
          paragraphTexts={[
            `The OpenExO Ecosystem is a global transformation playground where 400+ exponential thought leaders, innovation coaches, disruption specialists, startup founders and tech industry gurus gather to solve strategic transformation challenges. We partner with ExO entities, accelerators, incubators, tech companies and technology specialists (artificial intelligence, blockchain, augmented & virtual reality, 3D printing, biotechnology, robotics, drones and more).`,
          ]}
        />
      }
    />
    {/* A MAP */}
    <RowLayout1Centered
      widthOutOf12={8}
      middleComponent={
        <TitleSubtitleParagraphButton
          subtitleText="Interested to Help Build Exponential Organizations?"
          subtitleConfig={{
            variant: 'h3',
            align: 'left',
          }}
          buttonComponent={<Button variant="flat">REQUEST A SERVICE</Button>}
        />
      }
    />
  </div>
));
