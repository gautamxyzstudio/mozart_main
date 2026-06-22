import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | AMozart",
  description:
    "AMOZART MUSIC INC. Privacy Commitment. We request the minimum amount of information necessary, aiming to collect only what we consider essential within the context of our business relationship.",
};

const Page = () => {
  return (
    <section className="w-full relative min-h-screen bg-white text-foreground overflow-clip">
      {/* Background slanted purple gradient shape on top-right */}
      <div className="absolute md:w-30 md:h-188.75 w-17.5 h-87.5 bg-[linear-gradient(180deg,rgba(103,57,183,0)_0%,rgba(103,57,183,0.45)_33.78%,rgba(103,57,183,0)_66.97%)] opacity-20 xl:rotate-204 rotate-24 xl:-mt-70.5 xl:mr-10 md:-mt-3 md:mr-9 mt-12.5 mr-6 right-6" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-13 xl:px-28 pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-44 lg:pb-32">
        {/* Header Section */}
        <div className="flex flex-col items-start w-full">
          <h1 className="text-[52px] md:text-6xl lg:text-[80px] font-bold tracking-tight text-foreground font-sans leading-none">
            Privacy <span className="text-primary">Policy</span>
          </h1>
          <div className="w-[75%] h-[1.5px] bg-gradient-to-r from-[#6739b7] to-transparent mt-8 mb-16" />
        </div>

        {/* Content Body */}
        <div className="max-w-[1000px] text-black80 font-medium text-base md:text-lg leading-7 md:leading-8 space-y-5">
          {/* Document Title */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">AMOZART MUSIC INC. Privacy Commitment</h2>
          </div>

          {/* Introduction */}
          <div className="space-y-4">
            <p className="text-base text-[#414141] font-normal">
              We request the minimum amount of information necessary, aiming to collect only what we consider essential within the context of our business relationship.
            </p>
            <p className="text-base text-[#414141] font-normal">
              The objective of this Policy is to make explicit the information we collect and how we will use it. This Policy is divided into three parts:
            </p>
            <div className="space-y-3 pl-4 border-l-2 border-[#6739b7]/80 text-base text-[#414141] font-normal">
              <p><strong>Part I &ndash; Information that AMOZART MUSIC INC. collects and controls as a Data Controller:</strong> This part covers how AMOZART MUSIC INC. collects and uses information from website visitors, potential customers, users of AMOZART MUSIC INC. products and services, and other individuals who contact AMOZART MUSIC INC. through forms or email addresses published or linked to our websites.</p>
              <p><strong>Part II &ndash; Data Processors used by AMOZART MUSIC INC.:</strong> This part covers how data processors handle the data you entrust to AMOZART MUSIC INC. when you use our products and services, or when you share any information with us while requesting customer support.</p>
              <p><strong>Part III &ndash; General:</strong> This part covers various general topics, such as AMOZART MUSIC INC.&rsquo;s security commitments and how we will inform you when we change this Policy.</p>
            </div>
          </div>

          {/* Part I */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">Part I &ndash; Information that AMOZART MUSIC INC. collects and controls as a Data Controller</h2>

            <h3 className="text-lg font-bold text-foreground mt-4">Who is the Data Controller?</h3>
            <div className="pl-4 border-l-2 border-[#6739b7]/80 text-base text-[#414141] font-normal space-y-1">
              <p><strong>Entity:</strong> AMOZART MUSIC INC.</p>
              <p><strong>Tax ID (CIF):</strong> </p>
              <p>
                <a
                  href="https://maps.google.com/?q=Carrer+de+Trafalgar,+10,+08010+Barcelona,+Spain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Carrer de Trafalgar, 10, 08010 Barcelona, Spain
                </a>
              </p>
              <p><strong>Email:</strong> <a href="mailto:support@amozart.com" className="text-primary hover:underline">support@amozart.com</a></p>
            </div>

            <h3 className="text-lg font-bold text-foreground mt-6">What information does AMOZART MUSIC INC. collect?</h3>
            <p className="text-base text-[#414141] font-normal">
              We collect information about you only if we need it for a legitimate purpose and within the context of our business relationship. AMOZART MUSIC INC. will have information about you only if (a) you have provided the information yourself, (b) AMOZART MUSIC INC. has collected the information automatically, or (c) AMOZART MUSIC INC. has obtained the information from a third party.
            </p>


            {/* Information you provide to us */}
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-foreground mt-4">For what purpose and legal basis do we process your data?</h3>
              <p className="text-base text-[#414141] font-normal">
                Below, we describe the various scenarios that fall into each of these three categories and the information collected in each.
              </p>
            </div>
            <h3 className="text-lg font-bold text-foreground mt-1">Information you provide to us</h3>
            <div className="space-y-3 pl-6 text-base text-[#414141] font-normal">
              <p><strong>i. Account Registration:</strong> When you register for an account to access one or more of our services, you will be asked to use an email address and a password to create the account. Once your account is created, you may also add information such as your name, contact number, email address, company name, and country to complete your profile.</p>
              <p><strong>ii. Payment Processing:</strong> When you begin actively using your account, we ask you to provide your name, contact information, tax identification, and credit card or other related information. In all cases, your credit card information is stored and processed by the Payment Gateway Service Provider of your choice. During payment, they inform you about their privacy and security policies.</p>
              <p><strong>iii. Interactions with AMOZART MUSIC INC.:</strong> We may record, analyze, and use your interactions with us&mdash;including email, telephone, and chat conversations with our sales and customer support professionals&mdash;to improve our interactions with you and other customers.</p>
            </div>
            <p className="text-sm md:text-base text-[#414141]/80 font-normal italic pl-6  ">
              <strong>Legal basis for processing:</strong> The processing is necessary for the performance of the service provision contract
            </p>
          </div>

          {/* Information we collect automatically */}
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-foreground mt-4">Information we collect automatically</h3>
            <div className="space-y-4 pl-6 text-base text-[#414141] font-normal">
              <div className="space-y-1">
                <p><strong>i. Browser, Device, and Server Information:</strong> When you visit our websites, we collect information that web browsers, mobile devices, and servers make available, such as Internet Protocol (IP) address, browser type, language preference, time zone, referring URL, date and time of access, operating system, mobile device manufacturer, and mobile network information.</p>
                <p className="text-sm text-[#414141]/80 italic"><strong>Legal basis for processing:</strong> Legitimate interest to ensure network security, prevent fraud (especially relevant in music monetization), diagnose technical errors, and maintain the integrity of our systems</p>
              </div>

              <div className="space-y-2">
                <p><strong>ii. First-party Cookies and Tracking Technologies:</strong> We use temporary and permanent cookies to identify users of our services and improve the user experience. We may also use cookies, web beacons, tags, scripts, and other similar technologies to identify visitors, track website navigation, collect demographic information about visitors and users, understand the effectiveness of email campaigns, and for targeted engagement of visitors and users by tracking their activities on our websites. We use first-party and third-party cookies on our websites.</p>
                <p className="text-sm text-[#414141]/80 italic"><strong>Legal basis for processing:</strong> (i) Technical Cookies: Necessary for the platform to function and to identify you as a user. They do not require consent. (ii) Analytical and Advertising Cookies: Only if you have provided your consent through our cookie configurator, we will use these technologies to analyze browsing trends, campaign effectiveness, and create basic user profiles.</p>
              </div>

              <div className="space-y-2">
                <p><strong>iii. App Logs and Mobile Analytics Information:</strong> We or our contractors may collect information about your use of our services from application logs and internal usage analysis tools, and use it to understand how your usage and business needs can improve our products.</p>
                <p>This information includes clicks, scrolls, features accessed, time and frequency of access, generated errors, performance data, storage used, user configurations and settings, devices used to access, and their locations, with the goal of ensuring correct technical operation, improving our products, adapting features to user needs, and maintaining platform security.</p>
                <p className="text-sm text-[#414141]/80 italic"><strong>Legal basis for processing:</strong> We use this information based on our Legitimate Interest for product optimization and business intelligence</p>
              </div>
            </div>
          </div>

          {/* Information we collect from third parties */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground mt-4">Information we collect from third parties</h3>
            <p className="text-base text-[#414141] font-normal pl-6">
              <strong>Registration using OpenID authentication service providers:</strong> You may log in to AMOZART MUSIC INC. Services using supported OpenID authentication service providers such as Soundcloud, Facebook, and Google. These services will authenticate your identity and provide you the option to share certain information with us, such as your name and email address.
            </p>
            <div className="space-y-1 pl-6">
              <p className="text-sm md:text-base text-[#414141]/80 font-normal italic pl-6 border-l-2 border-primary/40">
                <strong>Legal basis for processing:</strong> Consent. When the user voluntarily decides to use the login function via external authentication providers (OpenID, OAuth, Facebook Login, Google Sign-In), they are granting explicit and informed consent for said providers to share their basic personal information (name, email, user ID) with AMOZART MUSIC INC.. You have the right to withdraw your consent at any time.
              </p>
            </div>
          </div>

          {/* Summary of Processing Purposes */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">Summary of Processing Purposes</h2>
            <p className="text-base text-[#414141] font-normal">
              In addition to the purposes mentioned above, we may use your information to:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-base text-[#414141] font-normal">
              <li>Communicate with you (via email) regarding the services you have subscribed to, changes to this Policy, changes to the Terms of Service, or important notices</li>
              <li>Keep you informed about new products and services, upcoming events, offers, promotions, and other information we believe will be of interest to you</li>
              <li>Ask you to participate in surveys or request feedback on our products and services</li>
              <li>Set up and maintain your account, and do everything else necessary to provide our services, such as enabling collaboration, providing website and mail hosting, and backing up and restoring your data</li>
              <li>Understand how users use our products and services, monitor and prevent problems, and improve our products and services</li>
              <li>Provide customer support and analyze and improve our interactions with customers</li>
              <li>Detect and prevent fraudulent transactions and other illegal activities, report spam, and protect the rights and interests of AMOZART MUSIC INC., AMOZART MUSIC INC. users, and third parties.</li>
              <li>Update, expand, and analyze our records, identify new customers, and provide products and services that may be of interest to you</li>
              <li>Analyze trends, administer our websites, and track visitor navigation on our websites to understand what visitors are looking for and better assist them</li>
              <li>Monitor and improve marketing campaigns and make relevant suggestions to the user.</li>
            </ul>
          </div>

          {/* Your Choice in the Use of Information */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">Your Choice in the Use of Information</h2>
            <div className="space-y-3 text-base text-[#414141] font-normal">
              <p><strong>Opt-out of non-essential electronic communications:</strong> You may choose not to receive newsletters and other non-essential messages by using the &quot;unsubscribe&quot; function included in all such messages. However, you will continue to receive essential transactional notices and emails.</p>
              <p><strong>Disable cookies:</strong> You can disable browser cookies before visiting our websites. However, if you do so, you may not be able to properly use certain features of the websites.</p>
              <p><strong>Optional information:</strong> You may choose not to provide optional profile information, such as your photo. You can also delete or change your optional profile information.</p>
            </div>
          </div>

          {/* Who do we share your information with? */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">Who do we share your information with?</h2>
            <p className="text-base text-[#414141] font-normal">
              We share personal data only in the cases and under the conditions described in this Privacy Policy, exclusively with recipients who adopt appropriate technical and organizational measures to ensure confidentiality, integrity, and security, in accordance with applicable regulations.
            </p>
            <div className="space-y-3 text-base text-[#414141] font-normal pl-6">
              <p><strong>Employees and independent contractors:</strong> Access to the information mentioned in Part I is limited to employees and independent contractors whose roles require it. It is mandatory for all members of the AMOZART MUSIC INC. group to comply with this Privacy Policy regarding the personal information provided to them.</p>
              <p><strong>Third-party service providers:</strong> We may share personal information, as well as aggregated or anonymized data, with selected third-party service providers, such as marketing and advertising partners, event organizers, web analytics providers, and payment processors. These providers may use personal information exclusively for the provision of the contracted services.</p>
            </div>
          </div>

          {/* What are your rights? */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">What are your rights?</h2>
            <div className="space-y-3 text-base text-[#414141] font-normal pl-6">
              <p><strong>Right of Access:</strong> You have the right to access (and obtain a copy, if necessary) the categories of personal information we hold about you, including the source, purpose, and period of processing, and the persons with whom the information is shared.</p>
              <p><strong>Right of Rectification:</strong> You have the right to update the information we hold about you and to rectify any inaccuracies.</p>
              <p><strong>Right of Erasure (Right to be Forgotten):</strong> You have the right to request that we delete your personal information in certain circumstances, such as when it is no longer necessary for the purpose for which it was originally collected.</p>
              <p><strong>Right to Restriction of Processing:</strong> You may also have the right to request that the use of your information be restricted in certain circumstances, such as when you have objected to our use of your data but we need to verify whether we have overriding legitimate grounds to use it.</p>
              <p><strong>Right to Data Portability:</strong> You have the right to transfer your information to a third party in a structured, commonly used, and machine-readable format, in circumstances where the information is processed with your consent or by automated means.</p>
              <p><strong>Right to Object:</strong> You have the right to object to the use of your information in certain circumstances, such as the use of your personal information for direct marketing.</p>
              <p><strong>Right to Lodge a Complaint:</strong> You have the right to lodge a complaint with the appropriate supervisory authority if you have any grievances about the way we collect, use, or share your information.</p>
            </div>
          </div>

          {/* How long do we keep your data? */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">How long do we keep your data?</h2>
            <p className="text-base text-[#414141] font-normal">
              We retain your personal information for as long as necessary for the purposes set forth in this Privacy Policy.
            </p>
            <p className="text-base text-[#414141] font-normal">
              Sometimes, we may retain your information for longer periods as permitted or required by law, such as to maintain suppression lists, prevent abuse, if required in connection with a legal claim or proceeding, to enforce our agreements, for tax or accounting purposes, or to comply with other legal obligations.
            </p>
            <p className="text-base text-[#414141] font-normal">
              When we no longer have a legitimate need to process your information, we will delete or anonymize your information from our active databases.
            </p>
          </div>

          {/* Part II */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">Part II &ndash; Data Processors used by AMOZART MUSIC INC.</h2>

            <h3 className="text-lg font-bold text-foreground mt-4">Information that independent contractors or providers process on our behalf</h3>
            <p className="text-base text-[#414141] font-normal">
              We may entrust your personal information to selected independent contractors or providers for the provision of our services or technical support, always in accordance with a data processing agreement that complies with Article 28 of the GDPR.
            </p>
            <p className="text-base text-[#414141] font-normal">
              Specifically, the web platform is hosted and managed by Amozart, who provides all technical support. You can consult their privacy policy at <a href="https://amozart.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Amozart | Privacy policy</a>.
            </p>
            <p className="text-base text-[#414141] font-normal">
              Data may be stored on such servers when using our services, or transferred/shared with said provider as part of the services rendered, applying appropriate technical and organizational security measures.
            </p>
          </div>

          {/* Restricted Access by AMOZART MUSIC INC. */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground mt-4">Restricted Access by AMOZART MUSIC INC.</h3>
            <p className="text-base text-[#414141] font-normal">
              We provide restricted and audited access to your service data only to authorized employees and contractors of AMOZART MUSIC INC. to: (i) identify, analyze, and resolve errors; (ii) verify emails to improve spam detection; or (iii) validate identities in submitted scanned images. We also access data shared voluntarily for technical support or imports. All personnel comply with strict internal privacy and security policies, with an indefinite obligation of confidentiality.
            </p>
          </div>

          {/* Third-party Sub-processors */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground mt-4">Third-party Sub-processors</h3>
            <p className="text-base text-[#414141] font-normal">
              AMOZART MUSIC INC. engages third-party sub-processors for services and technical support, subject to equivalent sub-processing agreements that impose identical data protection obligations as those for processors (Art. 28.4 GDPR).
            </p>
          </div>

          {/* Third-party Integrations enabled by you */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground mt-4">Third-party Integrations enabled by you</h3>
            <p className="text-base text-[#414141] font-normal">
              Our products support integrations with third-party services that you activate, potentially allowing them access to your service data and personal information. Always review the privacy policies of those third parties before enabling them, as AMOZART MUSIC INC. is not responsible for their processing activities.
            </p>
          </div>

          {/* Data Retention */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground mt-4">Data Retention</h3>
            <p className="text-base text-[#414141] font-normal">
              Your data will be kept in your account as long as you continue to use [Tenant name] Services. Upon cancellation of your user account, your data will be deleted from the active database in the next cleanup process, which takes place semi-annually.
            </p>
            <p className="text-base text-[#414141] font-normal">
              Data deleted from the active database will be permanently removed from backups 3 months after their inclusion.
            </p>
          </div>

          {/* Part III */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">Part III &ndash; General</h2>

            <h3 className="text-lg font-bold text-foreground mt-4">Information regarding minors</h3>
            <p className="text-base text-[#414141] font-normal">
              Our services are not directed at minors, as established in Article 8 of the GDPR, which sets the minimum age at 16 years, unless applicable national legislation establishes a lower age.
            </p>
            <p className="text-base text-[#414141] font-normal">
              AMOZART MUSIC INC. does not knowingly collect personal information from minors without the valid consent required by applicable regulations.
            </p>
            <p className="text-base text-[#414141] font-normal">
              If it is detected that personal information of a minor has been provided without appropriate consent, immediate steps will be taken to delete such information and any related data.
            </p>
            <p className="text-base text-[#414141] font-normal">
              To notify us of a potential improper collection of data from a minor, please contact us providing the necessary details; we will proceed to verify and delete such information.
            </p>
          </div>

          {/* Is your information hosting secure? */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground mt-4">Is your information hosting secure?</h3>
            <p className="text-base text-[#414141] font-normal">
              We have taken steps to implement appropriate administrative, technical, and physical safeguards to prevent unauthorized access, use, modification, disclosure, or destruction of the information you entrust to us.
            </p>
          </div>

          {/* Disclosures due to legal obligation */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground mt-4">Disclosures due to legal obligation</h3>
            <p className="text-base text-[#414141] font-normal">
              We may be required to preserve or disclose your personal information and service data to comply with certain laws, regulations, legal processes, or any other applicable governmental requests, as well as to comply with national security requirements.
            </p>
            <p className="text-base text-[#414141] font-normal">
              We may disclose personal information and service data to a third party if we believe such disclosure is necessary to prevent fraud, investigate any suspected illegal activity, enforce our agreements and policies, or protect the safety of our users.
            </p>
          </div>

          {/* Compliance with this Privacy Policy */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground mt-4">Compliance with this Privacy Policy</h3>
            <p className="text-base text-[#414141] font-normal">
              Through periodic reviews, we ensure that the personal information you provide is used in accordance with this Privacy Policy.
            </p>
            <p className="text-base text-[#414141] font-normal">
              If you have any concerns about the Privacy Policy or the way your personal information is used, please write to us.
            </p>
          </div>

          {/* Notification of Changes */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground mt-4">Notification of Changes</h3>
            <p className="text-base text-[#414141] font-normal">
              We may modify the Privacy Policy at any time, notifying you with due notice through a service announcement or by sending an email to your primary email address.
            </p>
            <p className="text-base text-[#414141] font-normal">
              Please note that you can cancel the use of our platform by sending us an email to the following address: <a href="mailto:support@amozart.com" className="text-primary hover:underline">support@amozart.com</a>
            </p>

            <div className="pt-6 border-t border-[#6739b7]/10">
              <h4 className="text-base font-bold text-foreground"><a href="https://amozart.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Amozart | Privacy policy</a></h4>
              <p className="text-sm text-[#414141] font-normal mt-1">
                Amozart&apos;s Privacy Policy: Learn how we collect, use, and protect your data. Committed to GDPR and global privacy standards. Read our full policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
