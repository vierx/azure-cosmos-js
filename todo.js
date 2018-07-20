const { CosmosClient } = require("./lib");

// STEVE WILL PROVIDE THESE VALUES
const endpoint = "";
const masterKey = "";

const databaseId = "UserStudyTodoApp";
const containerId = "Todos";

(async function() {
  // Instantiate a new client
  // const client =

  // Get a reference to a database
  // const database =

  // Get a reference to a container
  // const container =

  // Create a new item
  const body = { title: "Try out the new SDK", completed: false };
  // const item =

  // Update the items
  // item.completed = true;
  // const updatedItem = await container.items.upsert(item);

  // Find out how many RUs updating that item cost. The server returns it in 'x-ms-request-charge' header
  console.log("RUs used:");
  // console.log();
})().catch(handleError);

function handleError(error) {
  console.log();
  console.log("An error with code '" + error.code + "' has occurred:");
  console.log(console.log(error));
  console.log();
}
