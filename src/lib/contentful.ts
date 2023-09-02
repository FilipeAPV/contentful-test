import { createClient } from "contentful";

let deliveryClient = null;

/**
 * Initialize the contentful Client
 * @param options {spaceId: string, deliveryToken: string, previewToken: string}
 *
 * @returns {undefined}
 */
export const initClients = async () => {
  const applicationName = `the-example-app.nodejs`;

  const config = {
    spaceId: process.env.CONTENTFUL_SPACE_ID,
    deliveryToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  };

  deliveryClient = createClient({
    application: applicationName,
    space: config.spaceId || "",
    accessToken: config.deliveryToken || "",
  });

  const data = await deliveryClient.getEntries({ content_type: "blogPost" });
  return data;
};
