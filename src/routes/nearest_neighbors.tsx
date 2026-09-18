import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/nearest_neighbors")({
  component: NearestNeighborsComponent,
});

function NearestNeighborsComponent() {
  return <div>Hello from "/nearest_neighbors"!</div>;
}
