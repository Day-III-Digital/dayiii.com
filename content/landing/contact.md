---
title: "Contact"
type: "landing"
page: "section"
weight: 7
---

<div id="contact" class="col-lg-8 full-height-screen" style="display: flex;">
    <img src="/images/marmot-contact.svg" style="width: 40%; height: 100%;">
    <div class="contact-us" style="width: 60%;">
        <h3>CONTACT US</h3>
        <div class="form">
            <form class="contactform" action="https://formspree.io/f/mwpepeqw" method="POST">
                <input type="text" id="name" name="name" placeholder="Name" required class="inputform">
                <br>
                <input type="email" id="email" name="email" placeholder="E-mail" required class="inputform">
                <br>
                <textarea id="message" name="message" placeholder="Message" required class="textareaform"></textarea>
                <br>
                <div class="checkbox">
                    <input
                        aria-describedby="dpa-consent-description"
                        class="fs-checkbox"
                        id="dpa-consent"
                        name="dpa-consent"
                        required
                        type="checkbox"
                        value="consent"
                    />
                    <label for="dpa-consent">
                        Consent to the storage and processing of your data to answer your request, and in accordance with <a href="https://formspree.io/legal/privacy-policy/">our providers privacy policy</a>.
                    </label>
                </div>
                <br>
                <button class="buttonform" type="submit">Submit</button>
            </form>
        </div>
    </div>
</div>
