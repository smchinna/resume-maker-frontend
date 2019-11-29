import React from 'react';

import { FullWidth } from './styles';

import ResumeMaker from '../../components/ResumeMaker';

class Resume extends React.Component {

  render() {
    return(
      <FullWidth>
        <ResumeMaker />
      </FullWidth>
    )
  }
}

export default Resume;