import React from "react";
import "./Phone.css";
import "./i18n";
import { Route } from "react-router-dom";
import { useSettings } from "./apps/settings/hooks/useSettings";
import { NotificationBar } from "./os/components/NotificationBar";
import { NotificationIcon } from "./os/components/NotificationIcon";
import { Navigation } from "./os/components/Navigation";
import MessageIcon from "@material-ui/icons/Email";

import { HomeApp } from "./apps/home/components/Home";
import { ContactsApp } from "./apps/contacts/components/ContactsApp";
import { SettingsApp } from "./apps/settings/components/SettingsApp";
import { PhoneApp } from './apps/phone/components/PhoneApp';
import { BankApp } from './apps/bank/component/BankApp';
import { ThemeProvider } from "@material-ui/core";

function Phone() {
  const { settings, currentTheme } = useSettings();
  return (
    <ThemeProvider theme={currentTheme()}>
      <div className="PhoneWrapper">
        <div style={{ zoom: "80%" }}>
          <div className="Phone">
            <div
              className="PhoneFrame"
              style={{
                backgroundImage: `${process.env.PUBLIC_URL}url(/media/frames/${settings.frame})`,
              }}
            ></div>
            <div
              id="phone"
              className="PhoneScreen"
              style={{
                backgroundImage: `${process.env.PUBLIC_URL}url(/media/backgrounds/${settings.wallpaper})`,
              }}
            >
              <NotificationBar
                notifications={[{ icon: <NotificationIcon Icon={MessageIcon} /> }, { icon: <NotificationIcon Icon={MessageIcon} /> }]}
              />
              <div className="PhoneAppContainer">
                <Route exact path="/" component={HomeApp} />
                <Route exact path="/contacts" component={ContactsApp} />
                <Route exact path="/settings" component={SettingsApp} />
                <Route exact path="/phone" component={PhoneApp} />
                <Route exact path="/bank" component={BankApp} />
              </div>
              <Navigation />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Phone;