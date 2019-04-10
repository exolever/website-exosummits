import * as React from 'react';
import HighlightSection from '../HighlightSection';
import Form from './BaseForm';
// import formBg from '../../img/bg.jpg';

interface Props {
  title: any;
  labels: any;
  formBg: any;
  fields: { groups: any; groupTitle?: any; };
  messages: any;
}

const LeaderForm: React.SFC<Props> = ({ title, labels, fields, messages, formBg }) => {
  return (
    <HighlightSection title={title} backgroundImage={formBg}>
      <Form
        labels={labels}
        messages={messages}
        enableName
        enableDates
        enableLocation
        enableDescription
        enableGroups={fields.groups}
        groupTitle={fields.groupTitle}
      />
    </HighlightSection>
  )
};

export default LeaderForm;
