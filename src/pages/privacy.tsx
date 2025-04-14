
import { BasicLayout } from "../components/layouts/BasicLayout";

const Privacy = () => {
  return (
    <BasicLayout>
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-foreground/70">Last updated: April 14, 2025</p>
        </div>

        <div className="prose prose-lg prose-invert max-w-none">
          <p>
            At TubeTribe, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our platform.
          </p>

          <h2>Information We Collect</h2>
          <p>
            We collect information that you provide directly to us when you:
          </p>
          <ul>
            <li>Create an account</li>
            <li>Complete your profile</li>
            <li>Connect your YouTube channel</li>
            <li>Participate in community forums</li>
            <li>Contact our support team</li>
          </ul>

          <p>This information may include:</p>
          <ul>
            <li>Name and email address</li>
            <li>YouTube channel details (username, URL, subscriber count)</li>
            <li>Content category and collaboration preferences</li>
            <li>Profile photo and biography</li>
            <li>Communication histories with other creators</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, maintain, and improve our services</li>
            <li>Match you with potential collaboration partners</li>
            <li>Send you technical notices, updates, and support messages</li>
            <li>Respond to your comments, questions, and requests</li>
            <li>Monitor and analyze trends, usage, and activities</li>
            <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
          </ul>

          <h2>Sharing of Information</h2>
          <p>
            We may share information about you in the following circumstances:
          </p>
          <ul>
            <li>With other users as part of the collaboration matchmaking process</li>
            <li>With vendors, consultants, and service providers who need access to such information to perform services on our behalf</li>
            <li>In response to a request for information if we believe disclosure is in accordance with applicable law</li>
            <li>If we believe your actions are inconsistent with our user agreements or policies</li>
          </ul>

          <h2>Your Choices</h2>
          <p>
            You can access and update certain information about yourself from your account settings. You can also request deletion of your account by contacting our support team.
          </p>

          <h2>Data Security</h2>
          <p>
            We take reasonable measures to help protect information about you from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction.
          </p>

          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may change this Privacy Policy from time to time. If we make changes, we will notify you by revising the date at the top of the policy and, in some cases, we may provide you with additional notice.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at: privacy@tubetribe.com
          </p>
        </div>
      </div>
    </BasicLayout>
  );
};

export default Privacy;
