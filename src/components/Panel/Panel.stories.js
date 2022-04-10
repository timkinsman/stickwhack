import { Panel } from './Panel';
import { works } from '../context';
import { Works } from '../enums';

export default {
  title: 'Panel',
  component: Panel,
  argTypes: { handleClick: { action: 'handleClick' } },
};

const Template = (args) => <Panel {...args} />;

export const BrandingAndApparel = Template.bind({});
BrandingAndApparel.args = {
  work: works.find((work) => work.id === Works.BRANDING_AND_APPAREL),
};

export const Fringe = Template.bind({});
Fringe.args = {
  work: works.find((work) => work.id === Works.FRINGE),
};

export const BrandingAndStationery = Template.bind({});
BrandingAndStationery.args = {
  work: works.find((work) => work.id === Works.BRANDING_AND_STATIONERY),
};

export const IllustrationAndMerchDesign = Template.bind({});
IllustrationAndMerchDesign.args = {
  work: works.find((work) => work.id === Works.ILLUSTRATION_AND_MERCH_DESIGN),
};
