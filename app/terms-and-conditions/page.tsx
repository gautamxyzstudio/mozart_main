import React from "react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: " Terms & Conditions | Amozart Global Music Distribution",
  description:
    "Read the official terms and conditions for using Amozart’s global music distribution, promotion, and automated royalty split services.",
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
            Terms & <span className="text-primary">Conditions</span>
          </h1>
          <div className="w-[75%] h-[1.5px] bg-gradient-to-r from-[#6739b7] to-transparent mt-8 mb-16" />
        </div>

        {/* Content Body */}
        <div className="max-w-[1000px] text-black80 font-medium text-base md:text-lg leading-7 md:leading-8 space-y-5">
          {/* Document Title */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Terms of Use</h2>
          </div>

          {/* Metadata Block */}
          <div className="text-base text-[#414141] font-normal space-y-1">
            <p><strong>Start Date:</strong> —</p>
            <p><strong>Contract Code:</strong> 201808</p>
            <p><strong>Client Name:</strong> —</p>
            <p><strong>Company:</strong> —</p>
            <p><strong>NIF/CIF/ID:</strong> —</p>
          </div>

          {/* Welcome Intro Section */}
          <div className="space-y-4">
            <p className="text-base text-[#414141] font-normal">
              Thank you very much for choosing Amozart MUSIC INC. as your Digital Music Distributor. We hope you enjoy our service and achieve great success with your music career. Please, read these Terms of Use very carefully as they constitute a binding agreement between you (in these Terms, the End User or You), and us (in these Terms, Amozart MUSIC INC., We or Us) and are effective upon the registration on the platform, available at <a href="https://amozart.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://amozart.com</a> (hereinafter, the Platform).
            </p>
            <p className="text-base text-[#414141] font-normal">
              Formally, the provider of the service and responsible of the Platform is Amozart Music Inc., which is a limited liability Company constituted and existing under the laws of Canada, with legal address in <Link className="text-primary hover:underline" href="https://maps.google.com/?q=Carrer+de+Trafalgar,+10,+08010+Barcelona,+Spain" target="_blank" rel="noopener noreferrer">Carrer de Trafalgar, 10, 08010 Barcelona, Spain</Link>, Tax ID # and registered at the Commercial Register of Surrey with Company Registration Number . Our contact information can be found in the &quot;Contact&quot; Tab of the &quot;Legal&quot; section in your account.
            </p>
            <p className="text-base text-[#414141] font-normal">
              The Amozart MUSIC INC. services shall be provided in accordance with:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-base text-[#414141] font-normal">
              <li>The Terms of Use set forth in this document.</li>
              <li>The Privacy Policy made available to You in the Legal Section of your Account.</li>
            </ul>
            <p className="text-base text-[#414141] font-normal">
              Please, provide and fill out all the information required in the &quot;Account-&gt; Profile&quot; section of the Platform as it is necessary to create the contractual relationship between us. We made our Terms of Use as easy to read as possible, but if you have any doubt or query, please contact us by using any of the communication channels described above.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">Table of Contents:</h2>
            <ol className="list-decimal pl-6 space-y-1 text-base text-[#414141] font-normal">
              <li>Definitions</li>
              <li>General Conditions; Access to and use of the Services</li>
              <li>What You can do and what you can&apos;t do</li>
              <li>Fees</li>
              <li>Duration and Termination</li>
              <li>Intellectual Property Rights</li>
              <li>Fraud</li>
              <li>Privacy</li>
              <li>Warranty. Limitation of Liability</li>
              <li>Miscellaneous</li>
            </ol>
          </div>

          {/* Definitions */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">Definitions</h2>
            <p className="text-base text-[#414141] font-normal">
              To facilitate the understanding of these Terms of Use, the following principal expressions will have these meanings:
            </p>
            <div className="space-y-3 pl-4 border-l-2 border-[#6739b7]/80 text-base text-[#414141] font-normal">
              <p><strong>&ldquo;Customer&rdquo;:</strong> refers to any individual that accesses or makes use of a Digital Music Service.</p>
              <p><strong>&ldquo;Digital Distribution&rdquo;:</strong> means the transferring by any means of data transmission or communication, through the internet, internet radio, kiosks, in-store listening posts, mobile, wireless, satellite and similar communication systems, whether now known or existing in the future, of the End User Content in multiple digital formats including but not limited to clips, permanent downloads, subscriptions, streams and timeout-downloads, ring-tones and ring-back tones and any other means.</p>
              <p><strong>&ldquo;Digital Music Service&rdquo;:</strong> means any digital outlet, such as music download portals, music and video streaming services, mobile music platforms, digital (and terrestrial) radio stations, digital (and terrestrial) television networks, and mobile networks (each a &ldquo;DMS&rdquo;, i.e.: Apple iTunes, Spotify, Tidal, Google Play, etc.), that enables Customers to purchase and/or listen to End User Content.</p>
              <p><strong>&ldquo;End User&rdquo;:</strong> that&rsquo;s You (hereinafter, the End User), which is an artist, songwriter, author, producer, agent (including royalty recipients), rights holder or others who are authorized and entitled to exploit certain music (including the composition and the recording) and to use the Platform, the Platform API or portions thereof.</p>
              <p><strong>&ldquo;End User Content&rdquo;:</strong> means all intellectual property works (including without limitation musical works, recordings, video clips, ring-tones, real-tones, lyrics, logos, covers and photos) as to which the End User has the necessary exploitation rights, including &ldquo;Neigboring Rights&rdquo;.</p>
              <p><strong>&ldquo;Platform&rdquo;:</strong> refers to the digital music distribution platform available at <a href="https://amozart.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://amozart.com/</a> or your designated subdomain.</p>
              <p><strong>&ldquo;Service&rdquo;:</strong> means the service provided by Us through the Platform, in order to make the End User Content available on Digital Music Services (here, the Digital Distribution Services).</p>
            </div>
            <p className="text-base text-[#414141] font-normal">
              Hence, these are the rights and obligations of each of us:
            </p>
          </div>

          {/* General Conditions */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">General Conditions; Access to and use of the Services</h2>
            <p className="text-base text-[#414141] font-normal">
              2.1 During the Duration and subject to compliance by You with these Terms of Use, You have the right to access to the Platform and enjoy the Service provided by Us through it.
            </p>
            <p className="text-base text-[#414141] font-normal">
              2.2 For information purposes, the features of the Platform include but are not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-base text-[#414141] font-normal">
              <li>Upload of the End User Content to the Platform for its availability on Digital Music Services.</li>
              <li>Selection of the channels, territories and Digital Music Services where End Users want their content to be available at.</li>
              <li>Optional services, including quality control, distribution, updates and storage.</li>
              <li>Pay directly the corresponding fees for the contracting services.</li>
              <li>Hosting of the End User Content.</li>
              <li>Qualification, transformation and transmission to Digital Music Services.</li>
              <li>Updating of distributed works in Digital Music Services.</li>
              <li>Takedown of content.</li>
              <li>Assigning codes (ISRC, UPC, ISWC).</li>
              <li>Accessing sales and usage reports of the End User Content in the Digital Music Services.</li>
              <li>Request out payment of the Royalties generated by the End User Content.</li>
              <li>Manage and receive neighboring rights.</li>
            </ul>
            <p className="text-base text-[#414141] font-normal">
              Nonetheless, We reserve the right to include new functionalities or eliminate any of the features of the Service, to change the characteristics, design, appearance or presentation of the Platform and the Service, in which case, if You are unsatisfied with the resulting Platform, You can terminate the relationship in the terms described in these Terms of Use.
            </p>
            <p className="text-base text-[#414141] font-normal">
              2.3 Furthermore, You undertake that You have all necessary rights in respect with Your Content to exploit it through the Platform and, therefore, give us the administration of your Content as requested by You at each time, in the terms described in Section 6. This right and authorization is granted on an exclusive basis for those Digital Music Services on which You decide to make Your Content available through our Service; this means that if You use the Service to make Your Content available in an specific Digital Music Service, You can&rsquo;t make the same content available in the same Digital Music Service using a service different than the Service and the Platform.
            </p>
          </div>

          {/* What You can do and what you can't do */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">What You can do and what you can&apos;t do</h2>
            <h3 className="text-lg font-bold text-foreground mt-6">Use of the Platform</h3>
            <p className="text-base text-[#414141] font-normal">
              3.1 By registering and uploading Your Content on the Platform, You assume and undertake, essentially, the following obligations:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-base text-[#414141] font-normal">
              <li>You shall use the Platform diligently and upload information and content whose rights belong to You or for which You are authorized by the rights holder.</li>
              <li>You shall provide all the necessary information to use the Service, which We will request during the use of the Service.</li>
              <li>You shall pay all the applicable fees for the Services rendered by Us, as described below.</li>
              <li>You shall inform Us of any activity that is inconsistent with this Terms of Use.</li>
              <li>You shall indicate through the Platform if Your Content contains &ldquo;explicit&rdquo; content. The term &ldquo;explicit&rdquo; content refers to content that evokes sexual, racist, violent or any other harmful connotations.</li>
              <li>You shall not perform illegal activities through the Platform or the Services, and/or actions that could harm or damage any party, including Us.</li>
            </ul>
            <p className="text-base text-[#414141] font-normal mt-4">
              3.2 You undertake to use diligently the Platform and, therefore, undertake:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-base text-[#414141] font-normal">
              <li>not to grant access to the Platform to any third party or to employees that due to their position in the company, reasonably should not access the Platform;</li>
              <li>not to access the source code of the Platform;</li>
              <li>not to use the information, rules or instructions contained in the Platform for purposes different than those established in these Terms of Use;</li>
              <li>not to disclose to any third party any of the information obtained through the Platform;</li>
              <li>not to permit the public to access or use the Platform (including without limitation, via the internet).</li>
              <li>not to use the Platform to upload content not owned by You or for which You do not have an explicit license to commercially exploit.</li>
              <li>not to reproduce the Platform, in whole or in part, for any purposes;</li>
              <li>not to copy and/or distribute the Platform, in whole or in part, by any manner;</li>
              <li>not to create any form of &ldquo;frame&rdquo; or &ldquo;mirror&rdquo; for (any part of) the Platform on any other server or wireless or Internet‑based device;</li>
              <li>not to transfer the Platform to any third party;</li>
              <li>not to assign, sell, resell, rent, lease, lend, sublicense, outsource or otherwise transfer the Platform and/or the Service to any third party, or authorize or appoint any third party to do so;</li>
              <li>not to modify the Platform or provide any person with the means to do the same. This includes the creation of derivative works and to translate, disassemble, recompile, alter, destroy or reverse engineer the Platform or attempt to do so, unless when expressly permitted by the applicable regulation;</li>
              <li>not to circumvent the technological protection measures incorporated in the Platform.</li>
            </ul>
            <p className="text-base text-[#414141] font-normal">
              3.3 In general, You agree to use the Platform in a lawful and diligent manner and will not do anything forbidden by Law or by these Terms of Use. You will be liable to Us in respect of any breach of these Terms of Use, as described in Section 9.
            </p>

            <h3 className="text-lg font-bold text-foreground mt-6">Upload and storage of Your Content</h3>
            <p className="text-base text-[#414141] font-normal">
              3.4 After registration, You can upload Your Content (including sound recordings and audiovisual works, photographs, images, and other related content) to your personal account, for their subsequent Digital Distribution.
            </p>
            <p className="text-base text-[#414141] font-normal">
              3.5 You can only upload content to the Platform for which You are the owner or have the rightsholders&rsquo; permission in writing, and cannot upload any content whose rights are held by third parties. We may ask you to facilitate to Us all documents, contracts and registration certificates necessary to confirm that you own the rights of Your Content and reserve the right to ask you not to upload content from a specific author or producer, or We may also remove any of Your Content from the Platform for which We don&rsquo;t have the legal conviction that it belongs to You.
            </p>
            <p className="text-base text-[#414141] font-normal">
              3.6 As specified before, You can&rsquo;t, under any circumstance, upload any content that could be harmful, threatening, unlawful, confidential, defamatory, libelous, harassing, obscene, indecent, fraudulent, infringing the rights of privacy, incites hate or includes texts of racist, ethnic or other nature, that is against or hinders or limits in any way any individual, or which may expose Us or third parties to any harm or liability of any kind.
            </p>
            <p className="text-base text-[#414141] font-normal">
              3.7 You can&rsquo;t either upload any private or fake information of any third party, including, among others, mail addresses, phone numbers, and email addresses.
            </p>
            <p className="text-base text-[#414141] font-normal">
              3.8 You are not allowed to upload any content that may breach copyright law or third party brand ownership
            </p>
            <p className="text-base text-[#414141] font-normal">
              3.9 As We specified before, You are free to exploit Your Content, directly or through third parties, to Digital Music Services which are not selected or made available on the Platform.
            </p>
            <p className="text-base text-[#414141] font-normal">
              3.10 We reserve the right to access to and analyze all or part of Your Content in order to guarantee the compliance with the Law and with these Terms of Use. We also reserve the right to delete files, data or information uploaded by You if We deem that they are not in compliance with these Terms of Use, or if We think they are not suitable or appropriate for the Platform or the Service.
            </p>
            <p className="text-base text-[#414141] font-normal">
              3.11 Finally, for clarification purposes, these Terms of Use do not provide any obligation to You to upload a minimum quantity of content and/or a minimum availability of it.
            </p>
          </div>

          {/* Fees */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">Fees</h2>
            <p className="text-base text-[#414141] font-normal">
              4.1 By using the Service, You shall pay to Us the fees corresponding to the Services contracted, which can be found at any time in the &quot;My Account &gt; Pricing&quot; section of your Account.
            </p>
            <p className="text-base text-[#414141] font-normal">
              Additionally, You will receive 100.00% of the net incomes (deducting expenses and taxes) which We receive from Digital Music Services from the exploitation of Your Content. If applicable, You authorize Us to deduct 0% sales commission percentage from the net incomes received by Us from Digital Music Services.
            </p>
            <p className="text-base text-[#414141] font-normal">
              The abovementioned Service fees, sales commission percentage and the minimum payment threshold for You are listed in the Platform, in the &quot;My Account &gt; Pricing&quot; section.
            </p>
            <p className="text-base text-[#414141] font-normal">
              4.2 All payments and associated claims: (i) will be made through the corresponding &quot;Sales-&gt;Balance&quot; section of the Platform; (ii) will be made in the currency stated by Us; and (iii) will be payable via PayPal or bank-to-bank wire transfer to the account designated by You. If any authority imposes a duty, tax, levy, or fee, You agree to pay that amount or supply exemption documentation.
            </p>
            <p className="text-base text-[#414141] font-normal">
              Payment of generated sales fees under these Terms of Use shall be made on a once a month, within days from receipt of an out payment request from you, provided always that the due amount exceeds the corresponding minimum payment threshold for the relevant requested payout. Nonetheless, You authorize Us to withhold any payment during an additional period of twenty-four (24) months in the event we deem that such payment contains incomes or fees totally or partially generated fraudulently or contravening these Terms of Use or the Anti-Fraud Policy. Any payment You receive from Us will be subject to all and any applicable taxes (including VAT, withholding taxes, etc.).
            </p>
            <p className="text-base text-[#414141] font-normal">
              The payment of an invoice will not later prevent Us from disputing the invoiced amounts pursuant to any rights herein. We may recoup any amounts due to Us from You by withholding such amounts from any fees otherwise due in the future and providing notice thereof.
            </p>
            <p className="text-base text-[#414141] font-normal">
              4.3 If any Digital Music Service deducts any amount due to any passed contingency, overpayment or conclusion in relation to Your Content or an investigation by Us reasonably demonstrates that any of Your fees for any prior month should have been lesser, We may, at the conclusion of such investigation and at our sole discretion, provide a revised sales report for the applicable month(s) and deduct the corresponding amount from future payments, what You acknowledge and accept.
            </p>
            <p className="text-base text-[#414141] font-normal">
              4.4 Therefore, You expressly and irrevocably authorize Us to collect all incomes from the exploitation of Your Content through the Platform, including but not limited to author rights, performing and recording rights, any levy established by law for private copies, or for any other concept, without limitation. For this purpose, We may ask you to sign a specific authorization letter as solicited by the corresponding Performing Right Organization, which You undertake to provide as soon as requested by Us.
            </p>
            <p className="text-base text-[#414141] font-normal">
              4.5 We will make any corresponding invoices and receipts, including mandatory taxes, available to You according to the applicable regulations.
            </p>
            <p className="text-base text-[#414141] font-normal">
              4.6 We reserve the right to change in the future the Service price, the sales commission percentage or the minimum payment threshold, in which case the new terms will be notified to You not less than thirty (30) days prior to the effective date and will be applicable to future incomes.
            </p>
            <p className="text-base text-[#414141] font-normal">
              4.7 We may decide not to charge you initially for the use of the Service and any optional service, however, You authorize Us to deduct the corresponding amounts from your future payments.
            </p>
            <p className="text-base text-[#414141] font-normal">
              In the event that after one year from the start of the relationship, You have distributed Your Content on credit, without having generated enough sales to pay back the outstanding balance, We reserve the right to request the payment of the outstanding balance.
            </p>
            <p className="text-base text-[#414141] font-normal">
              4.8 Audits: We will maintain accurate and complete records of account including all documentation needed by You to compute and verify the fees payable to You in connection with the performance of our agreement. During the Duration of our relationship and the three-year period thereafter, upon reasonable advance written notice, but in no event less than 30 calendar days&rsquo; notice, an independent reputable certified accounting firm appointed by You, will have the right to examine those records at any time during our normal business hours at the place where such records are normally maintained. You will have the right to audit your records only once a year.
            </p>
          </div>

          {/* Duration and Termination */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">Duration and Termination</h2>
            <p className="text-base text-[#414141] font-normal">
              5.1 The duration of our contractual relationship is initially undetermined. It shall begin when registering at the Platform and upon the explicit acceptance of these Terms of Use, and You or Us may elect to terminate the Service at any time by providing notice, in accordance with these Terms of Use, of thirty (30) days from the termination date.
            </p>
            <p className="text-base text-[#414141] font-normal">
              In the event of termination, You must pay all outstanding amounts to Us in a maximum period of five (5) days from the notification date or We will transfer to you any positive balance, whichever is the case. Prior to requesting the termination, You must remove the Content from the DMSs using the &quot;Takedown&quot; functionality that is available to you within the Platform. Moreover, in the event of termination, You authorize Us to suspend your account, block your access to your account and delete all the files and information uploaded by You to the Platform. The termination shall not affect the accrued rights and obligations of the parties at the date of termination.
            </p>
            <p className="text-base text-[#414141] font-normal">
              5.2 Additionally, We may terminate our relationship and the Service:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-base text-[#414141] font-normal">
              <li>in the event You breach any term or condition established by Us (here or in any other document accepted by You) and You fail to remedy such breach within two (2) days of the date of notice from Us;</li>
              <li>in case the outstanding balance is not paid as per Section 4.7, We will have the right to terminate the relationship and cease the Service.</li>
              <li>If You become the subject of any proceeding related to your liquidation or insolvency (whether voluntary or involuntary) which is not dismissed within sixty (60) calendar days;</li>
              <li>If You infringe our Intellectual Property Rights.</li>
              <li>If You infringe our Anti-Fraud Policy.</li>
              <li>In case you commit any unlawful activity using the Platform or the Service.</li>
            </ul>
            <p className="text-base text-[#414141] font-normal">
              5.3 In all cases, all costs due for any Service provided by Us until the termination date, must be duly paid by You.
            </p>
            <p className="text-base text-[#414141] font-normal">
              5.4 We will not be liable to You for damages of any kind because of the termination of our relationship in accordance with these Terms of Use. Our respective rights and obligations contained in sections that by their nature are intended to survive, will survive the termination of this relationship.
            </p>
            <p className="text-base text-[#414141] font-normal">
              Regardless the termination of the Service, You and We agree to maintain in force those contracts signed by Us with third parties before receiving the notification of termination in the event the contracts with such third parties would be still in force.
            </p>
          </div>

          {/* Intellectual Property Rights */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">Intellectual Property Rights</h2>
            <p className="text-base text-[#414141] font-normal">
              6.1 Nothing contained herein shall be construed as granting or conferring any property rights in the Platform or any part thereof to You; therefore, We are not granting to You by means of this Terms of Use, the right to exploit our Intellectual Property (including but not limited to copyright, patent, trademarks, registered marks, trade secrets, and confidential and proprietary information relating thereto). All these rights are expressly reserved by Us and, as a consequence, We will retain all licensed or ownership rights to the Platform, our brands, technology, etc., together with any complete or partial copies thereof.
            </p>
            <p className="text-base text-[#414141] font-normal">
              6.2 When You upload any of Your Content to our servers through the Platform, you are recognizing the following:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-base text-[#414141] font-normal">
              <li>that We are authorized to administrate, directly or through third parties, Your Content (including the recordings, videos, compositions, artwork, etc.) through the Digital Music Services selected by You, in the entire world and during the duration of our relationship (including section 5.4);</li>
              <li>that You own and/or control all rights in and to the Your Content and/or have the full right and ability to upload Your Content and exploit it in the terms described herein;</li>
              <li>that Your Content does not infringe the copyrights or any other right, of any third party.</li>
              <li>that We are authorised during the Duration of the agreement, to grant to third parties synchronisation licences of Your Content for the entire world.</li>
            </ul>
            <p className="text-base text-[#414141] font-normal">
              6.3 If any of Your Content use any kind of the so-called &ldquo;copyleft license&rdquo; and such content was created or developed by a person (including artists and producers) which is not associated to any Performing Right Organization (such as but not limited to SACEM in France, MCPS in UK, SGAE in Spain, GEMA in Germany, etc.) in any country of the world, upon the compliance of section 4.4 above, then You authorize Us to claim on their behalf, where appropriate, to the Performing Right Organization of each country, any royalties, levies, duties, etc. that Digital Music Services have paid in respect with such content.
            </p>
            <p className="text-base text-[#414141] font-normal">
              6.4 You must indicate through the Platform the name of the record label (associated with the phonographic producer) for each release or phonogram that you intend to distribute in any country in the world using the platform (phonographic producer that is associated with any Collective Management Society (CMO), as for example SCPP in France, PPL in the United Kingdom, AGEDI in Spain, CAPIF in Argentina, etc.). In contrast, if any of Your content is distributed using any &quot;Public Label Name&quot; available on the platform, you agree, in accordance with the provisions of section 4.4 above, with the following:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-base text-[#414141] font-normal">
              <li>You authorize and facilitates the transmission by you to us and the acquisition by us from you of the following rights: Reproduction Rights, Public Communication Rights, of your contents (sound recordings or music videos) distributed using the platform.</li>
              <li>You authorize us to claim in your name, as appropriate, to the Collective Management Society (CMO) of each country, any rights, charges, obligations, etc. that those have collected with respect to said content.</li>
            </ul>
          </div>

          {/* Fraud */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">Fraud</h2>
            <p className="text-base text-[#414141] font-normal">
              7.1 We work very hard and invest extensive resources to avoid automated and fraudulent behaviors. For this reason, we have created a specific Anti-Fraud Policy, that is available in the &quot;Legal&quot; section of your account. When you accept these Terms of Use, you also acknowledge and accept our Anti-Fraud Policy and, therefore, You accept that, among other commitments, You will not, and will not authorize any third party to, directly or indirectly, generate automated, fraudulent, or otherwise invalid playback actions, especially in Digital Music Services.
            </p>
            <p className="text-base text-[#414141] font-normal">
              7.2 In this Anti-Fraud Policy we have implemented a 3-strike policy; therefore, please, read carefully such policy as We will be very strict applying it.
            </p>
          </div>

          {/* Privacy */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">Privacy</h2>
            <p className="text-base text-[#414141] font-normal">
              8.1 Our data protection policy is described in the Privacy Policy. The Privacy Policy is part of our relationship and, therefore, when you accept these Terms of Use, you are also acknowledging and accepting our Privacy Policy, which is available in the &quot;Legal&quot; section of your account.
            </p>
          </div>

          {/* Warranty. Limitation of Liability */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">Warranty. Limitation of Liability</h2>
            <p className="text-base text-[#414141] font-normal">
              9.1 We cannot warrant to You that the Platform and the Service will meet your requirements. Except as expressly provided in these Terms of Use, We provide the Services and the Platform &quot;as is&quot; and without warranty. We disclaim all other warranties, express or implied, including the implied warranties of non-infringement, merchantability, and fitness for a particular purpose. The Platform cannot be tested in every possible operating environment, therefore We do not warrant that the functions contained in the Platform will meet your requirements, that operation of the Platform will be uninterrupted, or that the Platform is error free. Except as set forth herein and to the extent permitted by law, all other warranties, expressed or implied, statutory or otherwise, including, but not limited to, implied warranties of merchantability, quality, and fitness for a particular purpose are excluded on the part of Us. Neither Us nor any of our third-party suppliers or partners shall be liable for any injury, loss or damage, whether indirect, special, incidental or consequential nor for any lost profits, contracts, loss of data or programs, the cost of recovering such data, or incorrect, defective or faulty performance of Your Content.
            </p>
            <p className="text-base text-[#414141] font-normal">
              9.2 You will assume all liability and defend, indemnify, and hold Us and any party, harmless for the use of the Platform and the Service.
            </p>
            <p className="text-base text-[#414141] font-normal">
              9.3 Our liability under or in connection with the Platform and the Service (including damages) whether arising from negligence, breach of contract or otherwise shall be limited to the value of the fees paid by You to Us during the 12 months prior to the claim.
            </p>
            <p className="text-base text-[#414141] font-normal">
              9.4 We shall not be liable for any loss of, whether arising directly or indirectly, (a) profits, (b) savings, (c) goodwill, (d) reputation, (e) revenue, (f) anticipated savings, (g) business or opportunity or (h) any other like pure economic loss; nor any special, indirect, consequential or incidental losses or damages of any kind or nature whatsoever regardless of whether in each case arising from breach of contract, warranty, tort, strict liability, negligence or otherwise, even if advised of the possibility of such loss or damage, or if such loss or damage could have been reasonably foreseen.
            </p>
            <p className="text-base text-[#414141] font-normal">
              9.5 We respect the rights of others (including copyright, image and personality rights, etc.) and expect our clients to do the same. In compliance with the European Directive on Liability of Internet Service Providers, we will respond expeditiously to remove or disable access to material uploaded by users of the Platform and/or the Service that is claimed to infringe third parties&rsquo; rights.
            </p>
          </div>

          {/* Miscellaneous */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">Miscellaneous</h2>
            <p className="text-base text-[#414141] font-normal">
              10.1 Non-assignment: You may not assign your account or any interest therein to any third party (including companies of your same group), without our express prior written consent.
            </p>
            <p className="text-base text-[#414141] font-normal">
              10.2 Severability: If any provision of this Agreement is found invalid or unenforceable, that provision will be enforced to the maximum extent permissible, and the other provisions of this Agreement will remain in force.
            </p>
            <p className="text-base text-[#414141] font-normal">
              10.3 Promotion: We are not obliged to effectuate any online promotion and/or marketing of Your Content under these Terms of Use. However, We may offer complimentary promotional services which You may contract separately.
            </p>
            <p className="text-base text-[#414141] font-normal">
              10.4 Notifications: Any notice that You or Us need to effectuate in connection with the development and performance of these Terms of Use shall be, whichever their object, by email at the addresses listed on your account on the Platform and, to Us, to any of the following means:
            </p>
            <div className="pl-4 border-l-2 border-[#6739b7]/80 text-base text-[#414141] font-normal space-y-1">
              <p>Amozart Music Inc.</p>
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
              <p>Email: <a href="mailto:support@amozart.com" className="text-primary hover:underline">support@amozart.com</a></p>
            </div>
            <p className="text-base text-[#414141] font-normal">
              10.5 Amendments: We may amend this Terms of Use, the Anti-Fraud Policy, the Privacy Policy or any other legal document from time to time, in which case the new terms will supersede prior versions. We will notify You not less than ten (10) days prior to the effective date of any such amendment and your continued use of the Service and/or the Platform following the effective date of any such amendment may be relied upon by Us as your consent to any such amendment. Our failure to enforce at any time any provision of these Terms of Use, the Anti-Fraud Policy or any other legal document does not constitute a waiver of that provision or of any other provision of our terms.
            </p>
            <p className="text-base text-[#414141] font-normal">
              10.6 Confidentiality: In the event We provide any kind of information to you (including but not limited to statistics of the Platform, performance KPIs, marketing material, etc.) You agree to treat such information as confidential and in no event shall be utilized (for its benefits or for third parties), disclosed, transmitted to third parties or made public in any way by You without our prior written agreement.
            </p>
            <p className="text-base text-[#414141] font-normal">
              10.7 Law and Jurisdiction: This Agreement shall be governed and construed in accordance with the laws of spain. When valid by law, any dispute, controversy or claim arising under, out of or relating to this contract and any subsequent amendments of this contract, including, without limitation, its formation, validity, binding effect, interpretation, performance, breach or termination, as well as non-contractual claims, shall be referred to and finally determined by arbitration in accordance with the WIPO Arbitration Rules. The arbitral tribunal shall consist of a sole arbitrator. The place of arbitration shall be Spain. The language to be used in the arbitral proceedings shall be English. However, if local regulations establish any kind of limitation based on the nature of the End User, any claims or lawsuits between the parties will be resolved by the Courts of the city of Spain.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
