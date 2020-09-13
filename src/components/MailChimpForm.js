import MailchimpSubscribe from "react-mailchimp-subscribe"
import React from 'react';

const url = "https://app.us2.list-manage.com/subscribe/post?u=3506547c6e30cd64bcab8beaf&id=d46611af2d";

// simplest form (only email)
const SimpleForm = () => <MailchimpSubscribe url={url}/>

export const CustomForm = () => (
    <MailchimpSubscribe
      url={url}
      render={({ subscribe, status, message }) => (
        <div>
          <SimpleForm onSubmitted={formData => subscribe(formData)} />
          {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
          {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
          {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
        </div>
      )}
    />
  )