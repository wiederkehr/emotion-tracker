import React, { Component } from 'react';
import { LayoutContainer, LayoutContent } from '../components/Layout';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { PrimaryButton } from '../components/Button';

import './SettingsPage.css';

class SettingsDataExportPage extends Component {

  render() {
    return (
      <LayoutContainer>
        <Header left={{to:'/profile/settings', label:'Back'}}>{this.props.route.title}</Header>
        <LayoutContent className="SettingsDataExportPageContent TypeContent">
          <p>You can export your data as a CSV file.</p>
          <PrimaryButton type="button">Download Data</PrimaryButton>
        </LayoutContent>
        <Footer border/>
      </LayoutContainer>
    );
  }
}

export default SettingsDataExportPage;
