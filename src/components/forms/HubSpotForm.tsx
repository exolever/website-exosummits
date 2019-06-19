import * as React from 'react';
import HighlightSection from '../HighlightSection';
import './style.css';
import { loadScript } from './script-loader';
interface Props {
  title: any;
  formBg: any;
}


export default class HubSpot extends React.Component<Props, any> {
  componentDidMount() {
    window['hbspt'].forms.create({
      portalId: "5510631",
      formId: "c2b2e135-afd6-4a5e-8e1b-43349fd4434c",
      target: '#my-form',
    });
    setTimeout(() => {
      const form: HTMLElement | null = document.getElementById('my-form');
      loadScript('https://cdn.jsdelivr.net/npm/country-region-selector@0.5.1/dist/crs.min.js');
      if (form !== null) {

        const countrySelect: any = form.getElementsByTagName('select')[1] ;
        const countrySelectAttributeKeys: string[] = countrySelect.getAttributeNames();
        const countrySelectAttributes = countrySelectAttributeKeys.map(key => {
          return {
            key,
            value: countrySelect.getAttribute(key)
          }
        });

        const hackedCountryInput = document.createElement('select');
        countrySelectAttributes.forEach(attr => {
          hackedCountryInput.setAttribute(attr.key, attr.value || '');
        });
        hackedCountryInput.classList.add('crs-country');
        hackedCountryInput.setAttribute('data-region-id', 'my-country-selector');

        countrySelect.parentElement.replaceChild(hackedCountryInput, countrySelect);

        const input: any = form.getElementsByTagName('input')[3];
        const attributeKeys: string[] = input.getAttributeNames();
        const attributes = attributeKeys.map(key => {
          return {
            key,
            value: input.getAttribute(key)
          }
        });

        const hackedCityInput = document.createElement('select');
        attributes.forEach(attr => {
          hackedCityInput.setAttribute(attr.key, attr.value || '');
        });
        hackedCityInput.setAttribute('id', 'my-country-selector');

        input.parentElement.replaceChild(hackedCityInput, input);
      }
    }, 1000)

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
