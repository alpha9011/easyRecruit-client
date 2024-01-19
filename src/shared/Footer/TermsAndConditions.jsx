

const TermsAndConditions = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>

      <p className="mb-4">
        Welcome to <strong>[easyRecruit]</strong>! These terms and conditions outline the rules and regulations for
        the use of <strong>[easyRecruit]</strong>.
      </p>

      <h2 className="text-2xl font-bold mb-2">License</h2>

      <p className="mb-4">
        Unless otherwise stated, [Your Company Name] and/or its licensors own the intellectual property rights for all
        material on [Your Website]. All intellectual property rights are reserved. You may access this from [Your
        Website] for your own personal use subjected to restrictions set in these terms and conditions.
      </p>

      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">You must not:</h3>
        <ul className="list-disc pl-6">
          <li>Republish material from [easyRecruit]</li>
          <li>Sell, rent, or sub-license material from [easyRecruit]</li>
          <li>Reproduce, duplicate, or copy material from [easyRecruit]</li>
          <li>Redistribute content from [easyRecruit]</li>
        </ul>
      </div>

      <p className="mt-4">This Agreement shall begin on the date hereof.</p>

      {/* Add more sections as needed */}

      <p className="mt-4">
        If you have any questions about these Terms and Conditions, please contact us at{" "}
        <strong>[your contact email]</strong>.
      </p>

      <p className="mt-4">*These Terms and Conditions were last updated on [Date].</p>
    </div>
  );
};

export default TermsAndConditions;
