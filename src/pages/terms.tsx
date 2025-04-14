
import { BasicLayout } from "../components/layouts/BasicLayout";

const Terms = () => {
  return (
    <BasicLayout>
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-foreground/70">Last updated: April 14, 2025</p>
        </div>

        <div className="prose prose-lg prose-invert max-w-none">
          <p>
            Welcome to TubeTribe! These Terms of Service ("Terms") govern your access to and use of the TubeTribe website, services, and applications (the "Services"). Please read these Terms carefully before using our Services.
          </p>

          <h2>1. Accepting These Terms</h2>
          <p>
            By creating an account, accessing, or using our Services, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you may not access or use the Services.
          </p>

          <h2>2. Privacy Policy</h2>
          <p>
            Our Privacy Policy describes how we handle the information you provide to us when you use our Services. You understand that through your use of the Services you consent to the collection and use of this information as set forth in the Privacy Policy.
          </p>

          <h2>3. Account Creation and Responsibilities</h2>
          <p>
            To access certain features of our Services, you must create an account. You are responsible for safeguarding your account and for all activities that occur under your account. You agree to:
          </p>
          <ul>
            <li>Provide accurate and complete information when creating your account</li>
            <li>Maintain the security of your account password</li>
            <li>Promptly notify us of any unauthorized access to your account</li>
            <li>Take responsibility for all activities that occur under your account</li>
            <li>Not share your account with anyone else</li>
          </ul>

          <h2>4. User Content</h2>
          <p>
            Our Services allow you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("User Content"). You are responsible for the User Content that you post, including its legality, reliability, and appropriateness.
          </p>
          <p>
            By posting User Content on or through our Services, you represent and warrant that:
          </p>
          <ul>
            <li>The User Content is yours (you own it) or you have the right to use it and grant us the rights and license as provided in these Terms</li>
            <li>The posting of your User Content on or through our Services does not violate the privacy rights, publicity rights, copyrights, contract rights, or any other rights of any person</li>
          </ul>

          <h2>5. Prohibited Activities</h2>
          <p>
            You agree not to engage in any of the following prohibited activities:
          </p>
          <ul>
            <li>Using the Services for any illegal purpose or in violation of any laws</li>
            <li>Posting unauthorized commercial communications</li>
            <li>Collecting users' content or information without their consent</li>
            <li>Uploading viruses or other malicious code</li>
            <li>Attempting to access accounts, systems, or networks without authorization</li>
            <li>Interfering with or disrupting the Services or servers</li>
            <li>Harassing, bullying, or intimidating other users</li>
          </ul>

          <h2>6. Termination</h2>
          <p>
            We reserve the right to terminate or suspend your account and access to our Services at our sole discretion, without notice, for any reason, including but not limited to a breach of these Terms.
          </p>

          <h2>7. Limitation of Liability</h2>
          <p>
            In no event shall TubeTribe, its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Services.
          </p>

          <h2>8. Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
          </p>

          <h2>9. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at: terms@tubetribe.com
          </p>
        </div>
      </div>
    </BasicLayout>
  );
};

export default Terms;
