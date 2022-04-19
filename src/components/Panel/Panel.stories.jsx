import React from 'react';
import { Panel } from '.';
import { Works } from '../../actions';
import { works } from '../../context';

export default {
  title: 'Panel',
  component: Panel,
};

/* eslint-disable */
const Template = (args) => <Panel {...args} />;

export const BrandingAndApparel = Template.bind({});
BrandingAndApparel.args = {
  work: works.find((work) => work.id === Works.brandingAndApparel),
};

export const Fringe = Template.bind({});
Fringe.args = {
  work: works.find((work) => work.id === Works.fringe),
};

export const BrandingAndStationery = Template.bind({});
BrandingAndStationery.args = {
  work: works.find((work) => work.id === Works.brandingAndStationery),
};

export const IllustrationAndMerchDesign = Template.bind({});
IllustrationAndMerchDesign.args = {
  work: works.find((work) => work.id === Works.illustrationAndMerchDesign),
};
