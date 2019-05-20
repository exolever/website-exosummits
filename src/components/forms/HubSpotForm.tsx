import * as React from 'react';
import HighlightSection from '../HighlightSection';
import './style.css';

interface Props {
  title: any;
  formBg: any;
}


export default class HubSpot extends React.Component<Props, any> {
  componentDidMount() {
    window['hbspt'].forms.create({
      portalId: "5510631",
      formId: "7a18e7f7-d4a8-4c26-bab7-50fd7eb065a1",
      target: '#my-form',
    });
  }

  render() {
    const { title, formBg } = this.props;
    return (
      <HighlightSection title={title} backgroundImage={formBg}>
        <div id="my-form"></div>
      </HighlightSection>
    )
  }

};

