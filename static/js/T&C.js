const terms = [
    {
        heading: "Terms and Conditions",
        id: "terms",
        body: "Your permission to access and use My Debtor's Services is conditioned upon your agreement to be bound by these Terms. If you do not agree to be bound by these Terms, then you do not have permission to access or use My Debtor's Services. By accessing or using My Debtor's Services, or by clicking “accept” or “agree”, you acknowledge and agree that you have read, understand, and agree to be bound by these Terms. If you do not agree with any of these terms, you are prohibited from using or accessing this site. If you wish to use TSI's Services in a way not authorized by the Terms, you must receive TSI's permission prior to such use."
    },

    {
        heading: "Changes to Terms or Services",
        id: "changes",
        body: "My Debtor reserves the right to modify or terminate the Terms at any time, without prior notice, and at My Debtor's sole discretion. The modified version of the Terms (“Modified Terms”) shall notify you of Modified Terms through direct communication, such as by email or account notifications. It is important for you to review the Modified Terms, because your continued use of My Debtor's Services after you receive the Modified Terms you agree to be bound by such Modified Terms. If you don't agree to be bound by any delivered Modified Terms, your permission to access and use the Services will be revoked and you agree to thereafter cease all access to and use of the Services, and to the extent you have an account with My Debtor, terminate such account. Because My Debtor's Services continue to evolve over time, My Debtor may change or discontinue all or any part of the Services. My Debtor reserves the right to make such changes or discontinuations at any time, without prior notice, and at TSI's sole discretion"
    },

    {
        heading: "Limitations",
        id: "limitations",
        body: "In no event shall My Debtor or its vendors be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption,) arising out of the use or inability to use the materials on My Debtor internet site, even if a My Debtor authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you."
    },

    {
        heading: "Content and Content Ownership",
        id: "ownership",
        body: "For the purposes of these Terms: “Content” means text, data, information, graphics, images, music, software, audio, video, works of authorship of any kind, and information or other materials; “My Debto's Content” means any Content that is posted, generated, provided, or otherwise made available by the site through the Services; “User Content” means any Content that you provide to My Debtor through access to or use of the Services. My Debtor does not claim any ownership rights in any User Content that you make available through the Services and nothing in these Terms will be deemed to restrict any rights you may have to use and exploit your User Content. Subject to the foregoing, My Debtor and its licensors exclusively own all right, title, and interest in and to the Services and My Debtor Content, including all associated intellectual property rights. You acknowledge that the Services and My Debtor Content are protected by copyright, trademark, and other laws of the United States and foreign countries. You agree not to remove, alter, or obscure any copyright, trademark, service mark, or other proprietary rights notices incorporated in or accompanying the Services or Content"
    },

    {
        heading: "TSI Content License",
        id: "tsi",
        body: "Subject to your compliance with these Terms, You will not use, copy, adapt, modify, prepare derivative works based upon, distribute, license, sell, transfer, publicly display, publicly perform, transmit, stream, broadcast or otherwise exploit the Services or My Debtor Content, except as expressly permitted in these Terms. No licenses or rights are granted to you by implication or otherwise under any intellectual property rights owned or controlled by TSI or its licensors, except for the licenses and rights expressly granted in these Terms."
    },

    {
        heading: "User Content License",
        id: "user",
        body: "By making any User Content available through the Services you agree to and hereby grant My Debtor a non-exclusive, transferable, sublicensable, worldwide, royalty-free license to use, copy, modify, create derivative works based upon, distribute, publicly display and perform, and distribute your User Content (i) in connection with operating and providing the Services and My Debtor Content to you and (ii) to third parties, as instructed or requested by you.  You are solely responsible for your User Content. You represent and warrant that you own all your User Content or you have all rights that are necessary to grant us the license rights in your User Content granted under these Terms. You also represent and warrant that neither your User Content, nor your use and provision of your User Content to be made available through the Services, nor any use of your User Content by My Debtor on or through the Services will infringe, misappropriate, or violate a third party's intellectual property rights, or rights of publicity or privacy, or result in the violation of any applicable law or regulation."
    },

    {
        heading: "No Legal Advice",
        id: "legal",
        body: "My Debtor's Content and Services may include information that is legal or regulatory in nature. Such Content is for information purposes only. My Debtor does not provide legal or regulatory advice, and your use of the site Content or Services does not create an attorney/client relationship or fiduciary or other obligation. If you have any questions regarding your rights, or regarding any regulations, you should seek the advice of your previous school/attorney."
    },

    {
        heading: "Links",
        id: "linked",
        body: "My Debtor has not reviewed all of the sites linked to its Internet website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by My Debtor of the site. Use of any such linked website is at the user's own risk."
    },

    {
        heading: "Site Terms of Use Modifications",
        id: "modifications",
        body: "My Debtor may revise these terms of use for its web site at any time without notice. By using this web site you are agreeing to be bound by the then current version of these Terms and Conditions of Use."
    },

    {
        heading: "Website Responsibility",
        id: "responsibility",
        body: "The persons responsible for this site is Zuri.I4G (Team 36). Please Contact them via Zuri.I4G@gmail.com with any questions or if you wish to make any comments or complaints about anything related to this Terms and Conditions."
    }
]

terms.map((head) => {
    const link = document.createElement('a');
    link.innerText = head.heading;
    link.setAttribute("href", "#" + head.id)
    document.getElementById('links').appendChild(link)
})

terms.map((term) => {
    const heading = document.createElement('h3');
    heading.innerText = term.heading;
    heading.setAttribute("id", term.id)
    const body = document.createElement('p');
    body.className = 'body';
    body.innerText = term.body;
    const container = document.createElement('div');
    container.className = ("container");
    container.appendChild(heading)
    container.appendChild(body)
    document.getElementById("terms").appendChild(container)
})
