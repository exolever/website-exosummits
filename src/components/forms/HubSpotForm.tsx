import * as React from 'react';
import HighlightSection from '../HighlightSection';
import './style.css';
import { loadScript } from './script-loader';
import csc from 'country-state-city'

interface Props {
  title: any;
  formBg: any;
}


export default class HubSpot extends React.Component<Props, any> {
  state = {
    selectedCountry: {

    },
    selectedState: {

    },
    selectedCity: {

    }
  }

  objToHTML(option) {
    return `<option value="${option.name} (${option.id})">${option.name}</option>`
  }

  prependPlaceholder(options, type) {
    return options !== '' ? `<option value="">Please select ${type}</option>${options}` : `<option value="">--</option>`
  }

  componentDidMount() {
    window['hbspt'].forms.create({
      portalId: "5510631",
	    formId: 'c2b2e135-afd6-4a5e-8e1b-43349fd4434c',
      target: '#my-form',
    });
    const countries = csc.getAllCountries();
    const countryOptions = countries.map(this.objToHTML).join('');


    setTimeout(() => {
      const form: HTMLElement | null = document.getElementById('my-form');
      if (form !== null) {
        const countrySelect: any = form.getElementsByTagName('select')[1];
        const regionSelect: any = form.getElementsByTagName('select')[2];
        const citySelect: any = form.getElementsByTagName('select')[3];

        countrySelect.innerHTML = this.prependPlaceholder(countryOptions, 'country');
        countrySelect.addEventListener('change', (event) => {
          const value = event.target.value;
          const countryId = value.substring(value.indexOf('(') + 1, value.length-1).trim();

          const regions = csc.getStatesOfCountry(countryId);
          const regionOptions = regions.map(this.objToHTML).join('');
          regionSelect.innerHTML = this.prependPlaceholder(regionOptions, 'region');

          regionSelect.addEventListener('change', (event) => {
            const value = event.target.value;
            const regionId = value.substring(value.indexOf('(') + 1, value.length-1).trim();
            const cities = csc.getCitiesOfState(regionId);
            const cityOptions = cities.map(this.objToHTML).join('');
            citySelect.innerHTML = this.prependPlaceholder(cityOptions, 'city');
            if (cities.length < 1) {
              citySelect.setAttribute('disabled', true);
            } else {
              citySelect.removeAttribute('disabled');
            }
          });
        });
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
