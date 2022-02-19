import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "uy12p7sm", // find this at manage.sanity.io or in your sanity.json
  dataset: "production", // this is from those question during 'sanity init'
  apiVersion: "2022-02-19",
  useCdn: true,
});
