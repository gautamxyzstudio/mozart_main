import React from "react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Amozart",
  description:
    "Terms & Conditions | Amozart",
};

const Page = () => {
  return (
    <section className="w-full h-full relative flex flex-row justify-between items-start overflow-clip">
      <div className="absolute md:w-37 md:h-188.75 w-17.5 h-87.5 bg-[linear-gradient(180deg,rgba(103,57,183,0)_0%,rgba(103,57,183,0.45)_33.78%,rgba(103,57,183,0)_66.97%)] opacity-20 rotate-24 xl:mt-15.25 xl:ml-0 md:-mt-3 md:-ml-9 mt-11.25 left-0" />
      <div className="absolute md:w-37 md:h-188.75 w-17.5 h-87.5 bg-[linear-gradient(180deg,rgba(103,57,183,0)_0%,rgba(103,57,183,0.45)_33.78%,rgba(103,57,183,0)_66.97%)] opacity-20 xl:rotate-204 rotate-24 xl:-mt-44.5 xl:mr-10 md:-mt-3 md:mr-3.5 mt-12.5 mr-17 right-0" />
      {/* Content */}
      <div className="relative z-10 max-w-257.25  md:mt-30.5 mt-20 xl:mb-30 md:mb-20 mb-10 xl:px-26 md:px-12 px-6">
        {/* Heading */}
        <h1 className="text-4xl md:text-[80px] font-bold text-black mb-10">
          Terms & Conditions
        </h1>

        {/* Terms text */}
        <div className="text-black font-medium text-base leading-7 space-y-6">
          <ol className="list-decimal pl-5 space-y-6">
            <li>
              This Agreement governs the relationship between Ditto Ltd, trading
              as Ditto Music of 29-31 Parliament Street, Liverpool, L8 5RN,
              Company No. 03976764 (‘us/we/our’) and __________________
              (‘you/your/the Artist’) in respect of any musical works or sound
              recordings (‘Works’) that you submit to us for inclusion in any of
              the services (‘Service’).
            </li>

            <li>
              <p className=" font-semibold">Grant of Rights.</p>

              <p className="mb-3">
                In consideration of the fees payable by us and the services
                provided by us pursuant to this Agreement, you grant to us and
                our licensees for the term of this Agreement:
              </p>

              <ol className="list-[upper-alpha] pl-6 space-y-3">
                <li>
                  a non-exclusive worldwide licence to use, reproduce,
                  distribute, display, publicly perform, exhibit, broadcast and
                  transmit and make available to all persons and media whether
                  now known or existing in the future the Works for distribution
                  in the Service.
                </li>

                <li>
                  a non-exclusive licence of the following rights as defined in
                  the Copyright, Designs and Patents Act:
                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li>The Performing Right</li>
                    <li>The Dubbing Right</li>
                    <li>The New Media Communication Right</li>
                    <li>The New Media Dubbing Right</li>
                    <li>The Foreign Rights Management Right</li>
                    <li>The International New Media Communication Right</li>
                    <li>The International New Media Dubbing Right</li>
                  </ul>
                </li>

                <li>
                  Synchronise the Works in moving images (for example
                  incorporating the Work into the soundtrack of a video game,
                  advert, film or television show).
                </li>
              </ol>
            </li>

            <li>
              You grant to us (on behalf of yourself) all necessary consents
              under the Copyright, Designs and Patents Act 1988 (‘Act’) and any
              modifications or re-enactment thereof to enable us to make the
              fullest possible use of the Works.
            </li>

            <li>
              Standard Service prices shall be listed at www.dittomusic.com.
              Services carried out shall be as listed on www.dittomusic.com at
              time of purchase.
            </li>

            <li>
              Payment shall only be made to you if accumulated outstanding
              earnings exceed $25GBP.
            </li>

            <li>
              You warrant, agree and undertake both on behalf of yourself that
              the Works are original to you and have not been copied from any
              third party.
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Page;
