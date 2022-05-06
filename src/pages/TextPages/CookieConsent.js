import React from "react";
import "./TextPage.css";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <div className="text-page">
      <h1>Cookies</h1>

      <p>
        The following terminology applies: "Client", "You" and "Your" refers to
        you, the person log on this website and compliant to the Company’s terms
        and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers
        to our Company. "Party", "Parties", or "Us", refers to both the Client
        and ourselves. All terms refer to the offer, acceptance, and
        consideration of payment necessary to undertake the process of our
        assistance to the Client in the most appropriate manner for the express
        purpose of meeting the Client’s needs in respect of the provision of the
        Company’s stated services, in accordance with and subject to, prevailing
        law of Netherlands. Any use of the above terminology or other words in
        the singular, plural, capitalization and/or he/she or they, are taken as
        interchangeable and therefore as referring to same.
      </p>

      <p>
        Like any other website, Garner uses 'cookies'. These cookies are used to
        store information including visitors' preferences, and the pages on the
        website that the visitor accessed or visited. The information is used to
        optimize the users' experience by customizing our web page content based
        on visitors' browser type and/or other information.
      </p>

      <p>
        For more general information on cookies, please read{" "}
        <Link
          to={"//www.cookieconsent.com/what-are-cookies/"}
          target="_blank"
          aria-label="What are cookies?"
          rel="noreferrer"
        >
          "What Are Cookies"
        </Link>
        .
      </p>

      <p>
        We employ the use of cookies. By accessing garner, you agreed to use
        cookies in agreement with the garner's Privacy Policy.
      </p>

      <p>
        Most interactive websites use cookies to let us retrieve the user’s
        details for each visit. Cookies are used by our website to enable the
        functionality of certain areas to make it easier for people visiting our
        website. Some of our affiliate/advertising partners may also use
        cookies.
      </p>
    </div>
  );
}
