
import { BasicLayout } from "../components/layouts/BasicLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Card, CardContent } from "../components/ui/card";

const API = () => {
  return (
    <BasicLayout>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">TubeTribe API</h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Integrate TubeTribe's features into your applications with our comprehensive API.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
          <Card>
            <CardContent className="p-6">
              <p className="mb-4">
                TubeTribe provides a RESTful API that allows developers to access and integrate the platform's features into their own applications. To get started, you'll need an API key.
              </p>
              <div className="bg-muted p-4 rounded-md mb-4">
                <code className="text-sm">
                  curl -X POST https://api.tubetribe.com/v1/auth/key \<br />
                  -H "Content-Type: application/json" \<br />
                  -d '&#123;"email": "your-email@example.com", "password": "your-password"&#125;'
                </code>
              </div>
              <p>Once you have your API key, include it in the header of all your requests:</p>
              <div className="bg-muted p-4 rounded-md">
                <code className="text-sm">
                  curl https://api.tubetribe.com/v1/creators \<br />
                  -H "Authorization: Bearer YOUR_API_KEY"
                </code>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="endpoints" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="endpoints">API Endpoints</TabsTrigger>
            <TabsTrigger value="authentication">Authentication</TabsTrigger>
            <TabsTrigger value="ratelimits">Rate Limits</TabsTrigger>
          </TabsList>
          <TabsContent value="endpoints">
            <Card>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Creators</h3>
                  <div className="bg-muted p-3 rounded-md mb-2">
                    <code>GET /v1/creators</code> - List all creators
                  </div>
                  <div className="bg-muted p-3 rounded-md mb-2">
                    <code>GET /v1/creators/:id</code> - Get creator details
                  </div>
                  <div className="bg-muted p-3 rounded-md">
                    <code>GET /v1/creators/:id/videos</code> - Get creator's videos
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Collaborations</h3>
                  <div className="bg-muted p-3 rounded-md mb-2">
                    <code>POST /v1/collaborations</code> - Create a collaboration
                  </div>
                  <div className="bg-muted p-3 rounded-md mb-2">
                    <code>GET /v1/collaborations/:id</code> - Get collaboration details
                  </div>
                  <div className="bg-muted p-3 rounded-md">
                    <code>PUT /v1/collaborations/:id</code> - Update a collaboration
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="authentication">
            <Card>
              <CardContent className="p-6">
                <p className="mb-4">
                  TubeTribe API uses OAuth 2.0 for authentication. You can authenticate users with the following flow:
                </p>
                <ol className="list-decimal pl-5 space-y-2 mb-6">
                  <li>Redirect users to <code>https://tubetribe.com/oauth/authorize</code> with your client ID</li>
                  <li>Users authorize your application</li>
                  <li>Users are redirected back to your redirect URI with an authorization code</li>
                  <li>Exchange the authorization code for an access token</li>
                </ol>
                <div className="bg-muted p-4 rounded-md">
                  <code className="text-sm">
                    curl -X POST https://api.tubetribe.com/v1/oauth/token \<br />
                    -d 'grant_type=authorization_code' \<br />
                    -d 'client_id=YOUR_CLIENT_ID' \<br />
                    -d 'client_secret=YOUR_CLIENT_SECRET' \<br />
                    -d 'code=AUTHORIZATION_CODE' \<br />
                    -d 'redirect_uri=YOUR_REDIRECT_URI'
                  </code>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="ratelimits">
            <Card>
              <CardContent className="p-6">
                <p className="mb-4">
                  To ensure fair usage of the API, we implement rate limits based on your subscription tier:
                </p>
                <div className="relative overflow-x-auto rounded-lg">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs uppercase bg-muted">
                      <tr>
                        <th scope="col" className="px-6 py-3">Subscription Tier</th>
                        <th scope="col" className="px-6 py-3">Requests per minute</th>
                        <th scope="col" className="px-6 py-3">Requests per day</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">Free</th>
                        <td className="px-6 py-4">30</td>
                        <td className="px-6 py-4">10,000</td>
                      </tr>
                      <tr className="border-b">
                        <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">Pro</th>
                        <td className="px-6 py-4">100</td>
                        <td className="px-6 py-4">50,000</td>
                      </tr>
                      <tr>
                        <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">Enterprise</th>
                        <td className="px-6 py-4">500</td>
                        <td className="px-6 py-4">Unlimited</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </BasicLayout>
  );
};

export default API;
