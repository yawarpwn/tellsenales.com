'use strict';
import bizSdk from 'facebook-nodejs-business-sdk'
const ServerEvent = bizSdk.ServerEvent;
const EventRequest = bizSdk.EventRequest;
const UserData = bizSdk.UserData;
const CustomData = bizSdk.CustomData;
const Content = bizSdk.Content;

const access_token = 'EAAXc2xJrRysBAP9l29kpnpjfqqV2y1U0lZBmSNKCnOjvBZCoe6LeroRpxIe9kmQe4UAmeqwxAzo5KiTX5NbY0a1VRG0ocZBy5XFtxwTlG6FyEGZBxdIZAvk68Fal22RXmPNiPKMfRdHnXDH5lh8lZArgT5coXk0swBhbBZCv5So7QnKI2ZCGv6auNICZCVlwXYQkZD';
const pixel_id = '825596415540655';
const api = bizSdk.FacebookAdsApi.init(access_token);

let current_timestamp = Math.floor(new Date() / 1000);

const userData_0 = (new UserData())
    .setEmails(["7b17fb0bd173f625b58636fb796407c22b3d16fc78302d79f0fd30c2fc2fc068"])
    .setPhones([]);
const customData_0 = (new CustomData())
    .setValue(142.52)
    .setCurrency("USD");
const serverEvent_0 = (new ServerEvent())
    .setEventName("View")
    .setEventTime(1666147227)
    .setUserData(userData_0)
    .setCustomData(customData_0)
    .setActionSource("email");

const eventsData = [serverEvent_0];
const eventRequest = (new EventRequest(access_token, pixel_id))
    .setEvents(eventsData);
eventRequest.execute();
