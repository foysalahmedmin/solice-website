const TermsPage = () => {
  return (
    <main>
      <section
        style={{ backgroundImage: "url(/images/terms-policy-banner.jpg)" }}
        className="dark w-full bg-cover bg-center bg-no-repeat"
      >
        <div className="bg-dark/25">
          <div className="container flex min-h-screen items-center justify-center">
            <h1 className="md:text-5xl">Terms of Use</h1>
          </div>
        </div>
      </section>
      <section className="bg-secondary py-16">
        <div className="container">
          <div className="content space-y-4 md:space-y-6">
            <p>
              The information contained in this website is for general
              information purposes only. The information is provided by
              ARKangel Clinic.HEALTH LTD and whilst we endeavour to keep the information
              up-to-date and correct, we make no representations or warranties
              of any kind, express or implied, about the completeness, accuracy,
              reliability, suitability or availability with respect to the
              website or the information, products, services, or related
              graphics contained on the website for any purpose. Any reliance
              you place on such information is therefore strictly at your own
              risk.
            </p>
            <p>
              In no event will we be liable for any loss or damage including
              without limitation, indirect or consequential loss or damage, or
              any loss or damage whatsoever arising from loss of data or profits
              arising out of or in connection with the use of this website.
            </p>
            <p>
              Through this website you are able to link to other websites which
              are not under the control of ARKangel Clinic.HEALTH LTD We have no control
              over the nature, content and availability of those sites. The
              inclusion of any links does not necessarily imply a recommendation
              or endorse the views expressed within them.
            </p>
            <p>
              Every effort is made to keep the website up and running smoothly.
              However, ARKangel Clinic.HEALTH LTD, takes no responsibility for and will
              not be liable for the website being temporarily unavailable due to
              technical issues beyond our control.
            </p>
            <p>Use of Third-Party Platforms and Systems</p>
            <p>
              ARKangel Clinic utilises third-party platforms and systems, including but
              not limited to Asana, Semble, Xero, and WhatsApp, as part of our
              operational processes. These tools are employed to enhance our
              workflow, manage client data, maintain financial records, and
              communicate effectively. Each platform is selected based on its
              functionality, security measures, and compliance with applicable
              data protection standards. By engaging with ARKangel Clinic, clients
              acknowledge and accept the use of these platforms in the
              management of their information and communications.
            </p>
            <p>**Additional Servicing Fees**</p>
            <p>
              ARKangel Clinic reserves the right to charge a one-time Joining Fee,
              payable upon initial use of the service. Additional service fees
              will apply depending on the type of service requested.
            </p>
            <p>
              Please note that courier charges and international medical
              prescriptions will incur additional costs, which are not included
              within your membership fee.
            </p>
            <p>
              As a PCI-compliant organisation, ARKangel Clinic ensures that all member
              payments are handled with the utmost security. For members who
              submit a Card Mandate form and authorise ARKangel Clinic to process
              payments using their card, a transaction fee will apply. This fee,
              determined by Stripe based on the type and origin of the card,
              along with an administrative handling charge, may be up to 6% of
              the transaction value, in addition to the original cost.
            </p>
            <p>ARKangel Clinic reserves the right to amend its fees at any time.</p>{" "}
          </div>
        </div>
      </section>
    </main>
  );
};

export default TermsPage;
