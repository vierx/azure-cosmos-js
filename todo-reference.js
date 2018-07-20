const { CosmosClient } = require("./lib");

// STEVE WILL PROVIDE THESE VALUES
const endpoint = "";
const masterKey = "";

const databaseId = "UserStudyTodoApp";
const containerId = "Todos";

(async function() {
  // Instantiate a new client
  const client = new CosmosClient({ endpoint, auth: { masterKey } });

  // Get a reference to a database
  const database = client.database(databaseId);

  // Get a reference to a container
  const container = database.container(containerId);

  // Create a new item
  const body = { title: "Try out the new SDK", completed: false };
  const item = await container.items.create(body);

  // Update the items
  item.completed = true;
  const updatedItem = await container.items.upsert(item);

  // Find out how many RUs updating that item cost. The server returns it in 'x-ms-request-charge' header
  console.log("RUs used:");
  console.log(client.getHeaders(updatedItem)["x-ms-request-charge"]);
})().catch(handleError);

function handleError(error) {
  console.log();
  console.log("An error with code '" + error.code + "' has occurred:");
  console.log(error);
  console.log();
}
